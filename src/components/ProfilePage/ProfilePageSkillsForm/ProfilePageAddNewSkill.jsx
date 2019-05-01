import React from 'react';
import {Input, Row, Col, Button} from 'framework7-react';

import '../../../css/profile.css'

export default class extends React.Component {

  constructor(props){
    super(props);
  }

handleAdd(){
    const text = document.getElementById("AddNewSkillInput").firstChild.value;
    this.props.handleAdd(text);
}

  render(){

    return (
        <div className="AddNewSkillsInputContainer">
            <Row>
                <Col>
                    <Input size={18} id="AddNewSkillInput" maxlength="18" type="text" />
                </Col>
                <Col>
                    <Button small={true} onClick={this.handleAdd.bind(this)}>Add</Button>
                </Col>
            </Row>
        </div>
    );
  }
}