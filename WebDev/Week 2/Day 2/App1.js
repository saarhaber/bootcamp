import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { thisExpression } from '@babel/types';

function App() {
  return (
    <div className="App">
      <FormEdit/>
      
    </div>
  );
}

class FormEdit extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    edit: false,
    first:  "edit me",
    last: "edit me",
    savedFirst: "",
    savedLast: ""
  };
  }

  edit = () => {
    this.setState({edit:!this.state.edit})
   
  }

  save = () => {
    this.setState({savedFirst: this.state.first, savedLast: this.state.last, edit:false})
  }

  cancel = () => {
    this.setState({edit:false})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
    render() {
        return (
          <div>
            <h3>first: {this.state.edit ? <input type="text" name="first" value={this.state.first} onChange={this.handleChange}/> :
            this.state.savedFirst}</h3>
            <h3>last:  {this.state.edit ? <input type="text" name="last" value={this.state.last} onChange={this.handleChange}/> :
            this.state.savedLast}</h3>
            <button onClick={this.edit}>edit</button>
            {this.state.edit ? 
            <div><button onClick={this.save}>save</button>
            <button onClick={this.cancel}>cancel</button></div>
            : ""
            }
          </div>   
           );
    }
  }
  
  FormEdit.propTypes = {
    first: PropTypes.string,
    last: PropTypes.string
  }


export default App;
