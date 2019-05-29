import React from 'react';

//import styling
import '../css/profile.css';
import '../css/toolbar.css';

//import components
import Button from '../components/shared/Button/StyledButton';
import ProfilePageHeader from '../components/ProfilePage/ProfilePageHeader/ProfilePageHeader';
import ProfileInformation from '../components/shared/InformationBox/InformationBox';
import ProfileQualities from '../components/ProfilePage/ProfileQualities/ProfileQualities';
import Header from '../components/Header/Header.jsx';
import AboutForm from '../components/ProfilePage/ProfilePageAboutForm/ProfilePageAboutForm';
import BioForm from '../components/ProfilePage/ProfilePageBioForm/ProfilePageBioForm';
import ProfilePageSkillsForm from '../components/ProfilePage/ProfilePageSkillsForm/ProfilePageSkillsForm';
import EditableButton from '../components/ProfilePage/ProfilePageEditableButton/ProfilePageEditableButton';

import {
    Page,
    Row,
    Col,
    Toolbar,
    Link,
    Popup,
    Navbar,
    NavRight,
    NavLeft
} from 'framework7-react';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            profileDescription:
                'Jeg er tidligere finalist i Norsk Informatikkolympiade, tar mastergrad i datateknologi ved NTNU, og har hovedansvaret for utvikling av InMarkets nettsider og app.',
            skills: [
                { name: 'Hacking', rating: 4.1 },
                { name: 'Programmering', rating: 5.0 },
                { name: 'Lederegenskaper', rating: 4.3 }
            ],
            interests: [],
            rating: 4.5,
            popupOpen: false,
            currentForm: '',
            firstName: 'Ask',
            lastName: 'Kolltveit',
            role: 'Teknologidirektør',
            institution: 'Inmarket AS',
            connectionStatus: 'noContact',
            id: null
        };
    }

    componentDidMount() {
        let id = this.$f7route.params.id;
        if (id === 'me' || id === '') {
            id = JSON.parse(atob(localStorage.jwt.split('.')[1])).sub;
        }
        this.setState({ id: id });

        const url = `${gConfig.url}/users/${id}`;
        console.log(url);

        fetch(url, { headers: { authorization: localStorage.jwt } })
            .then(res => {
                return res.json();
            })
            .then(user => {
                const data = user.data;
                const role = data.employee
                    ? data.employee.role
                    : data.jobseeker.type;
                const institution = data.employee
                    ? data.employee.company
                    : data.jobseeker.education;
                this.setState({
                    ...user.data,
                    role: role ? role : '',
                    institution: institution ? institution : ''
                });
                console.log(user.data);
            });
    }

    handleChange(data, information_type) {
        if (information_type === 'BIO') {
            this.setState({ profileDescription: data });
        } else if (information_type === 'First Name') {
            this.setState({ firstName: data });
        } else if (information_type === 'Last Name') {
            this.setState({ lastName: data });
        } else if (information_type === 'Birthday') {
            const date = new Date(data);
            this.setState({ birthDate: date });
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
        let newActiveQualities = this.state.activeQualities;
        if (newActiveQualities.length >= 3) {
            e.target.checked = false;
        }
        if (checked && newActiveQualities.length < 3) {
            newActiveQualities.push(text);
        } else if (!checked) {
            newActiveQualities = newActiveQualities.filter(a => a != text);
        }
        this.setState({ activeQualities: newActiveQualities });
    }

    removeSkill(e, text) {
        let newQualities = this.state.skills.filter(a => a.text != text);
        let newActiveQualities = this.state.activeQualities.filter(
            a => a != text
        );
        this.setState({ skills: newSkills, activeSkills: newActiveSkills });
    }

    logout(){
        localStorage.clear();
        this.$f7router.navigate("/logginn/");
    }

    render() {
        const {
            profileDescription,
            rating,
            skills,
            interests,
            popupOpen,
            currentForm,
            firstName,
            lastName,
            birthDate,
            role,
            institution
        } = this.state;

        let profilePageHeader = (
            <div>
                <ProfilePageHeader
                    firstName={firstName}
                    lastName={lastName}
                    rating={4.2}
                    role={role}
                    institution={institution}
                />
            </div>
        );

        let profileInformation = (
            <ProfileInformation>{profileDescription}</ProfileInformation>
        );

        let profileSkills = <ProfileQualities qualities={skills} />;

        let profileInterests = <ProfileQualities qualities={interests} />;

        const isActuallyCurrentUser = this.$f7route.params.id === "me";

        let logoutButton = (null);
        if(isActuallyCurrentUser){
            logoutButton = (<Button clicked={()=>this.logout()}>Logg ut</Button>);
        }

        const isCurrentUser = false; // Set always false for demo
        //Take the elements above and wrap them in a editable button
        if (isCurrentUser) {
            profilePageHeader = (
                <EditableButton
                    onClick={() =>
                        this.setState({
                            popupOpen: true,
                            currentForm: 'about'
                        })
                    }
                    information={profilePageHeader}
                />
            );

            profileInformation = (
                <EditableButton
                    onClick={() =>
                        this.setState({
                            popupOpen: true,
                            currentForm: 'bio'
                        })
                    }
                    information={profileInformation}
                />
            );
            profileSkills = (
                <EditableButton
                    onClick={() =>
                        this.setState({
                            popupOpen: true,
                            currentForm: 'skills'
                        })
                    }
                    information={profileSkills}
                />
            );
        }

        let form;
        if (currentForm === 'about') {
            form = (
                <AboutForm
                    onChange={this.handleChange.bind(this)}
                    firstName={firstName}
                    lastName={lastName}
                    role={role}
                    institution={institution}
                />
            );
        } else if (currentForm === 'bio') {
            form = (
                <BioForm
                    onChange={this.handleChange.bind(this)}
                    bio={profileDescription}
                />
            );
        } else {
            form = (
                <ProfilePageSkillsForm
                    removeSkill={this.removeSkill.bind(this)}
                    onChecked={this.handleChecked.bind(this)}
                    activeSkills={skills}
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
                    {/*
                    <Button>SE LOGG</Button>
                    <Button>SE ANSATTE</Button>
                      */}
                    {logoutButton}
                    {isActuallyCurrentUser || !(this.state.connectionStatus === "contact") ?
                    null
                    :
                    <Button
                        clicked={() =>
                            this.$f7router.navigate(
                                '/activities/create/' + this.state.id
                            )
                        }
                        >
                        INVITER TIL NY AKTIVITET
                    </Button>}
                </Row>
                {profileInformation}
                {profileSkills}
                {profileInterests}
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
                        href='/profile/me'
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

export default Profile;
