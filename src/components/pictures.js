import React from 'react';

const PictureItem = (props) => {
console.log("items", props.pics.image);
// console.log("score", props.score);
    return (
            <img src={props.pics.image}
                 className='img-rounded'
                 // onClick={ () => onImageSelect() }
            />
    );
}

export default PictureItem;



