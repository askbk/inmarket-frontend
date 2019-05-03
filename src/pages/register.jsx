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

import Header from '../components/Header/Header.jsx'
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
                userType: "jobseeker",

                //  Basisinformasjon for den som registrerer brukeren
                firstName: "",
                lastName: "",
                // birthDate: "",
                phoneNumber: "",
                municipality: "",

                // Credentials
                email: "",
                password: "",

                //  Brukes for undervisningssted og høyest utdanning
                education: "",

                //  Stilling dersom man er bedriftsansatt
                position: "",

                //  Bedriften man registrerer/jobber for
                name: "",
                orgNumber: "",

                //  Rabattkode for bedrifter
                registrationCode: "",

                //  Nettside for bedrifter
                webpage: "",
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitRegistration = this.submitRegistration.bind(this);
    }

    submitRegistration() {
        console.log("submitting...");
        console.log(this.state.user);
        fetch("http://localhost:5000/api/users", {
            method: "post",
            body: JSON.stringify(this.state.user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        }).catch((err) => {
            console.error(err);
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.log(`${name}: ${value}`);

        this.setState(prevState => {
            return {
                user: {
                    ...prevState.user,
                    [name]: value
                }
            }
        });
    }

    render() {
        return (
            <Page noNavbar>
                <Toolbar tabbar slot="fixed" position="top">
                    <Link tabLink="#tab-user" tabLinkActive text="Bruker"></Link>
                    <Link tabLink="#tab-company" text="Virksomhet"></Link>
                </Toolbar>

                <Tabs>
                    <RegisterUser
                        onInputChange={this.handleInputChange}
                        onRegisterClick={this.submitRegistration}
                        userType={this.state.user.userType}
                    />

                    <RegisterCompany
                        onInputChange={this.handleInputChange}
                    />
                </Tabs>
            </Page>
        )
    }
}

export default Register;
