import React from 'react'
import ReactDOM from 'react-dom'
import Data from './Data'
import Card from './App'
import mzpr from './images/mzpr.jpg'
import osman from './images/osman.jpg'
import ertugrul from './images/ertugrul.jpg'
import './index.css'

 console.log(Data[2]);
ReactDOM.render(

    <>
       <h1 className='heading-main'>My Favourite Netflix Series </h1>
       <h2 className='heading-main'>(SaAd's App)</h2>
       <div className="main">  
        <Card src={mzpr}
        link={Data[0].link}
        movieName={Data[0].movieName}
        />
        <Card src={osman}
        link={Data[1].link}
        movieName={Data[1].movieName}
        />
        <Card src={ertugrul}
        link={Data[2].link}
        movieName={Data[2].movieName}        />
    <Card src={mzpr}
        link={Data[0].link}
        movieName={Data[0].movieName}
        />
        <Card src={osman}
        link={Data[1].link}
        movieName={Data[1].movieName}
        />
   </div> </>
    , document.getElementById('root')

)