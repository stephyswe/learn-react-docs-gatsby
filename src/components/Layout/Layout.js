/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import React, {Component} from 'react';

type Props = {
  children: Function,
  location: Location,
};

class Template extends Component<Props> {
  render() {
    const {children, location} = this.props;

    return (
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 40px)',
        }}>
        {children}
      </div>
    );
  }
}

export default Template;
