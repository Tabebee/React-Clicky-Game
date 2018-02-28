import React from 'react';
import Pictures from './pictures';

const Picturelist = (props) => { // Replace props with ({}) variable in all areas

    return (
        <div>
            <Pictures pics={props} />
        </div>
    );
}

export default Picturelist;


