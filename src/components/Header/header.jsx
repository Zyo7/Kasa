import React from "react";
import {NavLink} from "react-router-dom";


const Header = () =>
(
    <header>
        <div><img src="#" alt="logo temporaire"/></div>
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
        </nav>
    </header>
);

export default Header;