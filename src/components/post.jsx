import React from 'react';

function Post({ id, text, timestamp, title, onDelete }) {
  return (
    <li className="list-group-item">
      <h2 className="d-flex justify-content-between">
        <span>{title}</span>
        <i className="fas fa-trash text-danger delete-post" onClick={onDelete} />
      </h2>
      <div dangerouslySetInnerHTML={{__html: text}} />
    </li>
  );
}

export default Post;
