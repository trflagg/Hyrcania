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
        this.setState({
          selectedMessage: message,
        });
      });
    });
  }

  handleSaveMessage = (newMessage) => {
    fetch(`/message/${newMessage._id}`, {
      method: 'POST',
      body: JSON.stringify(newMessage),
      headers: new Headers([
        ['Content-Type', 'application/json']
      ]),
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="master-detail-container">
          <MessageList
            onMessagePress={this.handleMessagePress}
            test={'hello'}
          />
          <MessageDetail
            message={this.state.selectedMessage}
            onSaveMessage={this.handleSaveMessage}
          />
        </div>
      </div>
    );
  }
}

export default App;
