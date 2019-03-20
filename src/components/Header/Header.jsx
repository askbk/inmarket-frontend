import React, { Component } from 'react';

//import pictures for navbar and sidebar
import Logo from '../../../assets-src/Navbar/inMarketlogo.png';
import EditProfile from '../../../assets-src/SidebarIcons/editProfile.png';
import  Settings from '../../../assets-src/SidebarIcons/settings.png';
import  Network from '../../../assets-src/SidebarIcons/network.png';
import Saved from '../../../assets-src/SidebarIcons/saved.png';

//import stylesheet
import './Header.css';


//import Framework 7 files
import {
  Panel,
  View,
  Page,
  Navbar,
  List,
  ListItem,
  NavTitle,
  NavRight,
  Link,
  Toolbar,
} from 'framework7-react';

/* Contains both the header and navbar */
class Header extends Component {
  render() {
    return (
      <React.Fragment>
          {/* Right panel with reveal effect*/}
        <Panel right cover>
          <Page>
            <Navbar />
            <List>
                {/* Must implement edit profile tab and insert here */}
              <ListItem panelClose="right" link="/about/" title='REDIGER PROFIL' media={EditProfile} />
                {/* Must implement settings tab and insert here */}
              <ListItem panelClose="right" link="/form/" title='INNSTILLINGER' media={Settings}/>
                {/* Must implement network tab and insert here */}
              <ListItem panelClose="right" link="/nettverk/" title='NETTVERK' media={Network}/>
              {/* Must implement saved tab and insert here */}
              <ListItem panelClose="right" link="/nettverk/" title='LAGRET' media={Saved}/>
            </List>
          </Page>
        </Panel>
        <Navbar className="navbar" sliding={false}>
          <div className="navbarcontent">
                <img className="navbarlogo" src={Logo} />
                <NavTitle className="navbartitle">NAVN</NavTitle>
                <NavTitle className="navbartitle">NOTIFIKASJONER</NavTitle>
                <NavRight className="navright">
                  <Link panelOpen="right"><NavTitle className="navbartitle">MENU</NavTitle></Link>
                </NavRight>
          </div>
              </Navbar>
              {/* Toolbar */}
        {/* Your main view, should have "view-main" class */}
        <View main pushState className="safe-areas" url="/" />
       </React.Fragment>
    );
  }
}

export default Header;