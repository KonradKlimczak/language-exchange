import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Page/Main';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Main />
          <footer style={{ backgroundColor: 'var(--thirdary-color)' }}>Footer</footer>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
