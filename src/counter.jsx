import React, {useState,useEffect} from 'react'


// useEffect is used to get specific component if it is updated or in mounting inside the useEffect function... which is working while showing...
function Counter() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log('mounting...');
  console.log('updating'+count);

  return (() =>{
  console.log('cleanup', count);
  }) // the return will work first before the mounting and updation
    // the codes which are write in the return statement inside the useEffect will work while the view is getting removed... 
  },[count]) // if the dependency array is empty it is not affected to anything.it ,the hook, will be executed only once,
  //if anything like,here count, is writes inside the dependency array it will affect it.
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1>This is Component : {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter