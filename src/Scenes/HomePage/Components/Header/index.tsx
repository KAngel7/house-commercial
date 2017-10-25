import * as React from 'react';
import './style.css';
import MenuBar from './Components/MenuBar';
import SlideShow from './Components/SlideShow';
import SearchBar from './Components/SearchBar';
import { Link } from 'react-router-dom';

class Header extends React.Component<{}, {}> {

  render() {
    return (
      <div className="header">
        <div className="slideShowBarWrapper">
          <SlideShow />
        </div>
        <div className="menuBarWrapper">
          <MenuBar />
        </div>
        <div className="homeCaption">
          <div className="homeTitle">Now it's easy to find your future home</div>
          <div className="homeSubtitle">With Reales - Real Estate HTML Template</div>
          <Link className="btn btn-black" to="/search">Learn More</Link>
        </div>
        <div className="selectBarWrapper">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Header;