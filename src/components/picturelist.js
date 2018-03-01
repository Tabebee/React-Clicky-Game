import React from 'react';
import Pictures from './pictures';

const Picturelist = (props) => { // Replace pics with ({}) variable in all areas
// console.log(props.pics);
    const picItems = props.pics.map((picsArray) => {
        return (
                <Pictures
                    pics={ picsArray }
                    key={ picsArray.name }
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

