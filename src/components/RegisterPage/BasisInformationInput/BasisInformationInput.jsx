import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
  ListInput
} from 'framework7-react';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <ListInput
                    label="E-post"
                    type="email"
                    name="email"
                    placeholder="E-post"
                ></ListInput>

                <ListInput
                    label="Passord"
                    type="password"
                    name="password"
                    placeholder="Passord"
                ></ListInput>

                <ListInput
                    label="Fornavn"
                    type="text"
                    name="name"
                    placeholder="Skriv inn fornavnet ditt her"
                ></ListInput>

                <ListInput
                    label="Etternavn"
                    type="text"
                    name="name"
                    placeholder="Skriv inn etternavnet ditt her"
                ></ListInput>

                <ListInput
                    label="Telefonnummer"
                    type="tel"
                    name="phone"
                    placeholder="Ditt telefonnummer (valgfritt)"
                ></ListInput>

                <ListInput
                    label="Kommune"
                    type="text"
                    name="municipality"
                    placeholder="Din kommune (valgfritt)"
                ></ListInput>
            </React.Fragment>
        )
    }
}
