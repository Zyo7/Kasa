import React from "react";
import {ReactComponent as ReactLogo} from "../../assets/logo.svg"

const Footer = () =>
(
    <footer className="footer">
        <ReactLogo className="footer__logo"/>
        <p className="footer__text">&copy; 2020 Kasa. All rights reserved</p>
    </footer>
);

export default Footer;