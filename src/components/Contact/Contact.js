import React, {Component} from 'react';

class Contact extends Component{

        state={
            person: {
            firstName:'',
            lastName:'',
            impression:'',
            },
        
     userList: []
    }

    handleChangeFor = (event, propName)=>{
        console.log(event.target.value, propName)
        this.setState({
            
        })
    }

    // handleChangeLastName= (event)=>{
    //     console.log(event.target.value)
    //     this.setState({
    //         lastName: event.target.value,
    //     })
    // }

    // handleChangeImpression= (event)=>{
    //     console.log(event.target.value)
    //     this.setState({
    //         impression: event.target.value,
    //     })
    // }
    render(){

        
        
        return(
            <div>
           <h2>Contact</h2>
           <input type="text" id="firstname" onChange={this.handleChangeFirstName} placeholder="First Name"></input>
           <input id="lastName" type="text" onChange={this.handleChangeLastName} placeholder="Last Name">
            </input><input id="impression" type="text" onChange={this.handleChangeImpression} placeholder="Best Impression"></input>
            <button type="submit" id="submit">Submit</button>
            <p>{this.state.firstName} {this.state.lastName}'s Best impression is {this.state.impression}.</p>
           <p> Phone: 1-800-WE-REACT</p>
           <p>Email: info@reactActors.com</p>
           </div>
        )
    }
}

export default Contact;