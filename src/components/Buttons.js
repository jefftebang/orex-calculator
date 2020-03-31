import React, { Component } from 'react';

// import Button component
import Button from './Button';

class Buttons extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around"
            style={{
                margin: "0 200px"
            }}
            >
                <Button
                    color={'btn-info'}
                    text={'+1'}
                    // Step 3: Pass the function we received as a property
                    // to button Component
                    handleOnClick = { this.props.handleAdd }
                />
                <Button
                    color={'btn-warning'}
                    text={'-1'}
                    handleOnClick = { this.props.handleMinus }
                />
                <Button
                    color={'btn-success'}
                    text={'Reset'}
                    handleOnClick = { this.props.handleReset }
                />
                <Button
                    color={'btn-secondary'}
                    text={'x2'}
                    handleOnClick = { this.props.handleMultiply }
                />
            </div>
        )
    }
}

export default Buttons;