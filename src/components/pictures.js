import React from 'react';

const PictureItem = (props) => {
console.log("items", props.pics.image);
    return (
            <img src={props.pics.image}
                 className='img-rounded'
            />
    );
}

export default PictureItem;



