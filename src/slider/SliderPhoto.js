import SliderRating from './SliderRating';

const SliderPhoto = ({ id, index, currentRating, changeRating}) => {

    //console.log(currentRating);
    //console.log(id);
    //console.log(index);

    

    return (
        <div className="slider-photo">
            <img src={`../images/${id}.JPG`}/> 
            <SliderRating id={id} 
                          index={index} 
                          currentRating={currentRating} 
                          changeRating={changeRating}/>
        </div>
    );

}

export default SliderPhoto;