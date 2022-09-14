import React from 'react';

type Props = {
  location: Location,
};

const PageNotFound = ({location}: Props) => (
  <Layout location={location}>404</Layout>
);

export default PageNotFound;
