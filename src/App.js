import React from 'react'
import 'weathericons/css/weather-icons.min.css'
import Todayinfo from'./components/Todayinfo'

class App extends React.Component{
  render(){
    return (
        <div>
            <Todayinfo/>
        </div>
    )
   };

  }
export default App;