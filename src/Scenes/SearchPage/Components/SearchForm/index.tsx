import * as React from 'react';
import './style.css';
import SingelHouse from 'Components/SingleHouse';
import SearchMap from '../SearchMap';
import SelectComponent from 'Components/SelectComponent';
import { Icon } from 'react-fa';

const houseData: any[] = [{
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
}, {
  name: 'Hauntingly Beautiful Estate',
  address: ' 169 Warren St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png'
}, {
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
}, {
  name: 'Hauntingly Beautiful Estate',
  address: ' 169 Warren St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png'
}];

interface SearchFormState {
  resultTab: 'list' | 'map';
}

class SearchForm extends React.Component<{}, SearchFormState> {
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
  constructor() {
    super();
    this.state = {
      resultTab: 'map'
    };
  }
  changeResultTab = (tab: 'list' | 'map') => {
    if (tab !== this.state.resultTab) {
      this.setState({
        resultTab: tab
      });
    }
  }
  resultList = () => {
    return (
      <div className="resultsList">
        <div className="row">
          {houseData.map((data, index) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={index}>
                <SingelHouse data={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  resultListMini = () => {
    return (
      <div className="resultsList">
        <div className="row">
          {houseData.map((data, index) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" key={index}>
                <SingelHouse data={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  resultMap = () => {
    return (
      <div className="resultsMap">
        <div className="searchMapWrapper">
          <SearchMap />
        </div>
        <div className="searchListWrapper">
          {this.resultListMini()}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="searchForm">
        <div className="resultTable">
          <div className="resultTab">
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
                <button className="btn btn-green"><Icon name="search" /></button>
              </div>
            </div>
            <ul>
              <li
                className={this.state.resultTab === 'map' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('map')}
              >
                <a><Icon name="map-o" /> Map view</a>
              </li>
              <li
                className={this.state.resultTab === 'list' ? 'active' : ''}
                onClick={(e) => this.changeResultTab('list')}
              >
                <a><Icon name="th-list" /> Listing view</a>
              </li>
            </ul>
          </div>
          <div className="resultBody">
            {this.state.resultTab === 'list' ? this.resultList() : this.resultMap()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;