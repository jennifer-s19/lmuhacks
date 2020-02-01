import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export default function Comments({ comments }) {
  const commentList = comments.length ? (
    comments.map(comment => {
      return (
        <Fragment key={Math.random()}>
          <ListItem>
              {comment}
          </ListItem>
          <Divider />
        </Fragment>
      );
    })
  ) : (
    <p>No comments yet</p>
  );
  return <List style={{marginTop: 20}}>{commentList}</List>;
}