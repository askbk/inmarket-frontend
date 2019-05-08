import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Checkbox, Row, Col, Block } from 'framework7-react';

import './TermsCheckbox.css';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Checkbox name='checkbox-1' id='terms-checkbox' />
                <p id='terms-text'>
                    {' '}
                    Jeg godtar InMarkets Vilkår for Bruk og
                    Personvernerklæringen.
                </p>
            </div>
        );
    }
}
