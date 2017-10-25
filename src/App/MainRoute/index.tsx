import * as React from 'react';
import './Bootstrap/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getUserToken } from 'Services/Api/Token';
import { connect } from 'react-redux';
import { authenticate } from 'Redux/Modules/User';
import SearchPage from 'Scenes/SearchPage';

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => ({
  authUser: () => {
    dispatch(authenticate());
  }
});

interface AppState {
  
}

interface AppProps {
  authUser: () => void;
}

class App extends React.Component<AppProps, AppState> {
  componentDidMount() {
    const userToken = getUserToken();
    if (userToken) {
      this.props.authUser();
    }
  }
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Route exact={true} path="/search" component={SearchPage} />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
