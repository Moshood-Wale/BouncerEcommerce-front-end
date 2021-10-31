import { Link } from 'react-router-dom';

function NavBar()  {
    return (
        <div className="Logo" data-testid="logo">
            <Link to="/home"><img src="./logo_alcxme.svg" alt="" /></Link>
        </div>
    )
}

export default NavBar;