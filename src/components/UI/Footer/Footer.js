import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <span className="text=muted">Developed by <a href="https://www.linkedin.com/in/fernandokawanoprogramador/" target="blank">{props.autor}</a></span>
            </div>
        </footer>
    );
}

export default Footer;