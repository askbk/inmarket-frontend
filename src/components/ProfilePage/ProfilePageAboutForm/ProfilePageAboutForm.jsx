import React from 'react';
import { List, ListInput } from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        console.log(e.target.placeholder);
        this.props.onChange(e.target.value, e.target.placeholder);
    }

    render() {
        const {
            firstName,
            lastName,
            birthday,
            role,
            institution,
            formerEmployers
        } = this.props;

        return (
            <List noHairlines>
                <ListInput
                    label='First name'
                    floatingLabel
                    type='text'
                    placeholder='First Name'
                    clearButton
                    defaultValue={firstName}
                    onChange={this.handleChange.bind(this)}
                />
                <ListInput
                    label='Last name'
                    floatingLabel
                    type='text'
                    placeholder='Last Name'
                    clearButton
                    defaultValue={lastName}
                    onChange={this.handleChange.bind(this)}
                />
                <ListInput
                    label='Birthday'
                    type='date'
                    placeholder='Birthday'
                    clearButton
                    defaultValue={birthday}
                    onChange={this.handleChange.bind(this)}
                />
                <ListInput
                    label='Role'
                    floatingLabel
                    type='text'
                    placeholder='Role'
                    clearButton
                    defaultValue={role}
                    onChange={this.handleChange.bind(this)}
                />
                <ListInput
                    label='Institution'
                    floatingLabel
                    type='text'
                    placeholder='Institution'
                    clearButton
                    defaultValue={institution}
                    onChange={this.handleChange.bind(this)}
                />
                <ListInput
                    label='Former Employers'
                    floatingLabel
                    type='textarea'
                    placeholder='Former Employers'
                    clearButton
                    defaultValue={formerEmployers}
                    onChange={this.handleChange.bind(this)}
                />
            </List>
        );
    }
}
