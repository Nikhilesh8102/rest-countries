import { useState } from "react";


export default function Counter() {
    const [val,setVal] = useState(1);
    
    let result = val*5;
    function handleChange(){
       
        setVal(val+1);
        
        
    }
   
  return (<>
  
  <div>Counter {val}</div>
    <button onClick = {handleChange}>Multiply by 5</button>
    <div>Result: {result}</div>
    </>
  )
 

}
