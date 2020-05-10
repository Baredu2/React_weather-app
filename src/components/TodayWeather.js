import React from 'react';
import Droplet from './static/img/droplet.png';
function getIcon(id){
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
            
            <div className="today-weather-div">
                <div>
                <center><h1>Weather in {props.city}</h1></center>
                    <p className='temp-p'>{props.temp}&deg;C</p>
                    <p className='weather-icon-p'>{getIcon(props.id)}</p>
                    <p className='humidity-p'>
                    <img className="droplet-img" alt="hum:" src={Droplet}/> <p className="humidity-value">{props.humidity}% </p>          
                    </p>
                    <p className='wind-p'>
                        <p className='wi-2x wi wi-darksky-wind'></p>
                        {props.wind} Km/h
                    </p>
                    <p className='max-temp-p'>Max: {props.max}&deg;C</p>
                    <p className='min-temp-p'>Min: {props.min}&deg;C</p>
                    {/* <h2>{json_weather}</h2> */}
                </div>
            </div>
        )
    }else{
        return <div className="today-weather-div"></div>
    }
}
export default TodayWeather;