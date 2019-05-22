import React from 'react';
import './ProfileTextInformation.css';

//import picture
import StarRatings from '../../../../../node_modules/react-star-ratings';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    getAge(birth) {
        if (!birth) {
            return null;
        }
        const birthDate = new Date(birth);
        const now = new Date(Date.now());
        return parseInt(
            (now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
        );
    }

    getWorkInfo(role, workplace) {
        const roleString = role ? role : '';
        const separator = role && workplace ? ', ' : '';
        const workplaceString = workplace ? workplace : '';
        return roleString + separator + workplaceString;
    }

    getBasicInfo(name, birth) {
        const nameString = name ? name : '';
        const separator = name && birth ? ', ' : '';
        const ageString = birth ? this.getAge(birth).toString() : '';
        return nameString + separator + ageString;
    }

    render() {
        const basicInfo = this.getBasicInfo(this.props.name, this.props.birth);
        const workInfo = this.getWorkInfo(
            this.props.role,
            this.props.workplace
        );

        return (
            <div className='profileTextInformationNetworkContainer'>
                {basicInfo ? (
                    <div className='profileTextInformationNetworkName'>
                        <p>{basicInfo}</p>
                    </div>
                ) : null}
                {workInfo ? (
                    <div className='profileTextInformationNetworkInstitution'>
                        <p>{workInfo}</p>
                    </div>
                ) : null}
                <div className='profileTextInformationNetworkProgressContainer'>
                    <StarRatings
                        starDimension='20px'
                        starSpacing='2px'
                        rating={this.props.rating}
                        starRatedColor='#c08d42'
                        starEmptyColor='black'
                    />
                </div>
            </div>
        );
    }
}
