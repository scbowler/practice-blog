import React from 'react';
import { Link } from 'react-router-dom';

function Post({ id, text, timestamp, title, onDelete }) {
  return (
    <li className="list-group-item">
      <h2 className="d-flex justify-content-between">
        <span>{title}</span>
        <span className="action-icons">
          <Link to={`/edit-post/${id}`} className="me-3">
            <i className="fas fa-pencil-alt text-primary" />
          </Link>
          <i className="fas fa-trash text-danger" onClick={onDelete} />
        </span>
      </h2>
      <div dangerouslySetInnerHTML={{__html: text}} />
    </li>
  );
}

export default Post;
