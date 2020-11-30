import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer-blank"></div>
            <footer className="footer">
                <img src={window.bannerurl} className="footer-banner" />
            </footer>
        </div>
    )
}

export default Footer;