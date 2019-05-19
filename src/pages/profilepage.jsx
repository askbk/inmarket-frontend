import React from 'react';

//import styling
import '../css/profile.css';
import '../css/toolbar.css';

//import components
import Button from '../components/shared/Button/StyledButton';
import ProfilePageHeader from '../components/ProfilePage/ProfilePageHeader/ProfilePageHeader';
import ProfileInformation from '../components/shared/InformationBox/InformationBox';
import ProfileSkills from '../components/ProfilePage/ProfileSkills/ProfileSkills';
import Header from '../components/Header/Header.jsx'

import {
  Page,
  Row,
  Toolbar,
  Link
} from 'framework7-react';

class ProfilePage extends React.Component {
    constructor() {
        super();
        this.state= {
            profileText: "Jeg er tidligere finalist i Norsk Informatikkolympiade, tar mastergrad i datateknologi ved NTNU, og har hovedansvaret for utvikling av InMarkets nettsider og app.",
            skills: [{text: "Hacking", rating: 4.1}, {text: "Programmering", rating: 5.0}],
            previousWork: '',
          }
        }

    render() {
        return (
            <Page name="home" className="profilePage">
                <Header backLink title="Profil"/>
                <div>
                  <ProfilePageHeader />
                </div>
                <Row className="profilePageButtonContainer">
                  <Button>SE LOGG</Button>
                  <Button>SE ANSATTE</Button>
                </Row>
                <ProfileInformation>
                {this.state.profileText}
                </ProfileInformation>
                <ProfileSkills skills={this.state.skills} />
                <Toolbar className="bottomToolbar" tabbar labels bottom>
                  <Link className="bottomToolbarLink toolbarIcon" href="/" iconF7="home" />
                  <Link className="bottomToolbarLink toolbarIcon" href="/nettverk/" iconF7="search" />
                  <Link className="bottomToolbarLink toolbarIcon" href="/activities/" iconF7="email" />
                  <Link className="bottomToolbarLink toolbarIcon" tabLinkActive href="/profile/me" iconF7="person_round" />
                </Toolbar>
            </Page>

        )
    }
}

export default ProfilePage;
