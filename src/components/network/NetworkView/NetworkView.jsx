import React from 'react';
import Profile from '../Profile/Profile.jsx';
import NetworkSearchBar from '../NetworkSearchbar/NetworkSearchbar.jsx';
import {List, ListItem} from 'framework7-react';
import './NetworkView.css';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
        <div className="networkViewOuterContainer">
            <div className="networkViewInnerContainer">
                <div className="networkViewSearchbarContainer">
                    <NetworkSearchBar/>
                </div>
                <List noHairlines noHairlinesBetween>
                  <ListItem title="">
                    <div className="networkViewProfileContainer">
                      <Profile/>
                    </div>
                  </ListItem>
                  <ListItem title="">
                    <div className="networkViewProfileContainer">
                      <Profile/>
                    </div>
                  </ListItem>
                  <ListItem title="">
                    <div className="networkViewProfileContainer">
                      <Profile/>
                    </div>
                  </ListItem>
                </List>
            </div>
        </div>
    );
  }
}
