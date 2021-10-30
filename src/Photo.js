import StarRating from './StarRating';
import PhotoSlider from './slider/PhotoSlider';
//import {useState} from 'react';

const Photo = ({id, index,  rating, changeRating, handleClick}) => {

   
  
    return (

        <div className="photo-component"> 
            <img src={`/images/${id}.JPG`} onClick={() => {handleClick(index);}}/>
            <StarRating photoId={id} photoRating={rating} changeRating={changeRating}/>
        </div>
    );
}

export default Photo;
