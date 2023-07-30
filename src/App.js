import React from "react";
import { useState } from "react";
import Counter from "./counter";


function App() {
const [state,setState] = useState(false)
  return (
    <div className="App">
      <h1 onClick={()=>setState(!state)} >Show/Hide</h1>
      
    
      {state ? <Counter/>  : null}  {/* if state is true Counter will work or not */}
                
                 {/* or we can write like ↓ */}

                 {/* {state && <Counter/>}    it means that if state and counter is true only it will work */}
    
    </div>
  )
   
}


export default App;





//        USE EFFECT
//              ↓
// MOUNTING  : to load a new component
// UPDATING  : to change the value inside the component
//UNMOUNTING : if the component goes

