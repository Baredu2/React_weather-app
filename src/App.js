import React from 'react'
import 'weather-icons-lite/css/weather-icons-lite.css'
import Todayinfo from'./components/TodayWeather'
import Searching from './components/Searching'
import Clock from './components/Clock'


class App extends React.Component{
  city = 'London';
  country = 'Uk';
  render(){
    return (
        <div>
            <Todayinfo city={this.city} country={this.country}/>
            <Searching/>
            <Clock/>
        </div>
    )
   };
}
export default App;