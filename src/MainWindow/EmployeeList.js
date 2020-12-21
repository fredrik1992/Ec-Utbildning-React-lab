import react from "react";
import { useState, useRef, useEffect } from "react";
import  EmployeeComp from "../MainWindow/EmployeeComp"
import HeaderComp from "../HeaderComp"

function HandleEmployeeData ()  {
  const [employees, setEmployees] = useState ([

   {
    name: "Yennifer",
    email: "Yennifer@hotmail.com",
    phone: "04094267",
    skills: "Powerful magic",
    avatar: "https://i.imgur.com/ebHfuth.png",

    },
    {
      name: "Triss merigold",
      email: "TrissyBadAss@hotmail.com",
      phone: "05078805174",
      skills: "Seducing Geralt",
      avatar: "https://i.imgur.com/TUhCrsY.png",
    
    
    },
    {
      name: "Geralt of rivia",
      email: "SomebodyThrowACoinToMe@Hotmail.se",
      phone: "0455681665295",
      skills: "Slaying MOFS",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    }]
  )

    




    

   
  function addToEmployees() {
    
    setEmployees(function (prevState) {
      return [...prevState, {
        name: "Geralt of rivia",
      email: "SomebodyThrowACoinToMe@Hotmail.se",
      phone: "0455681665295",
      skills: "Slaying MOFS",
      avatar: "https://i.imgur.com/Q9qFt3m.png",

      }];
    });
  }
  console.log (employees)
    
    return(
      
      <div className="App">
          <HeaderComp></HeaderComp>
          <button onClick={addToEmployees}>Add Employee</button>
          {employees.map(function(employee){

            return(
              <EmployeeComp 
              key = {employee.name}
              avatar ={employee.avatar} 
              name = {employee.name}
              email ={employee.email}
              phone = {employee.phone}
              skills = {employee.skills}/>
            )
          })}
          
          

      </div>
      
    )

    
        
    
}
export default HandleEmployeeData
