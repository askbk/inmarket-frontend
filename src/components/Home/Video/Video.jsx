import React from 'react';

import { Card } from 'framework7-react';

import './Video.css';

const Video = props => (
    <Card className='video' strong>
        <img className='videoThumbnail' src={props.user.avatar} />
        <div className='videoTitle'>Tittel - Bedrift</div>
    </Card>
);

export default Video;
