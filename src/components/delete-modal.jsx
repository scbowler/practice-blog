import React from 'react';

function DeleteModal({ deletePost, post, close }) {
  if (!post) return null;

  return (
    <div className="delete-modal" onClick={close}>
      <div className="delete-modal-content" onClick={e => e.stopPropagation()}>
        <h1 className="text-danger">Delete Post?</h1>
        <p className="my-5">Are you sure you want to delete the post titled: <strong>{post.title}</strong></p>
        <div className="text-center">
          <button className="btn btn-outline-danger me-5" onClick={close}>Cancel</button>
          <button className="btn btn-outline-success" onClick={deletePost}>Delete Post</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
