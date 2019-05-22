import React from 'react';
import Profile from '../../shared/NetworkList/Profile/Profile.jsx';
import { BlockTitle, Searchbar } from 'framework7-react';
import NetworkList from '../../shared/NetworkList/NetworkList/NetworkList.jsx';
import './SearchView.css';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchbarContent: ''
        };
    }

    handleChange(e) {
        const value = e.target.value.toLowerCase();
        this.setState({ searchbarContent: value });
        this.props.search(value);
    }

    render() {
        return (
            <div className='searchViewOuterContainer'>
                <div className='searchViewInnerContainer'>
                    <BlockTitle medium className='searchTitle'>
                        Utvid nettverket ditt
                    </BlockTitle>
                    <div className='searchViewSearchbarContainer'>
                        <Searchbar
                            onChange={this.handleChange.bind(this)}
                            placeholder={'Søk etter brukere'}
                        />
                    </div>
                    <NetworkList
                        profiles={this.props.profiles}
                        contactRequest={this.props.contactRequest}
                    />
                </div>
            </div>
        );
    }
}
