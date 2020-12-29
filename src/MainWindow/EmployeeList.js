import react from "react";
import { useState, useRef, useEffect } from "react";
import EmployeeComp from "../MainWindow/EmployeeComp";
import HeaderComp from "../HeaderComp";
import Form from "../MainWindow/AddEmployeeForm";

function HandleEmployeeData() {
  let count = 1;
  let nameOfElementToChange = "";

  const [employees, setEmployees] = useState([
    {
      display: true,
      name: "Yennifer",
      email: "Yennifer@hotmail.com",
      phone: "04094267",
      skills: "Powerful magic",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },
    {
      display: true,
      name: "Triss merigold",
      email: "TrissyBadAss@hotmail.com",
      phone: "05078805174",
      skills: "Seducing Geralt",
      avatar: "https://i.imgur.com/TUhCrsY.png",
    },
    {
      display: true,
      name: "Geralt of rivia",
      email: "SomebodyTossACoinToMe@Hotmail.se",
      phone: "0455681665295",
      skills: "Slaying MOFS",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
  ]);

  function addEmployeeForm(displayOrNotForm) {
    document.getElementById("formDisplay").style.display = displayOrNotForm;
  }
  function showForm() {
    document.getElementById("changeButtonId").style.display = "none";
    document.getElementById("sumbitButtonFormId").style.display = "block";
    showFormOrnot();
  }
  function showFormOrnot() {
    if (count == 1) {
      addEmployeeForm("none", "block");
      count++;
    } else {
      addEmployeeForm("block", "none");
      count = 1;
    }
  }

  function updateState() {
    setEmployees(function (prevState) {
      return [...prevState];
    });
  }
  function hideElements(nameOfemployee) {
    employees.map(function (employee) {
      if (nameOfemployee == employee.name) {
        employee.display = false;

        updateState();
      }
    });
  }
  function setNameOfElementToChange(props) {
    nameOfElementToChange = props;
  }
  function changeStateOfElement(props) {
    employees.map(function (employee) {
      if (nameOfElementToChange == employee.name) {
        employee.name = props.name;
        employee.email = props.email;
        employee.phone = props.phone;
        employee.skills = props.skills;
        
        updateState();
      }
    });
  }
  

  function addToEmployees(props) {
    setEmployees(function (prevState) {
      console.log ("in add data")
      return [
        ...prevState,
        {
          display: true,
          name: props.name,
          email: props.email,
          phone: props.phone,
          skills: props.skills,
          avatar: "https://i.imgur.com/t9HFQvX.png",
        },
      ];
    });
  }

 
 

  useEffect(() => {
    let localStorageGet = JSON.parse(localStorage.getItem("Employees"));
    if (localStorageGet != null) {
      setEmployees(localStorageGet);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Employees", JSON.stringify(employees));
  });
  
  return (
    <div className="App">
      <HeaderComp></HeaderComp>

      <button className="buttonToAddEmployee" onClick={showForm}>
        Add Hunter
      </button>

      <Form
        closeForm={showFormOrnot}
        addData={addToEmployees}
        changeOfState={changeStateOfElement}
      ></Form>

      <div className="windowForEmployees">
        {employees.map(function (employee) {
          if (employee.display == true) {
            return (
              <EmployeeComp
                changeState={setNameOfElementToChange}
                callForm={showFormOrnot}
                hideElement={hideElements}
                display={employee.display}
                key={employee.name}
                avatar={employee.avatar}
                name={employee.name}
                email={employee.email}
                phone={employee.phone}
                skills={employee.skills}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default HandleEmployeeData;
