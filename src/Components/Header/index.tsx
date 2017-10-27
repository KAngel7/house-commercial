import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

interface MenuBarStates {
  toggleMenu: boolean;
}

class Header extends React.Component<{}, MenuBarStates> {
  constructor() {
    super();
    this.state = {
      toggleMenu: false
    };
  }
  toggleMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }
  render() {
    return (
      <div className="top-nav" role="banner">
        <Link to="/" title="Commercial Real Estate Home">
          <div className="top-nav__logo">
            Commercial Real Estate Home
          </div>
        </Link>
        <a href="#" className="top-nav__toggle" onClick={this.toggleMenu}>
          <span className="sr-only">Toggle navigation</span>
        </a>
        <p className="top-nav__label">Property</p>
        <div className={`top-nav__menu ${this.state.toggleMenu ? 'is-open' : ''}`} >
          <ul>
            <li className="top-nav__menu-item ">
              <a className="top-nav__menu-item-link" href="#">Property</a>
            </li>
            <li className="top-nav__menu-item businessSale ">
              <a
                className="top-nav__menu-item-link"
                href="#"
              >
                Business for Sale
              </a>
            </li>
            <li className="top-nav__menu-item ">
              <a
                className="top-nav__menu-item-link"
                href="#"
              >
                Franchise
              </a>
            </li>
            <li className="top-nav__menu-item ">
              <a className="top-nav__menu-item-link" href="#">News</a>
            </li>
            <li className="top-nav__menu-divider" />
            <li className="top-nav__menu-item is-link is-right">
              <a
                id="login"
                className="top-nav__menu-item-link"
                href="#"
              >
                Login
              </a>
            </li>
            <li className="top-nav__menu-item is-link is-right">
              <a
                className="top-nav__menu-item-link"
                id="signin"
                href="#"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;