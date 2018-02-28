import React from 'react';

const Navscore = ( { score, highscore }) => {
    return (
        <div>
            <h5> Your Score: { score } High Score { highscore } </h5>
        </div>
    );
};

export default Navscore;