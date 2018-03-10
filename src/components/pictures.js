import React from 'react';

const PictureItem = ({pics, onImageSelect}) => {
    // console.log("this", pics);
    // console.log("this", onImageSelect);
    let picName = pics.name;
    let picimage = pics.image;

    return (
        <img src={pics.image}
             className='img-rounded col-md-2 col-sm-3'
             onClick={ () => onImageSelect(picName) }
        />
    );
}

export default PictureItem;





// class PictureItem extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             tempPicture,
//             pictures,
//             selectedPictures: []
//         };
//     }
//
//     render() {
//         return (
//             <img src=''
//                  className='img-rounded'
//                  onClick={ this.handleChange() }
//             />
//         );
//     }
//
//     handleChange() {
//         this.setState( {})
//     }
// }


