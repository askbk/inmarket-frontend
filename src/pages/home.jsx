import React from 'react';
import Profile from '../components/network/Profile/Profile.jsx'
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Page name="home">
            <Profile/>
              {/* Top Navbar */}
              <Navbar sliding={false}>
                <NavTitle sliding>InMarket</NavTitle>
                <NavRight>
                  <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
                </NavRight>
              </Navbar>
              {/* Toolbar */}
              <Toolbar bottom>
                <Link>Left Link</Link>
                <Link>Right Link</Link>
              </Toolbar>
              {/* Page content */}
              <Block strong>
                <p>Here is your blank Framework7 app.</p>
              </Block>

              <BlockTitle>Modals</BlockTitle>
              <Block strong>
                <Row>
                  <Col width="50">
                    <Button fill raised popupOpen="#my-popup">Popup</Button>
                  </Col>
                  <Col width="50">
                    <Button fill raised href="/logginn/">Login Screen</Button>
                  </Col>
                </Row>
              </Block>
            </Page>

        )
    }
}
