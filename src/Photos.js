import Photo from './Photo';


const Photos = ( {photos, changeRating, handleClick}) => {
    return (
        <div className="photo-gallery">
            {
                photos.map((photo, index) => (
                    <Photo 
                            key={photo.id} 
                            index={index}
                            id={photo.id} 
                            rating={photo.rating} 
                            changeRating={changeRating}
                            handleClick={handleClick}
                    
                    />
                ))
            }
        </div>
    );
}

export default Photos;
