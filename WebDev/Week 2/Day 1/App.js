import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <ContactCard name ="Saar" mobileNumber= "(646)249-4103" email= "saarhaber@gmail.com"  />
      <ContactCard name ="Josh" mobileNumber= "(646)426-2333" workNumber = "1-800-400-400" email= "josh12@gmail.com"  />
      <ContactCard name ="Ariel" mobileNumber= "(872)322-3333" email= "Ariel.Z@yahoo.com"  />

      <Decrement/>
    </div>
  );
}


class ContactCard extends React.Component {
constructor(props) {
super(props)
}

  render() {
      return (
         <div> <h5>name: {this.props.name}</h5>
          <h5>mobile number: {this.props.mobileNumber}</h5>
          <h5>work phone number: {this.props.workNumber}</h5>
          <h5>email: {this.props.email}</h5><br></br></div>
      );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobileNumber: PropTypes.number.isRequired,
  workNumber: PropTypes.number,
  email: PropTypes.string.isRequired
}

class Decrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start:  0
    };
  }

  Increment = () => {
    this.setState({start: this.state.start + 1});
  }
  Decrement = () => {
    if (this.state.start == 0) {
      alert("Cannot be less than zero")
    }
    else {
    this.setState({start: this.state.start - 1});
    }
  }
  
  render() {
    return (
      <div>
          <button onClick={this.Increment}>Increment</button>
          <h2>number: {this.state.start}</h2>
          <button onClick={this.Decrement}>Decrement</button>
          <br></br><br></br> 
      </div>
    );
  }
}

Decrement.propTypes = {
  start: PropTypes.number.isRequired
}


export default App;
