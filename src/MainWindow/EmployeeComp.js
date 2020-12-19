import react from "react";


let EmployeeComp = (EmployeesData) => {
    return(
        <div className = "employeeWindows">
            <image className="employeeImage" src = {EmployeesData.avatar} ></image>
            
            
            <p>{EmployeesData.name}</p>
            <p>{EmployeesData.email}</p>
            <p>{EmployeesData.phone}</p>
            <p>{EmployeesData.skills}</p>

        </div>
        
    );

}
export default EmployeeComp
