import React from 'react';

//import styling
import '../css/profile.css';
import '../css/toolbar.css';

//import components
import Button from '../components/shared/Button/StyledButton';
import ProfilePageHeader from '../components/ProfilePage/ProfilePageHeader/ProfilePageHeader';
import ProfileInformation from '../components/shared/InformationBox/InformationBox';
import ProfileSkills from '../components/ProfilePage/ProfileSkills/ProfileSkills';
import Header from '../components/Header/Header.jsx';
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
    NavLeft
} from 'framework7-react';

class ProfilePage extends React.Component {
    constructor() {
        super();
        this.state = {
            profileText:
                'Jeg er tidligere finalist i Norsk Informatikkolympiade, tar mastergrad i datateknologi ved NTNU, og har hovedansvaret for utvikling av InMarkets nettsider og app.',
            skills: [
                { text: 'Hacking', rating: 4.1 },
                { text: 'Programmering', rating: 5.0 },
                { text: 'Lederegenskaper', rating: 4.3 }
            ],
            activeSkills: ['Hacking', 'Programmering'],
            rating: 4.5,
            popupOpen: false,
            currentForm: '',
            firstName: 'Ask',
            lastName: 'Kolltveit',
            birthday: '1997-01-01',
            role: 'Teknologidirektør',
            institution: 'Inmarket AS',
            formerEmployers: ''
        };
    }

    handleChange(data, information_type) {
        if (information_type === 'BIO') {
            this.setState({ profileText: data });
        } else if (information_type === 'First Name') {
            this.setState({ firstName: data });
        } else if (information_type === 'Last Name') {
            this.setState({ lastName: data });
        } else if (information_type === 'Birthday') {
            const date = new Date(data);
            this.setState({ birthday: date });
        } else if (information_type === 'Role') {
            this.setState({ role: data });
        } else if (information_type === 'Institution') {
            this.setState({ institution: data });
        } else if (information_type === 'Former Employers') {
            this.setState({ formerEmployers: data });
        } else if (information_type === 'skill') {
            this.setState({
                skills: this.state.skills.concat({ text: data, rating: 0 })
            });
        }
    }

    handleChecked(e, text) {
        const checked = e.target.checked;
        let newActiveSkills = this.state.activeSkills;
        if (newActiveSkills.length >= 3) {
            e.target.checked = false;
        }
        if (checked && newActiveSkills.length < 3) {
            newActiveSkills.push(text);
        } else if (!checked) {
            newActiveSkills = newActiveSkills.filter(a => a != text);
        }
        this.setState({ activeSkills: newActiveSkills });
    }

    removeSkill(e, text) {
        let newSkills = this.state.skills.filter(a => a.text != text);
        let newActiveSkills = this.state.activeSkills.filter(a => a != text);
        this.setState({ skills: newSkills, activeSkills: newActiveSkills });
    }

    render() {
        const {
            profileText,
            rating,
            skills,
            activeSkills,
            popupOpen,
            currentForm,
            firstName,
            lastName,
            birthday,
            role,
            institution,
            formerEmployers
        } = this.state;

        const isCurrentUser = true;

        let profilePageHeader = (
            <div>
                <ProfilePageHeader
                    firstName={firstName}
                    lastName={lastName}
                    birthday={birthday}
                    rating={rating}
                    role={role}
                    institution={institution}
                    formerEmployers={formerEmployers}
                />
            </div>
        );

        let profileInformation = (
            <ProfileInformation>{profileText}</ProfileInformation>
        );

        let profileSkills = (
            <ProfileSkills activeSkills={activeSkills} skills={skills} />
        );

        if (isCurrentUser) {
            profilePageHeader = (
                <div className='profilePageEditButtonsContainer'>
                    <button
                        className='profilePagePopupButton'
                        onClick={() =>
                            this.setState({
                                popupOpen: true,
                                currentForm: 'about'
                            })
                        }
                    >
                        {profilePageHeader}
                    </button>
                </div>
            );
            profileInformation = (
                <div className='profilePageEditButtonsContainer'>
                    <button
                        className='profilePagePopupButton'
                        onClick={() =>
                            this.setState({
                                popupOpen: true,
                                currentForm: 'bio'
                            })
                        }
                    >
                        {profileInformation}
                    </button>
                </div>
            );
            profileSkills = (
                <div className='profilePageEditButtonsContainer'>
                    <button
                        className='profilePagePopupButton'
                        onClick={() =>
                            this.setState({
                                popupOpen: true,
                                currentForm: 'skills'
                            })
                        }
                    >
                        {profileSkills}
                    </button>
                </div>
            );
        }

        let form;
        if (currentForm === 'about') {
            form = (
                <AboutForm
                    onChange={this.handleChange.bind(this)}
                    firstName={firstName}
                    lastName={lastName}
                    birthday={birthday}
                    role={role}
                    institution={institution}
                    formerEmployers={formerEmployers}
                />
            );
        } else if (currentForm === 'bio') {
            form = (
                <BioForm
                    onChange={this.handleChange.bind(this)}
                    bio={profileText}
                />
            );
        } else {
            form = (
                <ProfilePageSkillsForm
                    removeSkill={this.removeSkill.bind(this)}
                    onChecked={this.handleChecked.bind(this)}
                    activeSkills={activeSkills}
                    handleAdd={this.handleChange.bind(this)}
                    skills={skills}
                />
            );
        }

        return (
            <Page name='home' className='profilePage'>
                <Header backLink title='Profil' />
                {profilePageHeader}
                <Row className='profilePageButtonContainer'>
                    <Button>SE LOGG</Button>
                    <Button>SE ANSATTE</Button>
                </Row>
                {profileInformation}
                {profileSkills}
                <Toolbar className='bottomToolbar' tabbar labels bottom>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/'
                        iconF7='home'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/sok/'
                        iconF7='search'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/activities/'
                        iconF7='calendar'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        tabLinkActive
                        href='/profilepage/'
                        iconF7='person_round'
                    />
                </Toolbar>
                <Popup
                    opened={popupOpen}
                    onPopupClosed={() => this.setState({ popupOpen: false })}
                >
                    <Page>
                        <Navbar title='Popup Title'>
                            <NavRight>
                                <Link popupClose>Close</Link>
                            </NavRight>
                            <NavLeft>
                                <Button outline={false}>Save</Button>
                            </NavLeft>
                        </Navbar>
                        <div className='profilePageFormContainer'>{form}</div>
                    </Page>
                </Popup>
            </Page>
        );
    }
}

export default ProfilePage;
