import React from 'react';
import '../../../css/conversationsActivitiesViewShared.css';
import Searchbar from '../../shared/Searchbar/Searchbar.jsx';
import ConversationsMessage from '../ConversationsMessage/ConversationsMessage';
import {List, ListItem} from 'framework7-react';


export default class extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        chats: [
            {
              chat_id: '1',
              chat_name: 'Endre Braut Medhus',
              last_message: 'Hei, hvordan går det?',
              time_stamp: '2019-03-12T10:00:00',
              avatar_img: '../../../../assets-src/IMG_1318.jpg',
            },
            {
                chat_id: '2',
                chat_name: 'Casper Feng',
                last_message: 'Hallo',
                time_stamp: '2019-04-06T12:03:34',
                avatar_img: '../../../../assets-src/IMG_1318.jpg',
            },
            {
                chat_id: '3',
                chat_name: 'Edvard Bakken',
                last_message: 'Heisann hvordan går det?',
                time_stamp: '2019-05-06T23:03:34',
                avatar_img: '../../../../assets-src/IMG_1318.jpg',
            },
        ]
    }
  }

  render(){

    return (
    <div className="conversationsActivitiesViewContainer">
        <div className="conversationsActivitiesViewInnerContainer">
            <div className="conversationsActivitiesViewSearchbarContainer">
                <Searchbar/>
            </div>
            <List noHairlines noHairlinesBetween className="conversationsActivitiesViewList">
                {this.state.chats.sort((a, b) => (new Date(a.time_stamp) > new Date(b.time_stamp))).map((chat, index) => (
                    <ListItem className="conversationsActivitiesViewListItem" key = {index} title="">
                        <div className="conversationsActivitiesViewInstanceContainer">
                            <ConversationsMessage
                                chat_id = {chat.chat_id}
                                time_stamp = {chat.time_stamp}
                                avatar_img = {chat.avatar_img}
                                chat_name = {chat.chat_name}
                                last_message = {chat.last_message}/>
                        </div>
                    </ListItem>
                ))}
                {/*<ListItem className="conversationsActivitiesViewListItem" title="">
                    <div className="conversationsActivitiesViewInstanceContainer">
                        <ConversationsMessage/>
                    </div>
                </ListItem>
                <ListItem className="conversationsActivitiesViewListItem" title="">
                    <div className="conversationsActivitiesViewInstanceContainer">
                        <ConversationsMessage/>
                    </div>
                </ListItem>
                <ListItem className="conversationsActivitiesViewListItem" title="">
                    <div className="conversationsActivitiesViewInstanceContainer">
                        <ConversationsMessage/>
                    </div>
                </ListItem>*/}
            </List>
        </div>
    </div>
    );
  }
}
