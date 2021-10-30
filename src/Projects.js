import React from 'react'
import Navbar from './Navbar'
import ContentBasedRecomender from './ContentBasedRecomender';


const Projects = ({photos, changeRating}) => {
    const title = 'Projects';

    return (
        <div>
            <Navbar title={title}/>
            <ContentBasedRecomender  photos={photos} changeRating={changeRating}/>
        </div>
    )
}

export default Projects
