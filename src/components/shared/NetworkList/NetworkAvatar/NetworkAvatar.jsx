import React from 'react';
import './NetworkAvatar.css';
import { Chip } from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.getChip = this.getChip.bind();
    }

    getChip(status) {
        switch (status) {
            case 'noContact':
                return (
                    <Chip
                        className='avatarNetworkLabel color-theme-red'
                        text='Ingen kontakt'
                    />
                );
                break;
            case 'request':
                return (
                    <Chip
                        className='avatarNetworkLabel avatarNetworkRequestLabel color-theme-green'
                        text='Ber om kontakt'
                    />
                );
                break;
            case 'contact':
                return (
                    <Chip
                        className='avatarNetworkLabel color-theme-green'
                        text='Har kontakt'
                    />
                );
                break;
            case 'requested':
                return (
                    <Chip
                        className='avatarNetworkLabel color-theme-orange'
                        text='Forespurt'
                    />
                );
                break;
            default:
        }
    }

    render() {
        return (
            <div className='avatarNetworkContainer'>
                <div className='avatarNetworkImageContainer'>
                    <img
                        className='avatarNetworkImage'
                        src={this.props.profilePic}
                    />
                </div>
                <div className='avatarNetworkLabelContainer'>
                    {this.getChip(this.props.status)}
                </div>
            </div>
        );
    }
}
