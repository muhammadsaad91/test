import react from "react";
const Buton=(props)=>{
    return(
        <>
        <a href={props.link} target='_blank'>
        <button>{props.name}</button>
        </a>
        </>
    );
}
export default Buton;