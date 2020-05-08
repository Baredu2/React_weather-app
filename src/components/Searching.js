import React from 'react';

const Searching = () => {
    return(
        <div className="searching-city-div">
            <form>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form> 
        </div>            
    );
}

export default Searching;