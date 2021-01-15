import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';


class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="icon-container">
                    <a className="icon" href="https://github.com/tnizam/Animetsy/">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/tahminanizam/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="icon" href="https://tnizam.github.io/">
                        <i className="fas fa-user-circle"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;