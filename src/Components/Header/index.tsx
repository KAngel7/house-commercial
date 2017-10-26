import * as React from 'react';
import './style.css';

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
        <a href="https://www.commercialrealestate.com.au/" title="Commercial Real Estate Home">
          <div className="top-nav__logo">
            Commercial Real Estate Home
          </div>
        </a>
        <a href="#" className="top-nav__toggle" onClick={this.toggleMenu}>
          <span className="sr-only">Toggle navigation</span>
        </a>
        <p className="top-nav__label">Property</p>
        <div className={`top-nav__menu ${this.state.toggleMenu ? 'is-open' : ''}`} >
          <ul>
            <li className="top-nav__menu-item ">
              <a className="top-nav__menu-item-link" href="https://www.commercialrealestate.com.au">Property</a>
            </li>
            <li className="top-nav__menu-item businessSale ">
              <a
                className="top-nav__menu-item-link"
                href="https://www.commercialrealestate.com.au/business/"
              >
                Business for Sale
              </a>
            </li>
            <li className="top-nav__menu-item ">
              <a
                className="top-nav__menu-item-link"
                href="https://www.commercialrealestate.com.au/franchise/"
              >
                Franchise
              </a>
            </li>
            <li className="top-nav__menu-item ">
              <a className="top-nav__menu-item-link" href="https://www.commercialrealestate.com.au/news/">News</a>
            </li>
            <li className="top-nav__menu-divider" />
            <li className="top-nav__menu-item is-link is-right is-cta">
              <a
                id="login"
                className="top-nav__menu-item-link"
                href="/account/logon?returnUrl=https%3A%2F%2Fwww.commercialrealestate.com.au%2F"
              >
                Login
              </a>
            </li>
            <li className="top-nav__menu-item is-link is-right">
              <a
                className="top-nav__menu-item-link"
                id="signin"
                href="/account/signup?returnUrl=https%3A%2F%2Fwww.commercialrealestate.com.au%2F"
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