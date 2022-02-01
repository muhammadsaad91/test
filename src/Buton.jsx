import react, { StrictMode } from "react";
import { useState } from "react/cjs/react.development";
// StrictMode(Buton);
const Buton=(props)=>{
    //use state to make a state for the button on click
    const [clicked, setClicked]=useState(props.name);
    //make a function to make the button on click
    const handleClick=()=>{
        setClicked("clicked");
    }

// const [name,setchng]=useState(props.name)
// const chng =()=>{
// setchng('This is Checked by You')
// }
    return(
        <>
        <a href={props.link} target='_blank'>
        <button onClick={handleClick} >{clicked}</button>
        </a>
        </>
    );
}
    export default Buton;