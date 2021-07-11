import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {

    const [click, setClick] = React.useState(false)

    const handlerClick = () => setClick(!click);
    const mobileClick = () => setClick(false);

    return (
        <>
            <nav className="nav">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/" className="logo-item" exact><i className="fas fa-rocket"></i> ULTRA</Link>
                    </div>
                    <ul className={click ? "nav_list active" : "nav_list"}>
                        <li><NavLink activeClassName="active_item" onClick={mobileClick} className="item" to="/" exact>Home</NavLink></li>
                        <li><NavLink activeClassName="active_item" onClick={mobileClick} className="item" to="/Blog">Blog</NavLink></li>
                        <li><NavLink activeClassName="active_item" onClick={mobileClick} className="item" to="/Services">Services</NavLink></li>
                        <li><NavLink activeClassName="active_item active_bg" onClick={mobileClick} className="item bg" to="/SignIn">SIGN IN</NavLink></li>
                    </ul>
                    <div className="nav_bar" onClick={handlerClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>   
        </>
    )
}

export default Navbar;
