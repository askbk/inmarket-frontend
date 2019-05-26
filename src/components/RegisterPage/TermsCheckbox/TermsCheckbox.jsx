import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Checkbox, Row, Col, Block, List, ListItem, Input } from 'framework7-react';

import './TermsCheckbox.css';

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <label id="terms-box">
                    <Checkbox name='checkbox-1' id='terms-checkbox'/>
                        Jeg godtar InMarkets Vilkår for Bruk og
                        Personvernerklæringen.
                </label>
            </div>
        );
    }
}
