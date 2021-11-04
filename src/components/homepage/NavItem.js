import React from 'react'
// import Macbook from '../productPage/Macbook'
import Ipad from '../productPage/Ipad'
import Iphone from '../productPage/Iphone'
import Accessories from '../productPage/Accessories'

import { Link, Switch, Route } from 'react-router-dom';
import { ItemWrapper } from './NavItemStyled';

function NavItem() {
    return (
        <ItemWrapper>
            <div class="best-seller">
                <p>BEST SELLER</p>
            </div>
                <nav class="menu-bar">
                    <ul>
                        <li><Link to="/">All</Link></li>
                        <li><Link to="/mac">Mac</Link></li>
                        <li><Link to="/iphone">iPhone</Link></li>
                        <li><Link to="/ipad">iPad</Link></li>
                        <li><Link to="/accessories">Accessories</Link></li>
                    </ul>
                    
                </nav>
        </ItemWrapper>
    )
}

export default NavItem