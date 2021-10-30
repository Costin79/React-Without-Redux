import { Link } from 'react-router-dom';

const Navbar = ({title}) => {
    return (
        <div>
            <nav className="navbar">
                <h1>{title}</h1>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/Projects">Projects</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
