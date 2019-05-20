import React from 'react';
import Profile from '../../shared/NetworkList/Profile/Profile.jsx';
import NetworkList from '../../shared/NetworkList/NetworkList/NetworkList.jsx';
import { Searchbar } from 'framework7-react';
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
                    {this.props.noSearch ? null : (
                        <div className='networkViewSearchbarContainer'>
                            <Searchbar
                                onChange={this.handleChange.bind(this)}
                                placeholder={'Søk i nettverket ditt'}
                            />
                        </div>
                    )}
                    <NetworkList
                        profiles={this.props.profiles}
                        searchbarContent={this.state.searchbarContent}
                    />
                </div>
            </div>
        );
    }
}
