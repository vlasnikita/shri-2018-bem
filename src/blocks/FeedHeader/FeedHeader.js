import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import zenLogo from './zen_logo.png';
import zenLogo2x from './zen_logo@2x.png';
import zenLogo3x from './zen_logo@3x.png';

export default decl({
  block: 'FeedHeader',
  content() {
    return (
      <Fragment>
        <picture>
          <source srcSet={zenLogo} media="(max-width: 320px)" />
          <source srcSet={zenLogo2x} media="(max-width: 768px)" />
          <img src={zenLogo3x} alt="Яндекс.Дзен" />
        </picture>
      </Fragment>
    );
  }
});
