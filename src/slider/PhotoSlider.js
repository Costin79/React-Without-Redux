
import {useState} from 'react';
import ClosePhotoSlider from './ClosePhotoSlider';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import SliderPhoto from './SliderPhoto';
import Photo from '../Photo';

const PhotoSlider = ({photos, changeRating, displaySlider, closeSlider}) => {

    const [current, setCurrent] = useState(displaySlider.clickedIndex);
    const length = photos.length;

    console.log(current + " current");

    const nextPhoto = () => {
        setCurrent(current === length-1 ? 0 : current+1);
    }
    console.log(current + " current");
    const prevPhoto = () => {
        setCurrent(current === 0 ? length-1  : current-1);
    }

    // Return null if there is no data in the photos array.
    if(!Array.isArray(photos) || photos.length <= 0)
    {
        return null;
    }

    return (
        <div className={displaySlider.display} onClick={closeSlider}>
            <ClosePhotoSlider />
            <LeftArrow onClick={prevPhoto} />
            <RightArrow onClick={nextPhoto} />

        {photos.map((photo, index) => {
            return (
                <div className="slider-container" key={index}>
                    {index === current && (<SliderPhoto 
                                                key={photo.id}
                                                id={photo.id}
                                                index={index}
                                                currentRating={photo.rating}
                                                changeRating={changeRating}/> )
                    }
                </div>
            )})
        }
        </div>
    );
}

export default PhotoSlider;


