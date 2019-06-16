import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './views/Home';
import Details from './views/Details';
import Login from './views/Login';
import Layout from './hoc/Layout/Layout';
import Welcome from './views/Welcome';
import NotFound from './views/NotFound';
import Chat from './views/Chat/Chat';
import Profile from './views/Profile/Profile';

import {connect } from 'react-redux';
import * as actions from './store/actions/actions'

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
    return (
    <BrowserRouter>
      <Layout>
        {this.props.isAuthenticated ? (
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/details' component={Details} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/chat' component={Chat} />
          <Route path='/profile' component={Profile} />
          <Route
            path="/logout"
            render={() => {
              this.props.onLogout();
              return <Redirect to="/login" />;
            }}
          />
        <Route component={NotFound} />
      </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        )}
          </Layout>
    </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    site: state.site
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
