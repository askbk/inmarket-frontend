import React from 'react';
import { Button, Row, Col, Block } from 'framework7-react';
import './Buttons.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestSent: ''
        };
        this.sendContactRequest = this.sendContactRequest.bind(this);
        this.sendContactRequestAccept = this.sendContactRequestAccept.bind(
            this
        );
        this.sendContactRequestDeny = this.sendContactRequestDeny.bind(this);
        this.getButtons = this.getButtons.bind(this);
    }

    async sendContactRequest() {
        const response = await fetch(
            `${gConfig.url}/users/${this.props.userId}/contact`,
            {
                method: 'post',
                headers: {
                    authorization: localStorage.jwt
                }
            }
        );

        const res = await response.json();
        if (res.success) {
            this.setState(state => {
                return { ...state, requestSent: 'requestSent' };
            });

            setTimeout(() => {
                this.props.contactRequest(this.props.userId, 'requestSent');
            }, 400);
        } else {
            console.error(res.message);
        }
    }

    async sendContactRequestAccept() {
        const response = await fetch(
            `${gConfig.url}/users/${this.props.userId}/contact/accept`,
            {
                method: 'post',
                headers: {
                    authorization: localStorage.jwt
                }
            }
        );

        const res = await response.json();
        if (res.success) {
            this.setState(state => {
                return {
                    ...state,
                    requestSent: 'contact'
                };
            });
            setTimeout(() => {
                this.props.contactRequest(this.props.userId, 'contact');
            }, 400);
        } else {
            console.error(res.message);
        }
    }

    async sendContactRequestDeny() {
        const response = await fetch(
            `${gConfig.url}/users/${this.props.userId}/contact/decline`,
            {
                method: 'post',
                headers: {
                    authorization: localStorage.jwt
                }
            }
        );

        const res = await response.json();
        if (res.success) {
            this.setState(state => {
                return {
                    ...state,
                    requestSent: 'noContact'
                };
            });
            setTimeout(() => {
                this.props.contactRequest(this.props.userId, 'noContact');
            }, 400);
        } else {
            console.error(res.message);
        }
    }

    getButtons(status) {
        switch (status) {
            case 'noContact':
                return (
                    <Button
                        small
                        className='networkContactButton color-theme-green'
                        fill
                        onClick={this.sendContactRequest}
                    >
                        Kontakt
                    </Button>
                );
                break;
            case 'requestReceived':
                return (
                    <div>
                        <Button
                            small
                            className='networkRequestButton color-theme-green'
                            fill
                            onClick={this.sendContactRequestAccept}
                        >
                            Aksepter
                        </Button>
                        <Button
                            small
                            className='networkRequestButton color-theme-red'
                            fill
                            onClick={this.sendContactRequestDeny}
                        >
                            Avslå
                        </Button>
                    </div>
                );
                break;
            case 'contact':
                return (
                    <div>
                        {/*
                        <Button small className='networkViewButton' fill>
                            Se logg
                        </Button>
                        */}
                        <Button small className='networkViewButton' fill href={`/activities/create/${this.props.userId}`}>
                            Inviter
                        </Button>
                    </div>
                );
                break;
            case 'requestSent':
                return (
                    <Button small className='networkViewButton' disabled>
                        Sendt
                    </Button>
                );
                break;
            default:
        }
    }

    render() {
        return (
            <div className='buttonsContainer'>
                {this.getButtons(
                    this.state.requestSent
                        ? this.state.requestSent
                        : this.props.connectionStatus
                )}
            </div>
        );
    }
}
