import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
  ListInput
} from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ListInput
                    label="E-post"
                    type="email"
                    name="email"
                    placeholder="E-post"
                    onChange={this.props.onInputChange}
                ></ListInput>

                <ListInput
                    label="Passord"
                    type="password"
                    name="password"
                    placeholder="Passord"
                    onChange={this.props.onInputChange}
                ></ListInput>

                <ListInput
                    label="Fornavn"
                    type="text"
                    name="firstName"
                    placeholder="Skriv inn fornavnet ditt her"
                    onChange={this.props.onInputChange}
                ></ListInput>

                <ListInput
                    label="Etternavn"
                    type="text"
                    name="lastName"
                    placeholder="Skriv inn etternavnet ditt her"
                    onChange={this.props.onInputChange}
                ></ListInput>

                <ListInput
                    label="Telefonnummer"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Ditt telefonnummer (valgfritt)"
                    onChange={this.props.onInputChange}
                ></ListInput>

                <ListInput
                    label="Kommune"
                    type="text"
                    name="municipality"
                    placeholder="Din kommune (valgfritt)"
                    onChange={this.props.onInputChange}
                ></ListInput>
            </React.Fragment>
        )
    }
}
