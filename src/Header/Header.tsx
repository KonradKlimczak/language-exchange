import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default () => (
  <header className="lele--header">
    <div className="lele--burger-icon">
      <i className="fa fa-bars" aria-hidden="true" />
    </div>
    <h1>Language Exchange</h1>
    <div className="search-input">
      <input type="search" placeholder="Search..." list="product-suggestions" />
      <i className="fa fa-search" aria-hidden="true" />
    </div>
    <ul className="lele--menu">
      <li className="lele--menu-item">
        <Link to="/">Home</Link>
      </li>
      <li className="lele--menu-item">
        <Link to="/create-lesson">Create Lesson</Link>
      </li>
    </ul>
  </header>
);
