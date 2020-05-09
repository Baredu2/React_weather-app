import React, { Component } from 'react';

class Clock extends Component{
    state = {
        time: new Date()
    }


    currentTime(){
        this.setState({
            time: new Date()
        })
    }
    componentWillMount(){
        setInterval(()=>this.currentTime(),1000)
    }

    render(){
        return(
            <div className="clock-div">
                <p className="clock-p">{this.state.time.toTimeString().split(" ")[0]}</p>
                <p className="date-p">{this.state.time.getDate()}.{this.state.time.getMonth()}.{this.state.time.getFullYear()}</p>
            </div>
        )
    }
}

export default Clock;