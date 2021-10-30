
const Star = ({ starId, photoRating, onClick }) => {

    let styleClass = "star-empty";
    if(photoRating >= starId){
        styleClass = "star-filled";
    }

    return (
        <span className={styleClass} onClick={onClick}>
            &#10038;
        </span>
    )
}

export default Star;
