import React from 'react';
import Layout from '../components/Layout';

type Props = {
  location: Location,
};

const PageNotFound = ({location}: Props) => (
  <Layout location={location}>404</Layout>
);

export default PageNotFound;
