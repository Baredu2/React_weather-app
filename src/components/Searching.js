import React from 'react';

class Searching extends React.Component{

    render(){
        return(
            <div className="searching-city-div">
                <form onSubmit={this.props.getTodayWeather}>
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="country" placeholder="Country..."/>
                    <button>Get Weather</button>
                </form> 
            </div>            
        );
    }
}

export default Searching;