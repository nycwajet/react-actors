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
           <input type="text" id="firstname" value={this.state.firstName} onChange={(event) => this.handleChangeFor(event,'firstName')}></input>
           <input type="text" id="firstname" value={this.state.lastName} onChange={(event) => this.handleChangeFor(event,'LastName')}></input>
           <input type="text" id="firstname" value={this.state.impression} onChange={(event) => this.handleChangeFor(event,'impression')}></input>
           <button onClick={this.handleSubmit} type="submit" id="submit">Submit</button>
           {this.state.personlist.map(item => <p> {item.firstName} {item.lastName} Best Impression is {item.impression}.</p>)}
            <p> Phone: 1-800-WE-REACT</p>
            <p>Email: info@reactActors.com</p>
            </div>
        )
    }
}

export default Contact;