import React from 'react'

function Counter(props) { //or here we can take here like funtion Counter({title,count})...
   
    //then we dont need this step
    // without calling props everytime we also can call it like this
    const {title,count} = props // but here we need to assign to the same name as there or it will get error 
    //here we are doing destructuring like array-destructuring


  return (
    <div>
        <h1>{title} {count}</h1>
        </div>
  )
}

export default Counter