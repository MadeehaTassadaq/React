import {useState} from "react"
function App(){
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
return (
  
  <div>
    <h1>Controlled Component</h1>
    <form action="" method="get">
      <input type="text" value={name}onChange={(event)=>setName(event.target.value)}placeholder="Type your name here"></input>
      <br/><br/>
      <input type="password"value={password} onChange={(event)=>setPassword(event.target.value)}placeholder="Type your password here"></input>
      <br/><br/>
      <input type="text"value={email}onChange={(event)=>setEmail(event.target.value)} placeholder="Type your email here"></input>
      <br/><br/>
      <button>submit</button>
      <button onClick={()=>{setName("");setEmail("");setPassword("")}}>clear</button>
<h1>{name}</h1>
<h1>{password}</h1>
<h1>{email}</h1>
    </form>
  </div>
)
}
export default App;