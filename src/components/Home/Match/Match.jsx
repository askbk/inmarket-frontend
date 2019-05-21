import React from 'react';
import StarRatings from '../../../../node_modules/react-star-ratings';

import {Card, Button} from 'framework7-react';
import ContactButton from '../ContactButton/ContactButton.jsx';

import './Match.css';

//import temp data
import ProfilePic from '../../../../assets-src/ProfilePage/temp.png';

class Match extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };
    }

    render() {
        if (!this.state.visible) {
            return null;
        }

        const profilePic = this.props.user.profilePicturePath ? this.props.user.profilePicturePath : ProfilePic;
        const matchDegree = Math.round(this.props.user.cosine * 100);

        return (
            <Card className='Match' strong>
                <div className='avatarContainer'>
                    <img className='avatarImage' src={profilePic}/>
                </div>

                <div>
                    <div className='profileTextName'>
                        <p>{`${this.props.user.firstName}`}</p>
                    </div>
                    { this.props.user.userType === "employee" ?

                        <div className='profileTextInstitution'>
                            <p>{`${this.props.user.role}, ${this.props.user.name}`}</p>
                        </div>
                    :
                        <div className='profileTextInstitution'>
                            <p>{`${this.props.user.type}, ${this.props.user.education}`}</p>
                        </div>
                    }
                    <div className='profileTextProgressContainer'>
                        <StarRatings
                            starDimension='20px'
                            starSpacing='2px'
                            rating={4.2}
                            starRatedColor='#c08d42'
                            starEmptyColor='black'/>
                        <p>{matchDegree}% match</p>
                    </div>
                </div>
                <ContactButton
                    userId={this.props.user.id}
                    contactRequestSent={this.props.contactRequestSent}/>
            </Card>
        );
    }
}

export default Match;
