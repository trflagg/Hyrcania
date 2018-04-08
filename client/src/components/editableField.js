import React, { Component } from 'react';

class EditableField extends Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      editing: false,
      text: props.fieldText,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      text: newProps.fieldText,
    });
  }

  submitChange = () => {
    this.setState({ editing: false });
    this.props.onFieldUpdate(this.props.fieldName, this.state.text);
  }

  handleTextClick = () => {
    this.setState({ editing: true });
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleBlur = () => {
    this.submitChange();
  }

  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.submitChange();
    }
  }

  render() {
    const { editing, text } = this.state;
    return (
      <div className="editable-field">
        {editing &&
            <div>
              <input
                type="text"
                value={text}
                onChange={this.handleTextChange}
                onBlur={this.handleBlur}
                onKeyPress={this.handleKeyPress}
              />
            </div>
        }
        {!editing &&
            <p onClick={this.handleTextClick}>
              {this.state.text}
            </p>
        }
      </div>
    );
  }
}

export default EditableField;


