import React, { Component } from 'react';
import './App.css';

import MessageList from './components/messageList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageList />
      </div>
    );
  }
}

export default App;
