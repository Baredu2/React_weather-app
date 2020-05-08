import React, { Component } from 'react';

class Clock extends Component{
    state = {
        time:new Date()
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
                {this.state.time.toTimeString().split(" ")[0]}  
            </div>
        )
    }
}

export default Clock;