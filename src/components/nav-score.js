import React from 'react';

const Navscore = ( { score, highscore }) => {
    return (
        <div>
            Your Score: { score } <span className='scoreBorder'> </span> High Score { highscore }
        </div>
    );
};

export default Navscore;