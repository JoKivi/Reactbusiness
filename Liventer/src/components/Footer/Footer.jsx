import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div>
                        <strong>Postiosoite:</strong> Saviontie 10 A 7, 04260 KERAVA
                    </div>
                    <div>
                        <strong>Käyntiosoite:</strong> Kuusiaidankuja 2, Halli 14, 04260 KERAVA
                    </div>
                    <div>
                        Y-tunnus: 2905019-1
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div><strong>Liventer Group</strong> kuuluu <strong>GM Productions Oy</strong>:n alaisuuteen</div>
                <div>&copy; 2024 Liventer Group Oy</div>
                <div>Designed by <strong>Liventer Group Oy</strong></div>
            </div>
        </footer>
    );
}

export default Footer;
