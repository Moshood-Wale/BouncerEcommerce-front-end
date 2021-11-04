import React from 'react'
import { Link } from 'react-router-dom';
import { NavBarWrapper  } from './NavBarStyled';

function NavBarPage() {
    return (
        <NavBarWrapper>
            <nav>
                <div>
                    <Link to="/">HOME</Link>
                    <div className="right-menu">
                        <Link to="/">STORE</Link>
                        <div className="dropdown-menu">
                            <div>
                                <div class="stage-one">
                                    <h4>Category</h4>
                                    <Link to="/">AirPort & Wireless</Link> <br />
                                    <Link to="/">AppleCare</Link> <br />
                                    <Link to="/">Bags, Shells & Sleeves</Link> <br />
                                    <Link to="/">Business & Security</Link> <br />
                                    <Link to="/">Cables & Docks</Link>
                                </div>
                                <div class="stage-two">
                                    <h4>Category</h4>
                                    <Link to="/">Camera & Video</Link><br />
                                    <Link to="/">Car & Travel</Link> <br />
                                    <Link to="/">Cases & Films</Link>
                                </div>
                                <div class="stage-three">
                                    <h4>Category</h4>
                                    <Link to="/">Charging Devices</Link> <br />
                                    <Link to="/">Connected Home</Link> <br />
                                    <Link to="/">Device Care</Link> <br />
                                    <Link to="/">Display & Graphic</Link> <br />
                                    <Link to="/">Fitness & Sport</Link>
                                </div>
                                <div class="stage-four"><h4>Category</h4>
                                    <Link to="/">Headphones</Link> <br />
                                    <Link to="/">HealhKit</Link></div>
                                <div class="stage-five">
                                    <h4>Category</h4>
                                    <Link to="/">Mics & Keyboards</Link> <br />
                                    <Link to="/">Music Creation</Link> <br />
                                    <Link to="/">Networking & Server</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Link to="/iphone">IPHONE</Link>
                    <Link to="/ipad">IPAD</Link>
                    <Link to="/mac">MACBOOK</Link>
                    <Link to="/accessories">ACCESSORIES</Link>
                
                </div>
            </nav> 
        </NavBarWrapper>
    )
}

export default NavBarPage;