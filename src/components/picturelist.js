import React from 'react';
import Pictures from './pictures';

const Picturelist = (props) => { // Replace pics with ({}) variable in all areas
// console.log(props.score);
    const picItems = props.pics.map((picsArray) => {
        return (
                <Pictures
                    pics={ picsArray }
                    key={ picsArray.name }
                    score={ props.score }
                    highscore={ props.highscore }
                />
        );
    });

    return (
        <div>
            { picItems }
        </div>
    );
}

export default Picturelist;

