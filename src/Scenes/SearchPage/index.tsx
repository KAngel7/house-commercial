import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import SearchForm from './Components/SearchForm';

class SearchPage extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <div className="searchPage">
        <div className="searchFormWrapper">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default SearchPage;