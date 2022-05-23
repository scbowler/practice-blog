import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../components/title';
import { blog } from '../lib';

function AddPost() {
  const [ form, setForm ] = useState({title: '', text: ''});
  const history = useHistory();

  const handleChange = event => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  const handleSubmit = async event => {
    event.preventDefault();

    await blog.addPost(form);

    history.push('/');
  }

  return (
    <div className="container">
      <Title>Add New Blog Post</Title>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">Title</label>
          <input 
            className="form-control"
            id="title"
            type="text"
            name="title"
            value={form.title}
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
            value={form.text}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-primary">Add Post</button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
