import { useState } from "react";
import Counter from "./counter";

function App() {
  const [count,setcount] = useState(0)

 const addCount = ()=>{
  setcount(count+1)
  console.log(count);
 } 

  return (
    <div className='App'>
      <button onClick={addCount}>Add</button>
      <Counter title="1st Counter" count = {count} />
      <Counter title="2nd Counter" count = {count} />
    </div>
  );
}

export default App;



