import React from "react";

export default function NewsHeadline(props){

  const img = props.darkMode ? "new-window-light.png" : "new-window-dark.png"

  return(
    <a href={props.url} target="_blank">
      <div className={props.darkMode ? "dark news-headline" : "news-headline"}>
      <h2>{props.title}</h2>
      <img src={`../public/images/${img}`} width="12.5px" height="12.5px" />
    </div>
    </a>
  )
}