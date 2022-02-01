import react from "react";
import { useState } from "react/cjs/react.development";
const Buton=(props)=>{
// const [name,setchng]=useState(props.name)
// const chng =()=>{
// setchng('This is Checked by You')

    return(
        <>
        <a href={props.link} target='_blank'>
        <button>{props.name}</button>
        </a>
        </>
    );
}
    export default Buton;