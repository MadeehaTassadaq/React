import {useState} from "react"

function Counter(){
    const[counter,setCounter]=useState(0)
    const[rCounter,setrCounter]=useState(100)
return <div>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Update Counter</button>
        <h1>{rCounter}</h1>
        <button onClick={()=>setrCounter(rCounter-1)}>Reverse Counter</button>
    </div>
    
}
export default Counter;