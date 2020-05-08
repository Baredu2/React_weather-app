import React from 'react';

const request = require('request');
const weather_url = 'http://api.openweathermap.org/data/2.5/weather?q=Harrow,uk&appid=f3ed895a5eb70251dfdb338f042a8069';
const options = {json: true};

function getWeather(city,country){
    console.log(city,country);
    request(weather_url, options, (error, res, body) => {
        if (error) {
            console.log(error)
        };
    
        if (!error && res.statusCode === 200) {
            console.log(body);
            return body;
        };
    });
};
const TodayWeather = (props) => {
    const json_weather = JSON.stringify(getWeather(props.city,props.country));
    return(
        <div className="today-weather-div">
            <div>
                <h1>Today Weather in {props.city},{props.country}</h1>

                <i className="wi-5x wi wi-darksky-clear-day"/> 
                <h2>{json_weather}</h2>
            </div>
        </div>
    )
}


export default TodayWeather;