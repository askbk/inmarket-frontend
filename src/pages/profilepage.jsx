import React from 'react';

//import styling
import '../css/profile.css';

//import components
import Button from '../components/UI/Button/StyledButton';
import Header from '../components/ProfilePage/ProfilePageHeader/ProfilePageHeader';

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
} from 'framework7-react';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Page name="home" className="profilePage">
                <div>
                  <Header />
                </div>
                <Row className="profilePageButtonContainer">
                  <Button>SE LOGG</Button>
                  <Button>SE ANSATTE</Button>
                </Row>
            </Page>

        )
    }
}
