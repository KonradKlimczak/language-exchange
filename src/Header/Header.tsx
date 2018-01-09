import * as React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default () => (
  <header className="lele--header">
    <div className="burger-icon">
      <i className="fa fa-bars" aria-hidden="true" />
    </div>
    <h1>Language Exchange</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create-lesson">Create Lesson</Link>
    </nav>
  </header>
);
