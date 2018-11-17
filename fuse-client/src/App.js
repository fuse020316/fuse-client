import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Switch>
            <Route path="/checkout" />
            <Route path="/orders" />
            <Route path="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
