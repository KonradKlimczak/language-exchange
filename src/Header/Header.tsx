import * as React from 'react';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';

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
              <i className="fa fa-user-circle" />
              <div style={{ marginLeft: '5px', marginRight: '5px' }}>
                1 <i style={{ color: 'gold' }} className="fa fa-trophy" />
              </div>
              <div style={{ marginLeft: '5px', marginRight: '5px' }}>
                5 <i style={{ color: 'silver' }} className="fa fa-trophy" />
              </div>
              <div style={{ marginLeft: '5px', marginRight: '5px' }}>
                20 <i style={{ color: 'sandybrown' }} className="fa fa-trophy" />
              </div>
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}
