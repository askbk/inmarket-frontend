import React from 'react';

//import styling
import '../css/company.css';

//import components
import Button from '../components/UI/Button/StyledButton';
import Header from '../components/CompanyPage/CompanyHeader/CompanyPageHeader';
import CompanyPageInformation from '../components/CompanyPage/CompanyInformation/CompanyPageInformation';

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
            <Page name="home" className="companyPage">
                <div>
                  <Header />
                </div>
                <Row className="companyPageButtonContainer">
                  <Button>SE LOGG</Button>
                  <Button>SE ANSATTE</Button>
                </Row>
                <CompanyPageInformation>
                  
                </CompanyPageInformation>
            </Page>

        )
    }
}
