import React from 'react';
import { Link } from 'react-router-dom';

const FooterBanner = () => {
    return (
        <div>
            <div className="footer-blank"></div>
            <footer>
                <img src={window.bannerurl} className="footer-banner" />
            </footer>
        </div>
    )
}

export default FooterBanner;