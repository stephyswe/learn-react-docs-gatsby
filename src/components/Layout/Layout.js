/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import React, {Component} from 'react';
import Flex from 'components/Flex';
import Header from 'components/LayoutHeader';
import Footer from 'components/LayoutFooter';
import {media} from 'theme';

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
        <Header location={location} />
        <Flex
          direction="column"
          shrink="0"
          grow="1"
          valign="stretch"
          css={{
            flex: '1 0 auto',
            marginTop:
              'calc(var(--header-height-large) + var(--survey-banner-height-normal) + var(--social-banner-height-normal))',
            [media.size('medium')]: {
              marginTop:
                'calc(var(--header-height-normal) + var(--survey-banner-height-normal) + var(--social-banner-height-normal))',
            },
            [media.lessThan('small')]: {
              marginTop:
                'calc(var(--header-height-small) + var(--survey-banner-height-small) + var(--social-banner-height-small))',
            },
          }}>
          {children}
        </Flex>
        <Footer />
      </div>
    );
  }
}

export default Template;
