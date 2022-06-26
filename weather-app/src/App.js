import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
      response => response.json()
    ).then(
      data => {
        setWeatherData(data);
        console.log(data);
        setCity('');
      }
    )
  }, [])

  const apiKey = '5f69704deedcc06f3b2c963b6cbd5fa7';
  const[weatherData, setWeatherData] = useState([{}]);
  const[city, setCity] = useState("warsaw");

  const getWeather = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
      response => response.json()
    ).then(
      data => {
        setWeatherData(data);
        console.log(data);
        setCity('');
      }
    )

  }

  return (
    <main className='App'>
      <form className='weather-form' onSubmit={getWeather}>
        <input
          className='form-input'
          placeholder='Enter city...'
          value={city}
          onChange={e=>setCity(e.target.value)}
        />
      </form>

      {weatherData.main ? <section className='weather-section'>
        <div className='top-section'>
            <div className='location'>
              {weatherData.name}
            </div>

            <div className='temp'>
              {weatherData.main.temp}°F
            </div>

          </div>

          <div className='bottom-section'>
            <div className='feels bottom-flex'>
              <h3>Feels</h3>
              <h4>{weatherData.main.feels_like}°F</h4>
            </div>

            <div className='humidity bottom-flex'>
              <h3>Humidity</h3>
              <h4>{weatherData.main.humidity}%</h4>
            </div>

            <div className='wind bottom-flex'>
              <h3>Wind</h3>
              <h4>{weatherData.wind.speed} MPH</h4>
            </div>
          </div>
      </section> : null}
    </main>
  );
}

export default App;
