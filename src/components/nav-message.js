import React, { Component } from 'react';


const Navmessage = ( {message} ) => {
    console.log(message);
    return(
        <h4> { message } </h4>
    )
}

export default Navmessage;