import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
    Page,
    Navbar,
    List,
    ListInput,
    ListItem,
    ListButton,
    Toggle,
    BlockTitle,
    Row,
    Button,
    Range,
    Block,
    BlockHeader,
    View,
    Card,
    CardHeader,
    CardFooter,
    CardContent,
    Col,
    Views,
    Tabs,
    Tab,
    Toolbar,
    Link
} from 'framework7-react';

import Header from '../components/Header/Header.jsx';
import RegisterUser from '../components/RegisterPage/RegisterUser/RegisterUser.jsx';
import RegisterCompany from '../components/RegisterPage/RegisterCompany/RegisterCompany.jsx';

import '../css/toolbar.css';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                // either company, jobseeker or employee
                // TODO: interface does not permit creation of employees. need to implement.
                userType: 'jobseeker',

                //  Basisinformasjon for den som registrerer brukeren
                firstName: '',
                lastName: '',
                // birthDate: "",
                phoneNumber: '',
                municipality: '',

                // Credentials
                email: '',
                password: '',

                //  Brukes for undervisningssted og høyest utdanning
                education: '',

                //  Stilling dersom man er bedriftsansatt
                position: '',

                //  Bedriften man registrerer/jobber for
                name: '',
                orgNumber: '',

                //  Rabattkode for bedrifter
                registrationCode: '',

                //  Nettside for bedrifter
                webpage: '',

                skills: [],
                interests: []
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitRegistration = this.submitRegistration.bind(this);
        this.skillsChanged = this.skillsChanged.bind(this);
        this.interestsChanged = this.interestsChanged.bind(this);
    }

    async submitRegistration(e) {
        const user = this.state.user;

        if (e.target.id === 'companyRegisterButton') {
            user.userType = 'company';
        }
        const skillIds = this.state.user.skills
            .filter(skill => {
                return skill.selectedBy;
            })
            .map(skill => {
                return skill.id;
            });

        const interestIds = this.state.user.interests
            .filter(interest => {
                return interest.selectedBy;
            })
            .map(interest => {
                return interest.id;
            });

        user.skills = skillIds;
        user.interests = interestIds;

        console.log(user);

        const request = await fetch('http://localhost/api/users', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const response = await request.json();

        if (response.success) {
            this.$f7router.navigate('/logginn/');
        } else {
            console.error(response.message);
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(`${name}: ${value}`);

        this.setState(prevState => {
            return {
                user: {
                    ...prevState.user,
                    [name]: value
                }
            };
        });
    }

    skillsChanged(skills) {
        this.setState(state => {
            return {
                user: {
                    ...state.user,
                    skills: skills
                }
            };
        });
    }

    interestsChanged(interests) {
        this.setState(state => {
            return {
                user: {
                    ...state.user,
                    interests: interests
                }
            };
        });
    }

    render() {
        return (
            <Page noNavbar>
                <RegisterUser
                    onInputChange={this.handleInputChange}
                    onRegisterClick={this.submitRegistration}
                    skillsChanged={this.skillsChanged}
                    interestsChanged={this.interestsChanged}
                    userType={this.state.user.userType}
                    />
                {/* Disable company registration for demo.

                <Toolbar tabbar slot='fixed' position='top'>
                    <Link tabLink='#tab-user' tabLinkActive text='Bruker' />
                    <Link tabLink='#tab-company' text='Virksomhet' />
                </Toolbar>

                <Tabs>
                    <RegisterCompany
                    onInputChange={this.handleInputChange}
                    onRegisterClick={this.submitRegistration}
                    userType={this.state.user.userType}
                    />
                </Tabs>
                */}
            </Page>
        );
    }
}

export default Register;
