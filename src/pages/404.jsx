import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

import Header from '../components/Header/Header.jsx'

const NotFound = () => (
  <Page>
  <Header backLink title="Not Found"/>
    <Block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </Block>
  </Page>
);

export default NotFound;
