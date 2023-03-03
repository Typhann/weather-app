import React from "react";
import WeatherCard from "./components/WeatherCard"


export default function Weather(props){
  const [weatherData, setWeatherData] = React.useState([])

React.useEffect(() => {

 const API = "https://api.openweathermap.org/data/2.5/forecast"
 const apiKey = "59eca2760e6beb3caad0ef1280180867"

 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `${API}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setWeatherData([
        {id: 1, temp: kelvinToCelcius(data.list[0].main.temp), date: format(data.list[0].dt), img: data.list[0].weather[0].icon, description: data.list[0].weather[0].description},
        {id: 2, temp: kelvinToCelcius(data.list[8].main.temp), date: format(data.list[8].dt), img: data.list[8].weather[0].icon, description: data.list[8].weather[0].description},
        {id: 3, temp: kelvinToCelcius(data.list[16].main.temp), date: format(data.list[16].dt), img: data.list[16].weather[0].icon, description: data.list[16].weather[0].description},
        {id: 4, temp: kelvinToCelcius(data.list[24].main.temp), date: format(data.list[24].dt), img: data.list[24].weather[0].icon, description: data.list[24].weather[0].description},
        {id: 5, temp: kelvinToCelcius(data.list[32].main.temp), date: format(data.list[32].dt), img: data.list[32].weather[0].icon, description: data.list[32].weather[0].description}
   ]))
   .catch(error => console.log(error))

  });
} else {
  console.log("Geolocation is not supported by this browser.");
}


}, [])

function kelvinToCelcius(num){
 return num - 273.15
}
function format(date){
  const newDate = new Date(date * 1000)
  const options = {
  weekday: "long",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZone: "Europe/Paris"
  };
  let formattedDate = new Intl.DateTimeFormat("en-US", options).format(newDate).toString();
  formattedDate = formattedDate.replace(/,/g, '')
  return formattedDate

}

return(
  <section className='weather-container'>
    {weatherData.map(item => (
    <WeatherCard key={item.id} darkMode={props.darkMode} date={item.date} temperature={`${Math.round(item.temp)}°`} img={item.img} description={item.description}/>
   ))}
  </section>
 
)
  
}
