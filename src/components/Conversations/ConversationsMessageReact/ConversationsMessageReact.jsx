import React from 'react';
import './ConversationsMessageReact.css';
import {Button} from 'framework7-react';


//import like and dislike from fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    const thumbsUpIcon = "thumbs-up";
    const thumbsUpClass = "conversationsMessageReactIcon conversationsMessageThumbsUp"

    const thumbsDownIcon = "thumbs-down";
    const thumbsDownClass = "conversationsMessageReactIcon conversationsMessageThumbsDown"

    {/*
    <div className="conversationsMessageReactIconInnerContainer">
        <FontAwesomeIcon className={thumbsDownClass} icon={thumbsDownIcon}/>
    </div>*/}

    return (
        <div className="conversationsMessageReactButtonInnerContainer">
            <Button className="conversationsMessageReactButton">
                <FontAwesomeIcon className={thumbsUpClass} icon={thumbsUpIcon}/>
            </Button>
        </div>
    );
  }
}