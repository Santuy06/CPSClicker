import React from 'react';
import './Footer.css';

const Footer = ({ onOpenPrivacy, onOpenTerms, onOpenAbout }) => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h4>About CPS Test</h4>
                    <p>The ultimate tool to measure and improve your clicking speed. Built for gamers and professionals alike.</p>
                </div>
                <div className="footer-links">
                    <button onClick={onOpenAbout}>About Us</button>
                    <button onClick={onOpenPrivacy}>Privacy Policy</button>
                    <button onClick={onOpenTerms}>Terms of Service</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CPS Test. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
