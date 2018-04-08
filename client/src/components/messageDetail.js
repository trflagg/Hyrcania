import React, { Component } from 'react';

import EditableField from './editableField';

import './messageDetail.css';

class MessageDetail extends Component {

  handleFieldUpdate = (fieldName, newText) => {
    let message = this.props.message;
    message[fieldName] = newText;

    this.props.onSaveMessage(message);
  }

  render() {
    const { message } = this.props;

    if (!message) {
      return null;
    }

    return (
      <div className="message-detail">
        <p className="id-field">{message._id}</p>
        <EditableField
          className="message-field"
          fieldName={"_name"}
          fieldText={message._name}
          onFieldUpdate={this.handleFieldUpdate}
        />
        <EditableField
          className="text-field"
          fieldName={"_text"}
          fieldText={message._text}
          onFieldUpdate={this.handleFieldUpdate}
        />
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default MessageDetail;

