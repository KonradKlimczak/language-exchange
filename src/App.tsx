import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Page/Main';

import './App.css';

interface AppProps {}
interface AppState {
  user: {
    username: string;
  };
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      user: {
        username: 'Konrad Klimczak'
      }
    };
  }
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
