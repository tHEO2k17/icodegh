import React, { Component } from 'react';
import Layout from './components/shared/Layout';
import Home from './components/pages/Home';

class App extends Component {
  render() {
    return (
      <Layout>
        <Home/>
      </Layout>
    );
  }
}

export default App;
