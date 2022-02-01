import React, { useState } from "react";
import Data from './Data'
import Buton from './Buton'


const App = () => {


    return (
        <>
<h1>My All Projects on React js </h1>
<h2>(Muhammad SaAd)</h2>
<div className="card">
   {/* //make a map function to show all the data from Data.js */}

    {Data.map(Data => {
        return (
            <Buton name ={Data.name}
            link={Data.link}/>
        )
    })
    }


   
    </div>
        </>
    );
};
// console.log(narr)

export default App;
// {Data.map(function but(value){
//     return(
//         <Buton name={value.name}
//         link={value.link} />
//     );
// })}