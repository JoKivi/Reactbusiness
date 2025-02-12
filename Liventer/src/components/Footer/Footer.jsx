import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div>
                        <strong>Postiosoite:</strong> Visatie 24 A 6, 04260 KERAVA
                    </div>
                    <div>
                        <strong>Käyntiosoite:</strong> Kuusiaidankuja 2, Halli 14, 04260 KERAVA
                    </div>
                    <div>
                        Y-tunnus: 3235195-6
                    </div>
                </div>
                <div className="footer-section responsive-section">
                    <div>
                        <img src="/img/GM_productions.webp" alt="GM Logo" />

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div>&copy; 2025 GM Productions Oy</div>
                <div>Designed by <strong>GM Productions Oy</strong></div>
            </div>
        </footer>
    );
}

export default Footer;
