import React, { Component, PropTypes } from 'react';
import { EditorState } from 'draft-js-cutting-edge';

import Button from '../Button';

class UndoButton extends Component {
  onClick = () => {
    this.props.onChange(EditorState.undo(this.props.editorState));
  };

  render() {
    return (
      <Button onClick={this.onClick}>↺</Button>
    );
  }
}

UndoButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  editorState: PropTypes.any.isRequired,
};

export default UndoButton;
