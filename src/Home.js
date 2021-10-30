
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="home-links">
                <Link to="/Projects">Projects</Link>
            </div>
        </div>
    );
}

export default Home;
