import React from 'react'
import 'weather-icons-lite/css/weather-icons-lite.css'
import Todayinfo from'./components/TodayWeather'




class App extends React.Component{
  city = 'London';
  country = 'Uk';
  render(){
    return (
        <div>
            <Todayinfo city={this.city} country={this.country}/>
        </div>
    )
   };
}
export default App;