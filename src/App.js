import React from 'react';
import 'weather-icons-lite/css/weather-icons-lite.css';
import Todayinfo from'./components/TodayWeather';
import Searching from './components/Searching';
import Clock from './components/Clock';
const API_KEY =  'f3ed895a5eb70251dfdb338f042a8069';

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind_speed: undefined,
    description: undefined,
    error: undefined
  }

  getIcon = async (e) => {
      
  }

  getTodayWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if(data.message != "city not found"){
    console.log(data);
     
    this.setState({
      temperature:  Math.round(data.main.temp-273.15),
      city: data.name,
      country:  data.sys.country,
      humidity: data.main.humidity,
      wind_speed: Math.round(data.wind.speed*3.6),
      description: data.weather[0].description,
      error: ""
    })
    console.log(this.state.temperature);
  }
}

  render(){
    return (
        <div>
            <Searching getTodayWeather={this.getTodayWeather}/> 
            <Todayinfo temp={this.state.temperature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description = {this.state.description}/>          
            <Clock/>
        </div>
    )
   };
}
export default App;