import * as React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

import Main from './Page/Main';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            Language Exchange
          <nav>
              <Link to="/">Home</Link>
              <Link to="/create-lesson">Create Lesson</Link>
            </nav>
          </header>
          <div>
            <Main />
          </div>
          <footer>
            Footer
        </footer>
        </div>
      </Router>
    );
  }
}

export default App;
