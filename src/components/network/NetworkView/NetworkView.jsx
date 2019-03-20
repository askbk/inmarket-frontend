import React from 'react';
import {Button} from 'framework7-react';
import Profile from '../Profile/Profile.jsx';
import TopButton from '../TopButton/TopButton.jsx';
import './NetworkView.css';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
        <div className="networkViewOuterContainer">
            <div className="networkViewInnerContainer">
                <div className="networkViewTopButtonContainer">
                    <TopButton/>
                </div>
                <div className="networkViewProfileContainer">
                    <Profile/>
                </div>
            </div>
        </div>
    );
  }
}
