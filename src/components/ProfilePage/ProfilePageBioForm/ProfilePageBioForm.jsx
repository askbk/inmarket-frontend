import React from 'react';
import {List, ListInput} from 'framework7-react';

export default class extends React.Component {

  constructor(props){
    super(props);
  }

  handleChange(e){
    this.props.onChange(e.target.value, "BIO");
  }

  render(){

    const text = this.props.bio;

    return (
        
        <List noHairlines noHairlinesBetween>
            <ListInput
                label="Bio"
                floatingLabel
                type="textarea"
                placeholder="Bio"
                clearButton
                defaultValue={text}
                onChange={this.handleChange.bind(this)}>
            </ListInput>
        </List>
    );
  }
}
