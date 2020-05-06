import React from 'react'
const Todayinfo = () => {
    return(
        <div className="container">
            <div>
                <h1>Today Weather</h1>
                <i className="wi-10x wi wi-darksky-clear-day"/> 
                <h1>25&deg;</h1>
                {minmaxTemp(19,24)}
                <h4>
                    
                </h4>
            </div>
        </div>
    )
}


function minmaxTemp(min,max){
    return(
        <h3>
            <span>{min}&deg;</span>
            <span>{max}&deg;</span>
        </h3>
    )
}
export default Todayinfo;