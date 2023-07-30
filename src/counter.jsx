import React, {useState,useEffect} from 'react'


function Counter() {
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)
  useEffect(()=>{
    console.log('mounting...');
  console.log('count1...'+count);
  console.log('count2...'+count2);

  
  },[count]) 
// in this the useEffect will work only when any changes happen to the count only not work when there is any change in count 2...
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1>This is Component : {count}</h1>
      <button onClick={() => setCount2(count2 + 1)}>Increment</button>
        <h1>This is Component : {count2}</h1>
    </div>
  )
}

export default Counter