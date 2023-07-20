import { useState } from "react";
import Employee from "./Employee";

function App() {
  const [count,setcount] = useState(0)

 const addCount = ()=>{
  setcount(count+1)
  console.log(count);
 } 

let employee = [
  {name:"Elon Musk",age:34},
  {name:"Steve Jobs",age:35},
  {name:"Ajay Raj", age:25}
]

  return (
    <div className='App'>
      <button onClick={addCount}>Add</button>
     
     {
      employee.map((obj,index)=>{ //here while writing index it automatically gets/create the index
        return (
         
         
          // <Employee key={index} name= {obj.name} age= {obj.age} /> 
          //here we need keys if more alike things are coming...it is to differentiate each other

          //or we can write like even simple way
          <Employee key={index} {...obj} /> 
        )
      })
     }

    </div>
  );
}

export default App;



