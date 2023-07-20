import { useState } from "react";

function App() {
  const [count,setcount] = useState(0)

 const addCount = ()=>{
  setcount(count+1)
  console.log(count);
 } 

  return (
    <div className='App'>
      <button onClick={addCount}>Add</button>
        <h1>Counter: {count}</h1>
    </div>
  );
}

export default App;



