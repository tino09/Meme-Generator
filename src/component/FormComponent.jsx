import React from 'react';

function FormComponent (props) {
    return ( 
        
        <form >
          <input 
          type="text" 
          name="firstName" 
          placeholder="first name" 
          onChange={props.handleChange}
          />
          <br/>
          <input 
          type="text" 
          name="lastName" 
          placeholder="last name" 
          onChange={props.handleChange}
          />
          <br/>
          <textarea
          value={"text area"} 
          onChange={props.handleChange}
          />
          
          <br/>
  
          <label>
          <input 
          type="checkbox"
          name="isFriendly"
          checked={props.isFriendly}
          onChange={props.handleChange}
          /> Is Friendly
          </label>
  
          <br/>
  
          <label>
          <input 
          type="radio"
          name="gender"
          value="Male"
          checked={props.gender === "Male"}
          onChange={props.handleChange}
          />Male
          </label>
  
          <br/>
  
          <label>
          <input 
          type="radio"
          name="gender"
          value="Female"
          checked={props.gender === "Female"}
          onChange={props.handleChange}
          />FeMale
          </label>
  
          <br />
  
          <select
          name="favColor"
          onChange={props.handleChange}>
            <option value="p">Choose Color</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="pink">pink</option>
          </select>
  
              <h1>{props.firstName} {props.lastName}</h1>
              <h1> You are a {props.gender}</h1>
              <h4> Favorite color is {props.favColor}</h4>
  
          <input name=""type="radio" />
  
              <button>Submit</button>
        </form>
       );
}

export default FormComponent;