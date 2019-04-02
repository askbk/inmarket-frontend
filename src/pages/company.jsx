import React from 'react';

//import styling
import '../css/company.css';

//import components
import Button from '../components/shared/Button/StyledButton';
import Header from '../components/CompanyPage/CompanyHeader/CompanyPageHeader';
import CompanyPageInformation from '../components/shared/InformationBox/InformationBox';

import {
  Page,
  Row,
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
                InMarket er en brukerstyrt plattform som på app og nettiside lar bedrifter møte potensielle arbeidstakere ved bruk av automatiserte systemer.
                </CompanyPageInformation>
            </Page>

        )
    }
}
