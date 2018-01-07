import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default () => (
  <header className="lele--header">
    Language Exchange
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create-lesson">Create Lesson</Link>
    </nav>
  </header>
);
