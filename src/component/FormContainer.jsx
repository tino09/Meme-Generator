import React, { Component } from 'react';
import FormComponent from './FormComponent'


class FormContainer extends Component {
    constructor(){
      super ()
      this.state = { 
      firstName : "",
      lastName : "",
      isFriendly : false,
      gender : "",
      favColor : "",
      destination: "",
      dietaryRestriction:[]
     }
     this.handleChange = this.handleChange.bind(this)
    }
    
    
  
     handleChange(event){
       const {name, value, type, checked} = event.target
       type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
          [name] : value
          
       })
     }
  
  
  
    render() { 
        return(
          <FormComponent 
      handleChange ={this.handleChange}
      {...this.state}
      />  
        )
      
    }
  }
 
export default FormContainer;