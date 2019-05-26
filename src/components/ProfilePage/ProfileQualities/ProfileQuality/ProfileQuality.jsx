import React from 'react';
import StarRatings from '../../../../../node_modules/react-star-ratings';

//import styles
import './ProfileQuality.css';

const profileQuality = props => {
    const qualityMarginClass = props.editIsActive ? '' : ' profileQualityMargin';
    return (
        <div className={'profileQualityContainer' + qualityMarginClass}>
            <span>{props.text}</span>
            <StarRatings
                starDimension='20px'
                starSpacing='2px'
                rating={props.rating}
                starRatedColor='#c08d42'
                starEmptyColor='black'
            />
        </div>
    );
};

export default profileQuality;
