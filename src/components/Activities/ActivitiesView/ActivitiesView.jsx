import React from 'react';
import '../../../css/conversationsActivitiesViewShared.css';
import Searchbar from '../../shared/Searchbar/Searchbar.jsx';
import ActivitiesInstance from '../ActivitiesInstance/ActivitiesInstance.jsx';
import {List, ListItem} from 'framework7-react';


export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
    <div className="conversationsActivitiesViewContainer">
        <div className="conversationsActivitiesViewInnerContainer">
            <div className="conversationsActivitiesViewSearchbarContainer">
                <Searchbar/>
            </div>
            <List noHairlines noHairlinesBetween className="conversationsActivitiesViewList">
                <ListItem className="conversationsActivitiesViewListItem" title="">
                    <div className="conversationsActivitiesViewInstanceContainer">
                        <ActivitiesInstance/>
                    </div>
                </ListItem>
                <ListItem className="conversationsActivitiesViewListItem" title="">
                    <div className="conversationsActivitiesViewInstanceContainer">
                        <ActivitiesInstance/>
                    </div>
                </ListItem>
                <ListItem className="conversationsViewListItem" title="">
                    <div className="conversationsActivitiesViewInstanceContainer">
                        <ActivitiesInstance/>
                    </div>
                </ListItem>
            </List>
        </div>
    </div>
    );
  }
}
