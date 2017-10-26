import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from 'Components/Header';
import SelectComponent from 'Components/SelectComponent';
import './style.css';
import { Icon } from 'react-fa';

class HomePage extends React.Component<RouteComponentProps<any>, {}> {
  salePropertys = [
    'For Sale',
    'For Lease',
    'Sold',
    'Leased'
  ];
  proTypes = [
    'Property Type',
    'Retail',
    'Offices'
  ];
  prices = [
    'Price',
    '$ 50,000',
    '$ 100,000',
    '$ 150,000',
    '$ 200,000'
  ];
  sizes = [
    'Size',
    '20 m2',
    '40 m2',
    '60 m2',
    '80 m2'
  ];
  content = () => {
    return (
      <div className="homepageTop">
        <div className="topContainer">
          <h1 className="topCaption">Australia's leading commercial property site</h1>
          <div className="topUserBar">
            <div className="userBarMode userBarItems">
              <SelectComponent listItem={this.salePropertys} />
            </div>
            <div className="userBarSearchBox userBarItems">
              <input type="text" name="" id="" className="form-control" placeholder="Search by location or keyword" />
            </div>
            <div className="userBarItems userBarProType">
              <SelectComponent listItem={this.proTypes} />
            </div>
            <div className="userBarItems userBarPrice">
              <SelectComponent listItem={this.prices} />
            </div>
            <div className="userBarItems userBarSize">
              <SelectComponent listItem={this.sizes} />
            </div>
            <div className="userBarItems userBarBtn">
              <button className="btn btn-green"><Icon name="search"/></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="homePage">
        <div className="headerWrapper">
          <Header />
        </div>
        <div className="bodyWrapper">
          {this.content()}
        </div>
      </div>
    );
  }
}

export default HomePage;