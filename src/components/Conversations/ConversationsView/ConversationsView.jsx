import React from 'react';
import './ConversationsView.css';
import Searchbar from '../../shared/Searchbar/Searchbar.jsx';
import ConversationsMessage from '../ConversationsMessage/ConversationsMessage';
import {List, ListItem} from 'framework7-react';


export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
    <div className="conversationsViewContainer">
        <div className="conversationsViewInnerContainer">
            <div className="conversationsViewSearchbarContainer">
                <Searchbar/>
            </div>
            <List noHairlines noHairlinesBetween>
                <ListItem title="">
                    <div className="conversationsViewMessageContainer">
                        <ConversationsMessage/>
                    </div>
                </ListItem>
                <ListItem title="">
                    <div className="conversationsViewMessageContainer">
                        <ConversationsMessage/>
                    </div>
                </ListItem>
                <ListItem title="">
                    <div className="conversationsViewMessageContainer">
                        <ConversationsMessage/>
                    </div>
                </ListItem>
            </List>
        </div>
    </div>
    );
  }
}
