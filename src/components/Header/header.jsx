import React from "react";
import {NavLink} from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../assets/logo.svg";

const Header = () =>
(
    <header className="header">
        <div className="header__logo"><ReactLogo /></div>
        <nav className="header__nav">
            <NavLink className="header__nav--link" to="/">Accueil</NavLink>
            <NavLink className="header__nav--link" to="/about">A Propos</NavLink>
        </nav>
    </header>
);

export default Header;