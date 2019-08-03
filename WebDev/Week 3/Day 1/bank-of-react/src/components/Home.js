import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


  class Home extends Component {
    render() {
      return (
          <div>
            <h1>Bank of React</h1>

            <Link to="/userProfile">User Profile</Link>
            <br></br>
            <Link to="/debits">Debits</Link> <br></br>
            <Link to="/credits">Credits</Link> <br></br>
            <AccountBalance accountBalance={this.props.accountBalance} debits={this.props.debits} credits={this.props.credits}/>
          </div>
      );
    }
  }
  
  export default Home;