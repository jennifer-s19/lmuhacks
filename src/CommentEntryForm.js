import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import uuidv4 from 'uuid/v4';

export default function CommentEntryForm( { adder }) {
  const [content, setContent] = useState('');
  function submit(e) {
    e.preventDefault();
    if (content.trim()) {
      adder(content);
    }
    setContent('');
  }
  return (
    <form onSubmit={submit}>
      <TextField
        label="Have tips as to how to speed up the installation process? Add a comment!"
        value={content}
        fullWidth={true}
        onChange={e => setContent(e.target.value)}
        margin="normal"
      />
    </form>  
  )
}