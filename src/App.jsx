import React, { useState } from "react";

// console.log(curdate);
const App=()=>{
    let curTime=new Date().toLocaleTimeString();
    const [time,setTime] = useState(curTime);
    const clicked =()=>{
          let curTime=new Date().toLocaleTimeString();
          setTime(curTime);
    };
    return(
        <>
        <div className="heading-main">
        <h3>{time}</h3>
        <button className="btn" onClick={clicked}>Click me to get Current Time</button>
        </div>
        </>
    );

};
export default App;