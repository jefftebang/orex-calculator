import React, { Component } from 'react';
// import Box component
import Box from './components/Box';
// import Buttons component
import Buttons from './components/Buttons';

class App extends Component {

  state = {
    count: 0
  }

  // Step 1: Create the function
  handleAdd = () => {
    // Step 5: Set up the set state function (or change the state of count )
    this.setState({
      count: this.state.count + 1
    })
  }

  handleMinus = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleReset = () => {
    this.setState({
      count: 0
    })
  }

  handleMultiply = () => {
    this.setState({
      count: this.state.count * 2
    })
  }

  // Activity, set up the functions of the remaining buttons.
  // handleMinus
  // handleReset
  // handleMultiply

  render (){
    return (
      <React.Fragment>
        <Box
          count = { this.state.count } 
        />
        <Buttons
          // Step 2: Pass the function as a property to Buttons Component
          handleAdd = { this.handleAdd }
          handleMinus = { this.handleMinus }
          handleReset = { this.handleReset }
          handleMultiply = { this.handleMultiply }
        />
      </React.Fragment>
    )
  }
}

export default App;