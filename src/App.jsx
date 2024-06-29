import axios from "axios"
import './App.css'
import { useState } from "react"


function App() {
  
  
  let [data, setData] = useState({})
  let [location, setLocation] = useState('')
  
  let url =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  
  let searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      searchLocation('')
    }
  }
  
  return (
    <>
      <div className="main">
        <div className="header">
          <h1>Weather Forcast</h1>
        </div>
        <div className="inputDiv">
          <input type="text" placeholder="Enter Location" value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation}/>
        </div>
        <div className="temp">
          <h1 id="city">{location}</h1>
         {data.main ? <h1 id="temp">{((data.main.temp - 32) * 5/9).toFixed(0) + "°C"}</h1> : null}
        </div>
        <div className="weather-description">
          <div>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            <p>Weather</p>
          </div>
          <div>
            {data.main ? <p>{((data.main.feels_like - 32) * 5/9).toFixed(0)}°C</p>  : null}
            <p>Feels</p>
          </div>
          <div>
            {data.wind ? <p>{data.wind.speed} Kph</p> : null}
            <p>Wind</p>
          </div>
          <div>
            {data.main ? <p>{data.main.humidity + " %"}</p> : null}
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
