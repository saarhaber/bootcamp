import React, { Component } from 'react';

  class Credits extends Component {

    render() {
      return (
        <div>
            <h1>Credits: {this.props.credits}</h1>
            <h1>Account Balance: {this.props.accountBalance}</h1>
        </div>
      );
    }
  }
  
  export default Credits;