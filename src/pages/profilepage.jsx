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
import Modal from '../components/ProfilePage/ProfilePageHeaderModal/ProfilePageHeaderModal';
import AboutForm from '../components/ProfilePage/ProfilePageAboutForm/ProfilePageAboutForm';
import BioForm from '../components/ProfilePage/ProfilePageBioForm/ProfilePageBioForm';
import ProfilePageSkillsForm from '../components/ProfilePage/ProfilePageSkillsForm/ProfilePageSkillsForm';

import {
  Page,
  Row,
  Toolbar,
  Link,
  Popup,
  Navbar,
  NavRight,
  NavLeft,
  Block,
  ListInput,
  List
} from 'framework7-react';

class ProfilePage extends React.Component {
    constructor() {
        super();
        this.state= {
            profileText: "Jeg er tidligere finalist i Norsk Informatikkolympiade, tar mastergrad i datateknologi ved NTNU, og har hovedansvaret for utvikling av InMarkets nettsider og app.",
            skills: [{text: "Hacking", rating: 4.1}, {text: "Programmering", rating: 5.0}, {text:"Lederegenskaper", rating: 4.3}],
            activeSkills: ["Hacking", "Programmering"],
            previousWork: '',
            popupOpen: false,
            currentForm: "",
            firstName: "Ask",
            lastName: "Kolltveit",
            birthday: "",
            role: "",
            institution: "",
            formerEmployers: ""
          }
        }

    handleChange(data, information_type){
      console.log(data);
      if(information_type === "bio"){
        this.setState({profileText: data});
      } else if (information_type === "First Name"){
        this.setState({firstName: data});
      } else if (information_type === "Last Name"){
        this.setState({lastName: data});
      } else if (information_type === "Birthday"){
        const date = new Date(data);
        this.setState({birthday: date});
      } else if (information_type === "Role"){
        this.setState({role: data});
      } else if (information_type === "Institution"){
        this.setState({institution: data});
      } else if (information_type === "Former Employers"){
        this.setState({formerEmployers: data});
      } else if (information_type === "skill"){
        this.setState({skills: this.state.skills.concat({text: data, rating: 0})});
      }
    }

    handleChecked(e, text){
      const checked = e.target.checked;
      this.setState((state) => {
        let newActiveSkills = state.activeSkills;
        if(checked && state.activeSkills.length < 3){
          newActiveSkills.concat(text)
        } else {
          newActiveSkills = newActiveSkills.filter(a => a !== text)
        }
        return {activeSkills: newActiveSkills}
      })
      console.log(this.state.activeSkills)
    }

    render() {

      const {profileText, skills, activeSkills, previousWork, popupOpen, currentForm, firstName, lastName, birthday, role, institution, formerEmployers} = this.state;

      const isCurrentUser = true;

      let profilePageHeader = (
        <div>
          <ProfilePageHeader />
        </div>
      );

      let profileInformation = (
        <ProfileInformation>
          {profileText}
        </ProfileInformation>
      );

      let profileSkills = (
        <ProfileSkills activeSkills={activeSkills} skills={skills} />
      );

      if(isCurrentUser){
        profilePageHeader = (
        <button className = "profilePageModalButton" onClick={()=>this.setState({popupOpen: true, currentForm:'about'})}>
          {profilePageHeader}
        </button>);
        profileInformation = (
          <button className = "profilePageModalButton" onClick={()=>this.setState({popupOpen: true, currentForm:'bio'})}>
            {profileInformation}
          </button>
        );
        profileSkills = (
          <button className = "profilePageModalButton" onClick={()=>this.setState({popupOpen: true, currentForm:'skills'})}>
            {profileSkills}
          </button>
        );
      } 
      
      let form
      if(currentForm === 'about'){
        form = (<AboutForm onChange = {this.handleChange.bind(this)} 
        firstName = {firstName}
        lastName = {lastName}
        birthday = {birthday}
        role = {role}
        institution = {institution}
        formerEmployers = {formerEmployers}/>)
      } else if (currentForm === 'bio'){
        form = (<BioForm onChange = {this.handleChange.bind(this)} bio = {profileText}/>)
      } else{
        form = (<ProfilePageSkillsForm onChecked={this.handleChecked.bind(this)} activeSkills={activeSkills} handleAdd={this.handleChange.bind(this)} skills={skills}/>);
      }

        return (
            <Page name="home" className="profilePage">
                <Header backLink title="Profil"/>
                {profilePageHeader}
                <Row className="profilePageButtonContainer">
                  <Button>SE LOGG</Button>
                  <Button>SE ANSATTE</Button>
                </Row>
                {profileInformation}
                {profileSkills}
                <Toolbar className="bottomToolbar" tabbar labels bottom>
                  <Link className="bottomToolbarLink toolbarIcon" href="/" iconF7="home" />
                  <Link className="bottomToolbarLink toolbarIcon" href="/nettverk/" iconF7="search" />
                  <Link className="bottomToolbarLink toolbarIcon" href="/activities/" iconF7="email" />
                  <Link className="bottomToolbarLink toolbarIcon" tabLinkActive href="/profilepage/" iconF7="person_round" />
                </Toolbar>
                <Popup opened={popupOpen} onPopupClosed={() => this.setState({popupOpen: false})}>
                  <Page>
                    <Navbar title="Popup Title">
                      <NavRight>
                        <Link popupClose>Close</Link>
                      </NavRight>
                      <NavLeft>
                        <Button outline = {false}>Save</Button>
                      </NavLeft>
                    </Navbar>
                    <div className="profilePageFormContainer">
                      {form}
                    </div>
                  </Page>
                </Popup>
            </Page>

        )
    }
}

export default ProfilePage;
