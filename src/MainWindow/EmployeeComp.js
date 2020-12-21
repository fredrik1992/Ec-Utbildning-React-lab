


let EmployeeComp = (props) => {

    console.log (props)
    
   
    
    let test = ["hej","då"]
    return(
        
       
        //måste mappa den tror jag
        <div className = "employeeWindows">
            <img src = {props.avatar} className ="avatarPictures"></img>
            <div className = "dataArea">
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
            <p>Skills: {props.skills}</p>
            


            </div>
            
            
            
       
          
            
            

        </div>
        
    );

}
export default EmployeeComp
