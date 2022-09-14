import React, {Component} from 'react';
import Layout from '../components/Layout';

class Home extends Component {
  render() {
    const {data, location} = this.props;
    return <Layout location={location}>New Site</Layout>;
  }
}

export default Home;
