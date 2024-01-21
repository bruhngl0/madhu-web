import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import '../styles/header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                {/* Add your logo here */}
                <img src="/Logo/minds.png" alt="Logo" />
            </div>
            <nav className="nav">
                <NavLink smooth to="#home" activeClassName="selected">Home</NavLink>
                <NavLink smooth to="#about" activeClassName="selected">About</NavLink>
                <NavLink smooth to="#portfolio" activeClassName="selected">Portfolio</NavLink>
                <NavLink smooth to="#blogs" activeClassName="selected">Blogs</NavLink>
                <NavLink smooth to="#contacts" activeClassName="selected">Contacts</NavLink>
            </nav>
        </header>
    );
}

export default Header;

      
