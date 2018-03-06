import React from 'react';
import Pictures from './pictures';

const Picturelist = (props) => { // Replace pics with ({}) variable in all areas
console.log("props ", props);
    const picItems = props.pics.map((picsArray) => {
        return (
                <Pictures
                    pics={ picsArray }
                    key={ picsArray.name }
                    score={ props.score }
                    highscore={ props.highscore }
                    onImageSelect={props.onImageSelect}
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

