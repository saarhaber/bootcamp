import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home.js';
import UserProfile from './components/UserProfile.js';
import LogIn from './LogIn.js';
import Debits from './components/Debits.js';
import Credits from './components/Credits.js';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      debits: 0,
      credits: 0,
      debitsData: [],
      creditsData: [],
      accountBalance: 35235,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  componentDidMount(){
    axios.get(`https://moj-api.herokuapp.com/debits`)
    .then(res=>{
        let temp =0;
        res.data.map(item => {
          temp += item.amount;
        })
        this.setState({
          debits: temp,
          debitsData: res.data
      })
    })
    axios.get(`https://moj-api.herokuapp.com/credits`)
    .then(res=>{
        let temp =0;
        res.data.map(item => {
          temp += item.amount;
        })
        this.setState({
          credits: temp,
          creditsData: res.data
      })
    })  
  };

  newDebit = (des, cost, time) =>{
    let temp = (this.state.debits-parseInt(cost)).toFixed(2);
    let data = {
      amount: cost,
      description :des,
      date: time
    }
    let newArray = this.state.debitsData.push(data)
    this.setState({
      debits: temp,
      description: newArray
    })
  }

  newCredit = (des, cost, time) =>{
    let temp = (this.state.credits+parseInt(cost));
    let data = {
      amount: cost,
      description :des,
      date: time
    }
    let newArray = this.state.creditsData.push(data)
    this.setState({
      credits: temp,
      description: newArray
    })
  }

  render() {

    const HomeComponent = () => (<Home debits={this.state.debits} credits={this.state.credits} accountBalance={this.state.credits - this.state.debits}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
  const DebitsComponent = () => (<Debits debits={this.state.debits} debitsData={this.state.debitsData} newDebit={this.newDebit} accountBalance={(this.state.credits-this.state.debits).toFixed(2)}/>);
    const CreditsComponent = () => (<Credits credits={this.state.credits} creditsData={this.state.creditsData} newCredit={this.newCredit} accountBalance={(this.state.credits-this.state.debits).toFixed(2)}/>);


    return (
        <Router basename = "/bank-of-react">
          <div>
            <Route exact path="/home" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
            <Route exact path="/credits" render={CreditsComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;