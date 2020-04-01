import React, {Component} from 'react';

class Contact extends Component{

        state={
            person: {
            firstName:'',
            lastName:'',
            impression:'',
            },
        
     personlist: []
    }

    handleChangeFor = (event, propName)=>{
        console.log(event.target.value, propName)
        this.setState({
         person:{
             ...this.state.person,
             [propName]: event.target.value,
         }
        })
    }


    handleSubmit =() =>{
        console.log('In submit', this.state.person);
        this.setState({
            person: {
                firstName:'',
                lastName:'',
                impression:'',
                },
                personlist: [...this.state.personlist, this.state.person]
        })
      }
    
    render(){

        
        
        return(
            <div>
           <h2>Contact</h2>
           <input type="text" placeholder="First Name" value={this.state.person.firstName} onChange={(event) => this.handleChangeFor(event,'firstName')}></input>
           <input type="text" placeholder="Last Name" value={this.state.person.lastName} onChange={(event) => this.handleChangeFor(event,'lastName')}></input>
           <input type="text" placeholder="Best Impression" value={this.state.person.impression} onChange={(event) => this.handleChangeFor(event,'impression')}></input>
           <button onClick={this.handleSubmit} type="submit" id="submit">Submit</button>
           {this.state.personlist.map(item => <p key = {item.firstName}> {item.firstName} {item.lastName}'s Best Impression is {item.impression}.</p>)}
            <p> Phone: 1-800-WE-REACT</p>
            <p>Email: info@reactActors.com</p>
            </div>
        )
    }
}

export default Contact;