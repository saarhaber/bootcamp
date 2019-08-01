import React, { Component } from 'react';

  class Debits extends Component {


    render() {
      return (
        <div>
            <h1>Debits: {this.props.debits}</h1>
            <h1>Account Balance: {this.props.accountBalance}</h1>
        </div>
      );
    }
  }
  
  export default Debits;