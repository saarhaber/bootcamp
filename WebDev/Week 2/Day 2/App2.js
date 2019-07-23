import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { thisExpression } from '@babel/types';

function App() {
  return (
    <div className="App">
      <Folder/>
    </div>
  );
}

class Folder extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    Home: "Home:",
    Files: <ul>
    <li>File1</li>
     <li>File2</li>
     <li>File3</li>
     </ul>,
    toggle: true,
  };
  }

  toggle = () => {
    this.setState({toggle:!this.state.toggle})
  }
  
    render() {
        return (
          <div> {this.state.Home} <br></br>
            {this.state.toggle ? this.state.Files
            : this.state.toggle}
            <button onClick={this.toggle}>Toggle</button>
          </div>   
           );
    }
  }
  
  Folder.propTypes = {
    Home: PropTypes.string,
    Files: PropTypes.string
  }


export default App;
