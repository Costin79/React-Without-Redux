import Star from './Star';
import { useState } from 'react';

const StarRating = ({ photoId, photoRating, changeRating }) => {

    
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="stars">
            {
                stars.map((star, i) => (
                    <Star 
                        key={i} 
                        starId={i+1}
                        photoRating={photoRating}
                        onClick={() => {
                                        photoRating=i+1; 
                                        changeRating(photoId, photoRating);
                                    }
                                }
                    />
                ))
            }
        </div>
    );
}

export default StarRating;
