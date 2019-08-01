import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          Account Balance: {this.props.accountBalance} <br></br>
          Debit Total: {this.props.debits} <br></br>
          Credit Total: {this.props.credits}
        </div>
    );
  }
}

export default AccountBalance;