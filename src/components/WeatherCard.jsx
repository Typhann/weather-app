import React from "react";


export default function WeatherCard(props){

  return(
    <div className='border-gradient'>
        <div className={props.darkMode ? "dark dark-border card-container" : "card-container"}>
        <h2 className="card-info">{props.date}</h2>
        <div className="card-row">
          <h2 className="temperature">{props.temperature}</h2>
          <img className="card-img" src={`../public/images/${props.img}.png`}/>
        </div>  
        <h2 className="card-info">{props.description}</h2>
      </div>
    </div>
  )
}