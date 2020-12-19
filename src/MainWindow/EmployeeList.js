import react from "react";
import useState from "react"
import  EmployeeComp from "../MainWindow/EmployeeComp"
import HeaderComp from "../HeaderComp"

const HandleEmployeeData = props => {
   // let [employees, setEmployees] = useState({
     //       name: "f",
         //   email: "f",
       //     phone: "f",
           // skills: "f",
         //   avatar: "f",
      //  }
   // )

    //let employee = <EmployeeComp employees />;
    
    ;return(
      
      <div className="App">
          <HeaderComp></HeaderComp>
          <EmployeeComp></EmployeeComp>

      </div>
      
    )

    
        
    
}
export default HandleEmployeeData
