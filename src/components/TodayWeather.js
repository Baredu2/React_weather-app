import React from 'react';

const TodayWeather = (props) => {
    // const json_weather = props.getWeather;
    // console.log(json_weather)
    if(props.city !== undefined && props.country !== undefined){
        return(
            
            <div className="today-weather-div">
                <div>
                    <h1>Weather in {props.city},{props.country}</h1>
                    <h2>{props.temp}&deg;</h2>
                    <i className="wi-5x wi wi-darksky-clear-day"/>
                    {/* <h2>{json_weather}</h2> */}
                </div>
            </div>
        )
    }else{
        return <div className="today-weather-div"></div>
    }
}
export default TodayWeather;