const StarSlider = ({starValue, id, rating, change}) => {


   const handleClick = () => {
        change(id, starValue);
   }

   let style = "star-empty-slider";
   if(starValue <= rating)
   {
       style = "star-filled-slider"
   }

    return (
        <span className={style} onClick={handleClick}>
            &#9733;
        </span>
    )
}

export default StarSlider;
