import React from 'react';
import { Page, Navbar, Block, Toolbar, Link } from 'framework7-react';

import Header from '../components/Header/Header.jsx'

import '../css/toolbar.css'

const NotFound = () => (
  <Page>
  <Header backLink title="Not Found"/>
    <Block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </Block>
    <Toolbar className="bottomToolbar" tabbar labels bottom>
      <Link className="bottomToolbarLink toolbarIcon" href="/" iconF7="home" />
      <Link className="bottomToolbarLink toolbarIcon" href="/nettverk/" iconF7="search" />
      <Link className="bottomToolbarLink toolbarIcon" href="/activities/" iconF7="email" />
      <Link className="bottomToolbarLink toolbarIcon" href="/profile/me" iconF7="person_round" />
    </Toolbar>
  </Page>
);

export default NotFound;
