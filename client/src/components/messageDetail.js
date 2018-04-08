import React, { Component } from 'react';

import './messageDetail.css';

class MessageDetail extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    console.log('render');
    console.log(this.props.message);
    const { message } = this.props;
    if (!message) {
      return null;
    }

    return (
      <div className="message-detail">
        <p>ID = {message._id}</p>
        <p>Name = {message._name}</p>
        <p>Text = {message._text}</p>
      </div>
    );
  }
}

export default MessageDetail;

