import Counter from "./counter"
import {useState } from "react"
function App(){
    const [fruit,setFruit] =useState("Apple")  
    const handlefruit=()=>{
      setFruit("Banana")
    }
  return <div>
    
    <h1>State in React</h1>
    <Counter/>
    
    <h1>{fruit}</h1>

    <button onClick={handlefruit}>Change fruit</button>
    
  </div>

}

export default App;