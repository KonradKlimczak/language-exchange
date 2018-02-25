import * as React from 'react';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';
import { UserLink } from '../Components/UserLink';

import './Header.css';

interface HeaderState {
  menuOpened: boolean;
}

export default class Header extends React.Component<{}, HeaderState> {
  state = {
    menuOpened: false
  };
  handleToggleOpen = () => {
    this.setState({
      menuOpened: !this.state.menuOpened
    });
  }
  render() {
    return (
      <header className={classnames('header', { 'is-active': this.state.menuOpened })}>
        <div className="burger-icon" onClick={this.handleToggleOpen}>
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/">
              <UserLink gold={2} silver={5} bronze={2} />
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}
