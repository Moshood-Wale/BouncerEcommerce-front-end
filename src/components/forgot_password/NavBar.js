import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className="Logo">
            <Link to="/">  <img src="./logo_alcxme.svg" alt="" /></Link>
        </div>
    )
}

export default NavBar;