import React, { Component } from 'react';
import { Map } from 'immutable';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import emojiStyles from './emojiStyles.css';
import editorStyles from './editorStyles.css';

const theme = Map({
  emoji: emojiStyles.emoji,
});
const emojiPlugin = createEmojiPlugin({ theme });
const plugins = [emojiPlugin];
const text = `Cool, we can have all sorts of Emojis here. 🙌
🌿☃️🎉🙈 aaaand maybe a few more here: 🐲☀️🗻 Quite fun!`;

export default class CustomEmojiEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    return (
      <div className={ editorStyles.editor } onClick={ this.focus }>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref="editor"
        />
      </div>
    );
  }
}
