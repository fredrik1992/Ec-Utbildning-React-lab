import React from "react"
import { useState, useRef, useEffect } from "react";
function Form(props) {
    
        let username = useRef(); 
        let email = useRef();
        let phone = useRef();
        let skills = useRef();
        
      

        function clearInputs() {
            username.current.value = ""
            email.current.value = ""
            phone.current.value = ""
            skills.current.value = ""
        }

        function myChangeHandler   (parameter)  {
           
          if (parameter == "addData"){
              console.log("in add data")
                props.addData( {
                    
                    name: username.current.value,
                    email: email.current.value,
                    phone: phone.current.value,
                    skills : skills.current.value})}
            
            if (parameter == "changeData"){

                props.changeOfState( {
        
                    name: username.current.value,
                    email: email.current.value,
                    phone: phone.current.value,
                    skills : skills.current.value })}
               
                clearInputs()
                
                props.closeForm()
               }



           

    return(
    
    <div id = "formDisplay" className = "formToAddEmployee">
        
        <label>Firstname:</label>
        <input ref ={username}  type="text" class="form-control" name="first_name" id ="name"/>
        <br></br>

        <label>Email:</label>
        <input ref = {email} type="text" class="form-control" name="first_name" id ="email"   />
        <br></br>

        <label>Phone:</label>
        <input ref = {phone} type="text" class="form-control" name="first_name" id ="phone"  />
        <br></br>

        <label>Skills:</label>
        <input ref = {skills} type="text" class="form-control" name="first_name" id ="skills" />
        <br></br>

       
        <button className="submitButton" id = "sumbitButtonFormId" onClick = {() => myChangeHandler("addData")}>Add</button>
        <button className ="changeButton" id ="changeButtonId" onClick= {() => myChangeHandler("changeData")}>Change</button>
        
       
        
    </div>
    )
   
}
export default Form