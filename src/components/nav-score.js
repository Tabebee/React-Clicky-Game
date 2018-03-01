import React from 'react';

const Navscore = ( { score, highscore }) => {
    return (
        <div>
            Your Score: { score } High Score { highscore }
        </div>
    );
};

export default Navscore;