import React from 'react';
import '../../../css/conversationsActivitiesViewShared.css';
import ConversationsMessage from '../ConversationsMessage/ConversationsMessage';
import {List, ListItem, Searchbar} from 'framework7-react';


export default class extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        searchbarContent: "",
        chats: [
            {
              chat_id: '1',
              chat_name: 'Endre Braut Medhus',
              last_message: 'Hei, hvordan går det?',
              time_stamp: '2019-03-12 10:00:00',
              avatar_img: '../../../../assets-src/IMG_1318.jpg',
            },
            {
                chat_id: '2',
                chat_name: 'Casper Feng',
                last_message: 'Hallo',
                time_stamp: '2019-04-09 10:03:34',
                avatar_img: '../../../../assets-src/IMG_1318.jpg',
            },
            {
                chat_id: '3',
                chat_name: 'Edvard Bakken',
                last_message: 'Heisann hvordan går det?',
                time_stamp: '2018-10-09 12:19:34',
                avatar_img: '../../../../assets-src/IMG_1318.jpg',
            },
            {
                chat_id: '4',
                chat_name: 'Ask Kolltveit',
                last_message: 'Hallo',
                time_stamp: '2019-04-09 13:40:34',
                avatar_img: '../../../../assets-src/IMG_1318.jpg',
            },
            {
                chat_id: '5',
                chat_name: 'Filip Tangen',
                last_message: 'Heisann hvordan går det?',
                time_stamp: '2019-04-09 12:19:34',
                avatar_img: '../../../../assets-src/IMG_1318.jpg',
            },
            {
                chat_id: '6',
                chat_name: 'Chris Africa',
                last_message: 'Hallo',
                time_stamp: '2019-04-09 10:03:34',
                avatar_img: '../../../../assets-src/IMG_1318.jpg',
            },
            {
                chat_id: '7',
                chat_name: 'Ola Nordmann',
                last_message: 'Heisann hvordan går det?',
                time_stamp: '2018-12-19 12:19:34',
                avatar_img: '../../../../assets-src/IMG_1318.jpg',
            }
        ]
    }
  }

  handleChange(e) {
    const value = e.target.value.toLowerCase();
    this.setState({searchbarContent: value});
  }

  render(){

    return (
    <div className="conversationsActivitiesViewContainer">
        <div className="conversationsActivitiesViewInnerContainer">
            <div className="conversationsActivitiesViewSearchbarContainer">
                <Searchbar onChange={this.handleChange.bind(this)}/>
            </div>
            <List noHairlines noHairlinesBetween className="conversationsActivitiesViewList">
                {this.state.chats.filter((a) => a.chat_name.toLowerCase().includes(this.state.searchbarContent)).sort((a, b) => (new Date(b.time_stamp) - new Date(a.time_stamp))).map((chat, index) => (
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
            </List>
        </div>
    </div>
    );
  }
}
