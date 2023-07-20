import { useState } from "react";
import Counter from "./counter";

function App() {
  const [count,setcount] = useState(0)

 const addCount = ()=>{
  setcount(count+1)
  console.log(count);
 } 

 let obj = {
  title : "1st Counter",
  count,
  place:"hello"
 }

  return (
    <div className='App'>
      <button onClick={addCount}>Add</button>
      <Counter title="1st Counter" {...obj} />
      <Counter title="2nd Counter" count = {count} />
    </div>
  );
}

export default App;



