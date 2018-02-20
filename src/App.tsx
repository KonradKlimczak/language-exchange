import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header/Header';
import Main from './Page/Main';

import './App.css';

enum AuthKind {
  Guest = 'Guest',
  User = 'User'
}

interface AppProps {}
interface AppState {
  app:
    | {
        kind: AuthKind.Guest;
      }
    | {
        kind: AuthKind.User;
        user: {
          username: string;
        };
      };
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      app: {
        kind: AuthKind.Guest
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
