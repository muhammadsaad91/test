import React from "react";
import './index.css'


function Card(props) {
    return (
        <>       <div className='cards'>
            <div className='card'>
                <img className='image' src={props.src} alt='Loading' />
                <div className='card-info'>
                    <h3 className='heading-main'>{props.movieName}</h3>
                    <span className='card-title'>Original Netflix Series Watch on Link below</span>
                    <a href={props.link} target='_blank' >
                        <button className="btn">Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
         </>


    );
}

export default Card;