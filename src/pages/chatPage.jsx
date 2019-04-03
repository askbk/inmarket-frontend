import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import { Page, Navbar} from 'framework7-react';
import Chat from '../components/Chat/Chat.jsx';
import '../css/chatPage.css'

export default class extends React.Component {
    constructor() {
        super();
    }

    render() {
        
        return (
            <Page className="theme-dark chatPageView">
                <Chat/>
            </Page>
        )
    }
}
