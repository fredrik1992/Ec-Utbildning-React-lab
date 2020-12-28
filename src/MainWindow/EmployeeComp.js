
import { useState, useRef, useEffect } from "react";

let EmployeeComp = (props) => {
   
   
    function showElement() {props.hideElement(props.name)}
    
    function  changeElement() {
        document.getElementById("changeButtonId").style.display ="block"
        document.getElementById("sumbitButtonFormId").style.display ="none"

        props.callForm("change")
        props.changeState(props.name,)
    }
  
       return(
        
       
            <div id = {props.name} className = "employeeWindows">
                
                <img src = {props.avatar} className ="avatarPictures"></img>
                
                <div className = "dataArea">
                    <p>Name: {props.name}</p>
                    <p>Email: {props.email}</p>
                    <p>Phone: {props.phone}</p>
                    <p>Skills: {props.skills}</p>
                </div>
                 
                 <button  className = "delteButton" onClick ={showElement} >x</button>
                 <button  className = "changeEmployeeButton" onClick = {changeElement}  >Change Info</button>
                
            </div>)}
                export default EmployeeComp
