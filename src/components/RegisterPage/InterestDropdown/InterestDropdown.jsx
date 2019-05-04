import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
  ListInput
} from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    {/* TODO: Fix styling. list-style-type has to be set to none manually here for some reason.*/ }
    render() {
        return (
            <ListInput
                type="select"
                name={this.props.name}
                outline
                onChange={this.props.handleSelectChange}
                defaultValue="-1"
                style={{listStyleType:"none"}}
                >
                <option value="-1" disabled key={this.props.keyname + "-1"}>
                    {this.props.placeholder}
                </option>
                {
                    // Filter out options that are already selected by another
                    // dropdown and print.
                    this.props.options.filter(option => {
                        return !option.selectedBy ||
                        option.selectedBy === this.props.name
                    }).map(option => (
                        <option
                            value={option.id}
                            key={this.props.keyname + option.id}>
                            {option.name}
                        </option>
                    ))
                }
            </ListInput>
        )
    }
}
