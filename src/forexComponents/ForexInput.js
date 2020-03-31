import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

class ForexInput extends Component {
    render() {
        return (
            <FormGroup
                className = 'text-center'
            >
                <Label
                    style = {{
                        fontSize: '20px'
                    }}
                    className= 'text-success font-weight-bold mt-3'
                >
                    { this.props.label } 
                </Label>
                <Input
                    style = {{
                        width: '180px'
                    }}
                    className = 'text-center rounded-0'
                    placeholder = { this.props.placeholder }
                    defaultValue = { this.props.defaultValue }
                    onChange = { this.props.onChange }
                    type = 'number'
                ></Input>
            </FormGroup>
        )
    }
}

export default ForexInput;