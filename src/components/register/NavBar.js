import { Link } from 'react-router-dom';
import { LogoBanner } from './style'


function NavBar()  {
    return (
        <LogoBanner className="Logo" data-testid="logo">
            <Link  to=""><img src="./logo_alcxme.svg" alt="" /></Link>
        </LogoBanner>
    )
}

export default NavBar;
