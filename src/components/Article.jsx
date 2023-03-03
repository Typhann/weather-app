import React from "react";

export default function Article(props){
  const img = props.darkMode ? "new-window-light.png" : "new-window-dark.png"
  return(
    <>
    <article className="article-container">
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <div className="space-between">
        <h3>{props.author}</h3>
        <h3>{props.date.slice(0, 10)}</h3>
      </div>
      <p>{props.description} <a target="_blank" className="read-more" href={props.url}>Read more <img src={`../public/images/${img}`} width="20px" height="20px" /></a></p>  
  
      </article>
    </>

  )
}

// return <Article key={item.id} title={item.title} url={item.url} date={item.publishedAt} content={item.content} author={item.author} darkMode={props.darkMode}/>