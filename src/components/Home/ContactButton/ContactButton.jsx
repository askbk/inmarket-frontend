import React from 'react';
import { Button } from 'framework7-react';

class ContactButton extends React.Component {
    constructor(props) {
        super(props);
        this.sendContactRequest = this.sendContactRequest.bind(this);
        this.state = {requestSent: false};
    }

    async sendContactRequest() {
        const response = await fetch(`http://localhost:5000/api/users/${this.props.userId}/contact`, {
            method: "post",
            headers: {
                "authorization": localStorage.jwt
            }
        });

        const res = await response.json();
        if (res.success) {
            this.setState(state => {return {...state, requestSent: true}});

            setTimeout(() => {
                this.props.contactRequestSent(this.props.userId);
            }, 400);
        } else {
            console.error(res.message);
        }
    }

    render() {
        const contact = (
            <Button style={{ margin: '0 0 .5rem 0' }} fill onClick={this.sendContactRequest}>
                Kontakt
            </Button>
        );

        const requestSent = (
            <Button style={{ margin: '0 0 .5rem 0' }} disabled>
                Forespørsel sendt
            </Button>
        );

        if (this.state.requestSent) {
            return requestSent;
        }

        return contact;
    }
}

export default ContactButton;
