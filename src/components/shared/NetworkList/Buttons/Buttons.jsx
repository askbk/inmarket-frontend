import React from 'react';
import { Button, Row, Col, Block } from 'framework7-react';
import './Buttons.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.getButtons = this.getButtons.bind();
    }

    getButtons(status) {
        switch (status) {
            case 'noContact':
                return (
                    <Button
                        small
                        className='networkContactButton color-theme-green'
                        fill
                    >
                        Kontakt
                    </Button>
                );
                break;
            case 'request':
                return (
                    <div>
                        <Button
                            small
                            className='networkRequestButton color-theme-green'
                            fill
                        >
                            Aksepter
                        </Button>
                        <Button
                            small
                            className='networkRequestButton color-theme-red'
                            fill
                        >
                            Avlys
                        </Button>
                    </div>
                );
                break;
            case 'contact':
                return (
                    <div>
                        <Button small className='networkViewButton' fill>
                            Se logg
                        </Button>
                        <Button small className='networkViewButton' fill>
                            Inviter
                        </Button>
                    </div>
                );
                break;
            case 'requested':
                return <div />;
                break;
            default:
        }
    }

    render() {
        return (
            <div className='buttonsContainer'>
                {this.getButtons(this.props.connectionStatus)}
            </div>
        );
    }
}
