import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import './Debits.css'
import {Link} from 'react-router-dom';
import Card from './Card';

class Credits extends Component {
    constructor() {
        super();
        this.state = {
            description:"",
            amount:0,
            time: ""
        }
      }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        }, 1000);
    }

    display = () =>(
        this.props.creditsData.map(item=>{
            return(
                <Card 
                description={item.description}
                amount={item.amount}
                date={item.date}
                data={this.props.debitsData}
                />
            )
        })
    )

    handleChange = name => ({ target }) =>{
        console.log(target.value)
        this.setState({ 
          [name]: target.value
        }); 
      }
      
      handleSubmit = (event) =>{
        event.preventDefault();
        this.props.newCredit(this.state.description,this.state.amount,this.state.time);
      }   

  render() {
    return (
            <div className="container">
            <h1>Credits</h1>
            <AccountBalance credits={this.props.credits} accountBalance={this.props.accountBalance}/>
            <div className="items">
                {this.display()}
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>
                    Credit Description:
                    <br></br>
                    <input type="text" onChange={this.handleChange('description')}/>
                    </label>
                    <br></br>
                    <label>
                    Credit Amount:
                    <br></br>
                    <input type="text" onChange={this.handleChange('amount')}/>
                    </label>
                    <br></br>
                    <input value={this.state.time}></input>
                    <br></br>
                    <button type="submit" value="Submit" >Submit</button>
              </form>
              <Link to="/home">Home</Link>
            </div>
    );
  }
}

export default Credits;