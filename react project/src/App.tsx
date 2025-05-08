import User from "./User"
import College from "./college"
import {useState} from "react"

function App(){
  // type obj1={name:string,
  //   age:number,
  //   email:string}
  
  // let student:obj1={name:"Madeeha",
  // age:35,
  // email:"madeeha@test.com"}

  let collegeName:string[]=["IIT","Du","FJMC"]
  const[student,setStudent]=useState("Madeeha")
  return <div>
    <hr/>
      <h1>Props in React Js</h1>
      {student && <span>student Names:{student}</span>}
      <button onClick={()=>setStudent("Aiman")}>change Student Name</button>
      {/* <User name={student.name} age={student.age} email={student.email} /> */}
      <College name={collegeName} />
  </div>
}
export default App;