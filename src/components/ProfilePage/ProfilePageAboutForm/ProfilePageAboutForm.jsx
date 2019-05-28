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
            role,
            institution
        } = this.props;

        return (
            <List noHairlines>
                <ListInput
                    label='Fornavn'
                    floatingLabel
                    type='text'
                    placeholder='Fornavn'
                    clearButton
                    defaultValue={firstName}
                    onChange={this.handleChange.bind(this)}
                />
                <ListInput
                    label='Etternavn'
                    floatingLabel
                    type='text'
                    placeholder='Etternavn'
                    clearButton
                    defaultValue={lastName}
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
            </List>
        );
    }
}
