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
                    label="Fullt navn"
                    type="text"
                    name="name"
                    placeholder="Fornavn og etternavn (valgfritt)"
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
