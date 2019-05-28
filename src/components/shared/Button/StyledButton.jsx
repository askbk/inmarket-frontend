import React from 'react';
import { Button } from 'framework7-react';
import './StyledButton.css';

const companyPageButton = props => (
    <Button className='styledPageButton' onClick={props.clicked} style={props.style} raised>
        {props.children}
    </Button>
);

export default companyPageButton;
