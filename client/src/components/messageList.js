import React, { Component } from 'react';

class MessageList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    fetch('/messages').then(response => {
      response.json().then(messages => {
        this.setState({ messages });
      });
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr><td>Name</td></tr>
        </thead>
        <tbody>
        {this.state.messages && this.state.messages.map(message => (
          <tr key={message._id}>
            <td>{message._name}</td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
}

export default MessageList;
