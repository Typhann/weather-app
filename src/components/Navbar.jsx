import React from "react";


export default function Navbar(props){
  const img = props.darkMode ? "lightMode.png" : "darkMode.png"
  

  return(
    <nav>
       <h1>Cloudshine</h1>
       <img onClick={props.toggleDarkMode}  src={`./public/images/${img}`} width="40px" height="40px" />
      </nav>    
  )
}