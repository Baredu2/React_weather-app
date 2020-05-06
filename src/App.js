import React from 'react'
import 'weather-icons-lite/css/weather-icons-lite.css'
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