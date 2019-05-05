import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
  Row,
  Col,
  Input,
  List,
  ListItem
} from 'framework7-react';

import InterestDropdown from '../InterestDropdown/InterestDropdown.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            interests: [
                { id: 1, name: "Avengers", selectedBy: false },
                { id: 2, name: "Fotball", selectedBy: false },
                { id: 3, name: "Hagearbeid", selectedBy: false }
            ],
            skills: [
                { id: 1, name: "Skrive ting", selectedBy: false },
                { id: 2, name: "Microsoft Word", selectedBy: false },
                { id: 3, name: "Snekre", selectedBy: false }
            ],
            selectValues: {}
        }

        this.handleInterestChange = this.handleInterestChange.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/qualities").then(res => {
            return res.json();
        }).then(res => {
            this.setState(state => {
                const skills = res.skills.map(skill => {
                    return {
                        ...skill, selectedBy: false
                    }
                });

                const interests = res.interests.map(interests => {
                    return {
                        ...interests, selectedBy: false
                    }
                });

                return {
                    ...state,
                    skills: skills,
                    interests: interests
                }
            });
        }).catch(error => {
            console.error(`Error when fetching skills/interests: ${error}`);
        })
    }

    handleInterestChange(e) {
        const interestId = e.target.value,
            selectName = e.target.name;

        this.setState(state => {
            const currentlySelected = state.selectValues[selectName];
            if (currentlySelected) {
                //  make currently selected interest available again
                state.interests[currentlySelected].selectedBy = false;

            }
            //  make new selection unavailable
            state.interests[interestId].selectedBy = selectName;

            //  store the new selected value for the dropdown
            state.selectValues[selectName] = interestId;

            //  Pass selected interests to parent component
            this.props.interestsChanged(state.interests);

            return state;
        });
    }

    handleSkillChange(e) {
        const skillId = e.target.value,
            selectName = e.target.name;

        this.setState(state => {
            const currentlySelected = state.selectValues[selectName];
            if (currentlySelected) {
                //  make currently selected skill available again
                state.skills[currentlySelected].selectedBy = false;

            }
            //  make new selection unavailable
            state.skills[skillId].selectedBy = selectName;

            //  store the new selected value for the dropdown
            state.selectValues[selectName] = skillId;

            //  pass selected skills to parent component
            this.props.skillsChanged(state.skills);

            return state;
        });
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <List>
                            {
                                [1, 2, 3].map((e, index) => (
                                    <InterestDropdown
                                        handleSelectChange={this.handleInterestChange}
                                        options={this.state.interests}
                                        name={"interest-input-" + index}
                                        placeholder={"Interesse " + (index + 1)}
                                        keyname="interest"
                                        key={"InterestDropdown" + index}
                                        />
                                ))
                            }
                        </List>
                    </Col>
                    <Col>
                        <List>
                            {
                                [1, 2, 3].map((e, index) => (
                                    <InterestDropdown
                                        handleSelectChange={this.handleSkillChange}
                                        options={this.state.skills}
                                        name={"skill-input-" + index}
                                        placeholder={"Ferdighet " + (index + 1)}
                                        keyname="skill"
                                        key={"SkillDropdown" + index}
                                        />
                                ))
                            }
                        </List>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
