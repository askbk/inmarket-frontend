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
                userType: -1,
                //  Basisinformasjon for den som registrerer brukeren
                name: "",
                email: '',
                password: "",
                phone: "",
                municipality: "",

                //  Brukes for undervisningssted og høyest utdanning
                school: "",
                program: "",

                //  Stilling dersom man er bedriftsansatt
                position: "",

                //  Bedriften man registrerer/jobber for
                company_name: "",
                org: "",

                //  Rabattkode for bedrifter
                code: "",

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
        fetch("http://localhost:5000/api/register", {
            method: "post",
            body: JSON.stringify(this.state.user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log("submitted");
            return res.json();
        }).then(eyah => {
            console.log(eyah);
        }).catch((err) => {
            console.error(err);
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

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
                <Navbar title="Registrering" backLink="Back" themeDark></Navbar>
                <Toolbar tabbar slot="fixed" position="top">
                    <Link tabLink="#tab-user" tabLinkActive text="Bruker"></Link>
                    <Link tabLink="#tab-company" text="Virksomhet"></Link>
                </Toolbar>

                <Tabs>
                    <RegisterUser />

                    <RegisterCompany />
                </Tabs>
                <Toolbar className="bottomToolbar" tabbar labels bottom>
                  <Link className="bottomToolbarLink toolbarIcon" href="/" iconF7="home" />
                  <Link className="bottomToolbarLink toolbarIcon" href="/nettverk/" iconF7="search" />
                  <Link className="bottomToolbarLink toolbarIcon" href="/activities/" iconF7="email" />
                  <Link className="bottomToolbarLink toolbarIcon" href="/profile/me" iconF7="person_round" />
                </Toolbar>
            </Page>
        )
    }
}

export default Register;
