import React, { useState } from "react";

const App=()=>{
    // let count=0;

    const state=useState();
    const [count,setCount] = useState(0);
     const click = ()=>{
         setCount(count+1);
        // console.log('clicked ' + count++);
    // console.log(state);
    
    };


    return(
    <>
    <div className="heading-main">
    <h1>{count}</h1>
    <button className="btn" onClick={click}>Click on me </button>
    </div>
    </>
);
console.log(click);
};
export default App;