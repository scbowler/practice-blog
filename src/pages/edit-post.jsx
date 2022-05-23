import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Title from '../components/title';
import { blog } from '../lib';

function EditPost() {
  const [post, setPost] = useState({ title: '', text: '' });
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    const getPost = async () => {
      const post = await blog.getPost(params.id);

      setPost(post);
    }

    getPost();
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;

    setPost({
      ...post,
      [name]: value
    });
  }

  const handleSubmit = async event => {
    event.preventDefault();

    await blog.updatePost(post, post.id);

    history.push('/');
  }

  return (
    <div className="container">
      <Title>Edit Blog Post</Title>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">Title</label>
          <input
            className="form-control"
            id="title"
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="text">Text</label>
          <textarea
            className="form-control"
            id="text"
            type="text"
            name="text"
            value={post.text}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/" className="btn btn-outline-danger me-3">Cancel</Link>
          <button className="btn btn-outline-primary">Update Post</button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
