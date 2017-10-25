import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import RLForm from 'Components/RegisterLoginForm';
import UserMenu from 'Components/UserMenu';
import { Link } from 'react-router-dom';

interface MenuBarProps {

}

interface MenuBarState {
  isHandlerActive: boolean;
  rlFormStatus?: 'login' | 'register'; 
  isLogin: boolean;
}

class MenuBar extends React.Component<MenuBarProps, MenuBarState> {
  constructor(props: MenuBarProps) {
    super(props);
    /* Test code */
    const loginStatus: boolean = localStorage.getItem('loginStatus') === 'true';
    /* End test code */
    this.state = {
      isHandlerActive: false,
      isLogin: loginStatus
    };
  }
  toggleHandler = () => {
    this.setState({
      isHandlerActive: !this.state.isHandlerActive
    });
  }
  updateFormStatus = (status?: 'login' | 'register') => {
    this.setState({
      rlFormStatus: status
    });
  }
  loginField = () => {
    if (this.state.isLogin) {
      return (
        <li className="userMenuLi">
          <div className="userMenuWrapper">
            <UserMenu />
          </div>
        </li>
      );
    }
    return [
      (<li key="0"><a href="#" onClick={() => this.updateFormStatus('register')}>Sign Up</a></li>),
      (<li key="1"><a href="#" onClick={() => this.updateFormStatus('login')}>Sign In</a></li>)
    ];
  }
  render() {
    return (
      <div className="menuBar">
        <a href="/">
          <div className="homeLogo osLight">
            <Icon name="home" size="2x" /> 
            <span>House</span>
          </div>
        </a>
        <a 
          href="#" 
          className={'homeNavHandler visible-xs' + (this.state.isHandlerActive ? ' active' : '')} 
          onClick={this.toggleHandler}
        >
          <Icon name="bars" />
        </a>
        <div className={'homeNav' + (this.state.isHandlerActive ? ' active' : '')} >
          <ul>
            <li className="moreOption"><Link to="/search?type=sale">Buy</Link></li>
            <li className="moreOption"><Link to="/search?type=rent">Rent</Link></li>
            <li className="moreOption"><Link to="/agent/search">Renovation</Link></li>
            <li className="moreOption"><Link to="/agent/search">Commercial</Link></li>
            <li className="moreOption"><Link to="/agent/search">Project</Link></li>
            <li className="moreOption"><Link to="/agent/search">Find agent</Link></li>
            {this.loginField()}
            <li><Link to="/newproperty/sell"><div className="btn btn-green">List a Property</div></Link></li>
          </ul>
        </div>
        <RLForm 
          type={this.state.rlFormStatus} 
          openRegisterForm={() => this.updateFormStatus('register')} 
          openLoginForm={() => this.updateFormStatus('login')}
          close={() => this.updateFormStatus()}
        />
      </div>
    );
  }
}

export default MenuBar;