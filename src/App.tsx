import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Page/Main';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main />
          <footer>Footer</footer>
        </div>
      </Router>
    );
  }
}

export default App;
