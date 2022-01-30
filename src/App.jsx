import React, { useState } from "react";

// console.log(curdate);
const App=()=>{
    let curTime=new Date().toLocaleTimeString();
    const [time,setTime] = useState(curTime);
    const clicked =()=>{
          let curTime=new Date().toLocaleTimeString();
          setTime(curTime);
    };
    setInterval(clicked,1000);
    return(
        <>
        
        <h1 className="cards">{time}</h1>
        
        
        </>
    );

};
export default App;