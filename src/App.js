import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import Projects from './Projects';


function App() {

  const[photos, setPhotoRating] = useState([
    {id:'0157', rating: 1}, {id:'0262', rating:1}, {id:'0568', rating:1}
]);

// The changeRating function. It runs every time the user changes a rating.
// Fired by the onClick event in StarRating. Uses the photos' hook setRating.
const changeRating = (id, photoRating) => {
    setPhotoRating(photos.map((photo) => photo.id === id ? {...photo, rating: photoRating} : photo)); 
}

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Projects">
            <Projects photos={photos} changeRating={changeRating}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
