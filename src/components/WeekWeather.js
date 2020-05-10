import React from 'react';
import Droplet from './static/img/droplet.png';

function getIcon(id){
    // var time = new Date()

    if(id === 800){
        return <i className="wi-5x wi wi-darksky-clear-day"/>
    }else{
        if(id >= 200 && id <= 232 ){
            return <i className="wi-5x wi wi-darksky-thunderstorm"/>
        }else{
            if((id >= 300 && id <= 321 )||( id >= 500 && id <= 531)){
                return <i className="wi-5x wi wi-darksky-rain"/>
            }else{
                if(id >= 600 && id <= 622){
                    return <i className="wi-5x wi wi-darksky-snow"/>
                }else{
                    if(id >= 801 && id <= 804){
                        return <i className="wi-5x wi wi-darksky-cloudy"/>     
                    }
                }
            }
        }
    }
    return <i></i>
}


const TodayWeather = (props) => {
    if(props.city !== undefined && props.country !== undefined){
        return(
            
            <div className="week-weather-div">
            </div>
        )
    }else{
        return <div></div>
    }
}
export default TodayWeather;