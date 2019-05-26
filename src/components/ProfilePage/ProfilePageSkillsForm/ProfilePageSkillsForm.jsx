import React from 'react';
import { Input, Button, Row, Col, List, ListInput } from 'framework7-react';
import ProfileQualities from '../ProfileQualities/ProfileQualities';
import ProfilePageAddNewSkill from './ProfilePageAddNewSkill';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    handleAdd(text) {
        this.props.handleAdd(text, 'skill');
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h1>Skills</h1>
                    </Col>
                    {/*<Col className="ProfilePageSkillsFormAddButtonContainer">
              <Button onClick={this.handleAddNewSkill.bind(this)}>Add new skill</Button>
    </Col>*/}
                </Row>
                <div>
                    <ProfileQualities
                        removeSkill={this.props.removeSkill}
                        onChecked={this.props.onChecked}
                        editIsActive={true}
                        activeQualities={this.props.activeSkills}
                        qualities={this.props.skills}
                    />
                </div>
                <ProfilePageAddNewSkill handleAdd={this.handleAdd.bind(this)} />
            </div>
        );
    }
}
