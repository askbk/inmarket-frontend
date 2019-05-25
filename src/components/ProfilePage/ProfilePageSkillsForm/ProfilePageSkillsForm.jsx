import React from 'react';
import { Input, Button, Row, Col, List, ListInput } from 'framework7-react';
import ProfileSkills from '../ProfileSkills/ProfileSkills';
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
                    <ProfileSkills
                        removeSkill={this.props.removeSkill}
                        onChecked={this.props.onChecked}
                        editIsActive={true}
                        activeSkills={this.props.activeSkills}
                        skills={this.props.skills}
                    />
                </div>
                <ProfilePageAddNewSkill handleAdd={this.handleAdd.bind(this)} />
            </div>
        );
    }
}
