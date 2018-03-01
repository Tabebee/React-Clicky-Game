import React from 'react';

const PictureItem = (props) => {
console.log("items", props.pics.image);
    return (
        <div>
            <img src={props.pics.image}/>
        </div>
    )

}

export default PictureItem;



