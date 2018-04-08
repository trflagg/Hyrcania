import React, { Component } from 'react';
import './App.css';

import MessageList from './components/messageList';
import MessageDetail from './components/messageDetail';
import Header from './components/header';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      selectedMessage: null,
    };
  }

  handleMessagePress = (message_id) => {
    fetch(`/message/${message_id}`).then(response => {
      response.json().then(message => {
        console.log(message);
        this.setState({
          selectedMessage: message,
        });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MessageList
          onMessagePress={this.handleMessagePress}
          test={'hello'}
        />
        <MessageDetail
          message={this.state.selectedMessage}
        />
      </div>
    );
  }
}

export default App;
