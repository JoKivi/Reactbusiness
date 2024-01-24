import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div>
                        <strong>Postiosoite:</strong> Seunalantie 9 A 7, 04200 KERAVA
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
                        <h3>Yhteistyökumppanit</h3><img src="/img/GM_productions.webp" alt="GM Logo" />

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
