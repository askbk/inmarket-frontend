import React from 'react';
import StarRatings from '../../../../node_modules/react-star-ratings';

import { Card, Button } from 'framework7-react';

import './Match.css';

//import temp data
import ProfilePic from '../../../../assets-src/ProfilePage/temp.png';

const Match = props => (
    <Card className='Match' strong>
        <div className='avatarContainer'>
            <img className='avatarImage' src={ProfilePic} />
        </div>

        <div>
            <div className='profileTextName'>
                <p>{`${props.user.employee.firstName}`}</p>
            </div>
            <div className='profileTextInstitution'>
                <p>{`${props.user.employee.role}, ${props.user.employee.name}`}</p>
            </div>
            <div className='profileTextProgressContainer'>
                <StarRatings
                    starDimension='20px'
                    starSpacing='2px'
                    rating={4.2}
                    starRatedColor='#c08d42'
                    starEmptyColor='black'
                />
            </div>
        </div>
        {/* hacky styling for now */}
        <Button href='/employee/' style={{ margin: '0 0 .5rem 0' }} fill>
            Kontakt
        </Button>
    </Card>
);

export default Match;
