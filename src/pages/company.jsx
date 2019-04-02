import React from 'react';

//import styling
import '../css/company.css';

//import components
import Button from '../components/shared/Button/StyledButton';
import CompanyHeader from '../components/CompanyPage/CompanyHeader/CompanyPageHeader';
import CompanyPageInformation from '../components/shared/InformationBox/InformationBox';

import {
  Page,
  Row,
} from 'framework7-react';

import Header from '../components/Header/Header.jsx'

class Company extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Page name="company" className="companyPage">
                <Header backLink title="Company"/>
                <div>
                  <CompanyHeader />
                </div>
                <Row className="companyPageButtonContainer">
                  <Button>SE LOGG</Button>
                  <Button>SE ANSATTE</Button>
                </Row>
                <CompanyPageInformation>
                InMarket er en brukerstyrt plattform som på app og nettiside lar bedrifter møte potensielle arbeidstakere ved bruk av automatiserte systemer.
                </CompanyPageInformation>
            </Page>

        )
    }
}

export default Company;
