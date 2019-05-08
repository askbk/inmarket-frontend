import React from 'react';
import './ProfileTextInformation.css';

//import picture
import StarRatings from '../../../../node_modules/react-star-ratings';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    getAge(birth) {
        const birthdate = new Date(birth);
        const now = new Date(Date.now());
        return parseInt(
            (now.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24 * 365)
        );
    }

    render() {
        const age = this.getAge(this.props.birth).toString();
        const basic_info = this.props.name + ', ' + age;
        const work_info = this.props.role + ', ' + this.props.workplace;

        return (
            <div className='profileTextInformationNetworkContainer'>
                <div className='profileTextInformationNetworkName'>
                    <p>{basic_info}</p>
                </div>
                <div className='profileTextInformationNetworkInstitution'>
                    <p>{work_info}</p>
                </div>
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
