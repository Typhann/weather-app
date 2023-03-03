import React from "react";
import NewsHeadline from "./components/NewsHeadline";
import Article from "./components/Article";

export default function News(props){

  const [article, setArticle] = React.useState([])
  const [headlines, setHeadlines] = React.useState([])

  React.useEffect(() =>{
    const apiKey = "0ccb8a4744e14aa5bd0ac95652d3aac0" 

    function fetchHeadlines(){
      fetch(`https://newsapi.org/v2/top-headlines?pageSize=5&page=1&country=us&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setHeadlines(data)
        // console.log(headlines)
      })
      
    }

    function fetchArticle(){
      // https://newsapi.org/v2/everything?q=all&from=2023-02-27&to=2023-02-28&sortBy=popularity&pageSize=5&page=1&apiKey=0ccb8a4744e14aa5bd0ac95652d3aac0
      fetch(`https://newsapi.org/v2/everything?q=all&from=2023-02-27&to=2023-02-28&sortBy=popularity&pageSize=1&page=1&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setArticle(data)

      })
    }
   
      fetchHeadlines()
      fetchArticle()
  },[])

  return(
    <section className='news-container'>
      {article.articles && 
      article.articles.map((item) =>{
        return <Article key={item.id} title={item.title} url={item.url} date={item.publishedAt} description={item.description} author={item.author} img={item.urlToImage} darkMode={props.darkMode}/>
      })}
    <div className="news-headlines">
      <h2 className="trending">Trending 📈</h2>
      {headlines.articles &&
      headlines.articles.map((item) => {
        return <NewsHeadline key={item.id} title={item.title} url={item.url} darkMode={props.darkMode}/>;
      })}
    </div>
    </section>
   
  )
}
// key={item.id} title={item.title} url={item.url} darkMode={props.darkMode}

   // .then(data => setArticle([
      //     {id: 0, title: data.articles[randomNumArray[0]].title, source: data.articles[0].source.name, author: data.articles[0].author, url: data.articles[0].url},
      //     {id: 1, title: data.articles[randomNumArray[1]].title, source: data.articles[1].source.name, author: data.articles[1].author, url: data.articles[1].url},
      //     {id: 2, title: data.articles[randomNumArray[2]].title, source: data.articles[2].source.name, author: data.articles[2].author, url: data.articles[2].url},
      //     {id: 3, title: data.articles[randomNumArray[3]].title, source: data.articles[3].source.name, author: data.articles[3].author, url: data.articles[3].url},
      //     {id: 4, title: data.articles[randomNumArray[4]].title, source: data.articles[4].source.name, author: data.articles[4].author, url: data.articles[4].url}]))
      // .catch(error => console.log(error))


            // let randomNumArray = []  
      // for(let i = 1; i <= 5; i++){
      //   randomNumArray.push(Math.floor(Math.random() * 20))
      // }
      // console.log(randomNumArray)
      // fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)