import React, { Component } from 'react';

class Button extends Component {

    // props or property
    render() {
        return (
            <button 
                className={ this.props.color }
                // Step 4: Use the function we received as property
                // in your event listener property (onClick)
                onClick = { this.props.handleOnClick }
            >
                { this.props.text }
            </button>
        )
    }
}

export default Button;