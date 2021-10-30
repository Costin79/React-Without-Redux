import StarSlider from './StarSlider';
import { useState } from 'react';

const SliderRating = ({ id, index, currentRating, changeRating }) => {

    //const[rating, setRating] = useState(currentRating);
    const[hover, setHover] = useState(0);


    //console.log(currentRating);
    //console.log(index);

    return (
        <div className="stars" >
            
            <StarSlider starValue={1} id={id} rating={currentRating} change={changeRating}/>
            <StarSlider  starValue={2} id={id} rating={currentRating} change={changeRating}/>
            <StarSlider  starValue={3} id={id} rating={currentRating} change={changeRating}/>
            <StarSlider  starValue={4} id={id} rating={currentRating} change={changeRating}/>
            <StarSlider  starValue={5} id={id} rating={currentRating} change={changeRating}/>

        </div>
    );
}

export default SliderRating; 