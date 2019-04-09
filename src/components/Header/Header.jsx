import React, { Component } from 'react';

//import pictures for navbar and sidebar
import Logo from '../../../assets-src/Navbar/inMarketlogo.png';

//import stylesheet
import './Header.css';

//import Framework 7 files
import {
  Navbar,
  List,
  ListItem,
  NavLeft,
  NavTitle,
  NavRight,
  Link,
} from 'framework7-react';

/* Contains both the header and link to sidebar */
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar" sliding={false}>
          <div className="navbarcontent">
                <img className="navbarlogo" src={Logo} />
                <NavTitle className="navbartitle"><Link href="/profilepage/">Navn Navnesen</Link></NavTitle>
                <NavTitle className="navbartitle"><Link href="/conversations/" iconF7="chat"/></NavTitle>
                <NavRight className="navright">
                  <Link panelOpen="right" iconF7="menu"></Link>
                </NavRight>
          </div>
        </Navbar>
        {this.props.backLink && <Navbar backLink="Back" title={this.props.title}/>}
        </React.Fragment>
    );
  }
}

export default Header;
