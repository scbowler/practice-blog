import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/">View Posts</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-post">Add Post</Link>
      </li>
    </ul>
  );
}

export default Nav;
