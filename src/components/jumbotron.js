import React from 'react';

const Jumbotron = () => {
    return (
        <div className='jumbotron'>
            <h1> Lets Play The Clicky Game </h1>
            <h5><u> Rules </u></h5>
            <h6> Click on an image to begin </h6>
            <h6> Than click on a different image </h6>
            <h6> You get a point for each unique picture you click on </h6>
            <h6> If you click on the same image than your score resets</h6>
            <h5> Good Luck!!! </h5>
        </div>
    );
}

export default Jumbotron;
