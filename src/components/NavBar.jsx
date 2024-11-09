// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Task List</Link>
        </li>
        <li>
          <Link to="/create">Create Task</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
