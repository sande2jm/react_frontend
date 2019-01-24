import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor () {
    super()
    this.state = {
      username: ''
    }
    this.sendMessageToSQS = this.sendMessageToSQS.bind(this)
    this.consumeMessage = this.consumeMessage.bind(this)
  }
  sendMessageToSQS () {
    axios.get('http://127.0.0.1:8081/complex/publish_sqs')
        .then(response => console.log(response))
  }
  consumeMessage () {
    axios.get('http://127.0.0.1:8081/complex/consume_sqs')
        .then(response => console.log(response))
  }
  render () {
    return (

        <div className='button__container'>
          <button className='button' onClick={this.sendMessageToSQS}>
            SQS-Publish
          </button>
          <button className='button' onClick={this.consumeMessage}>
            SQS-Consume
          </button>
        </div>
    )
  }
}


export default App;
