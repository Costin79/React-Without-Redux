import React from 'react'
import { useState } from 'react';
import Photos from './Photos';
import SendButton from './SendButton';
import PhotoSlider from './slider/PhotoSlider';

const ContentBasedRecomender = ({photos, changeRating}) => {

   // State to control PhotoSlider's display.
   const [displaySlider, setDisplaySlider] = useState({clickedIndex:0, display:"slider-closed"});

   // A flag state that ensures a photo was clicked before displaying the PhotoSlider.
   const [clicked, setClicked] = useState(false);

   // The function that reacts to the onClick event in the Photo component.
   const handlePhotoClick = (index) => {
       setDisplaySlider({clickedIndex: index, display:"slider"});
       setClicked(true);
   }

   // The function that reacts on a click on any of the black in the PhotoSlider and closes 
   // the photo slider.
   const closeSlider = (e) => {
       if(e.target.classList.contains("slider") || e.target.classList.contains("close-slider"))
       {
           setDisplaySlider({clickedIndex: 0, display: "slider-closed"});
           setClicked(false);
       }
   } 
   

    return (
        <div className="content-rec">
           <h3>Content Based Recommender System</h3> 
           <p> Please rate the photos.</p>
    
               <Photos photos={photos} changeRating={changeRating} handleClick={handlePhotoClick}/>

              {clicked && (<PhotoSlider photos={photos} 
                            changeRating={changeRating}
                            displaySlider={displaySlider}
                            closeSlider={closeSlider}/>)}

               <SendButton />
        </div>
    )
}

export default ContentBasedRecomender;
