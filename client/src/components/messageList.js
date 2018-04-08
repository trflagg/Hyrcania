import React, { Component } from 'react';

import './messageList.css';

class MessageList extends Component {
  render() {
    return (
      <table className="message-list">
        <tbody>
        {this.props.messages && this.props.messages.map(message => (
          <tr onClick={() => this.props.onMessagePress(message._id)} key={message._id}>
            <td >{message._name}</td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
}

export default MessageList;
