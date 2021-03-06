import React from 'react';
import Profile from '../../shared/NetworkList/Profile/Profile.jsx';
import NetworkList from '../../shared/NetworkList/NetworkList/NetworkList.jsx';
import { BlockTitle, Searchbar } from 'framework7-react';
import './NetworkView.css';

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
    }

    render() {
        return (
            <div className='networkViewOuterContainer'>
                <div className='networkViewInnerContainer'>
                    <BlockTitle medium className='networkTitle'>
                        Forespørsler
                    </BlockTitle>
                    <NetworkList
                        profiles={this.props.pendingRequests}
                        contactRequest={this.props.contactRequest}
                    />
                    <BlockTitle medium className='networkTitle'>
                        Ditt nettverk
                    </BlockTitle>

                    <Searchbar
                        onChange={this.handleChange.bind(this)}
                        placeholder={'Søk i nettverket ditt'}
                    />
                    <NetworkList
                        profiles={this.props.networkUsers.filter(a =>
                            `${a.firstName} ${a.lastName}`
                                .toLowerCase()
                                .includes(this.state.searchbarContent)
                        )}
                    />
                </div>
            </div>
        );
    }
}
