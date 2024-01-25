import React from 'react';
import './Pages.css';

function DJKaraoke() {
    return (
        <><div className="ohjelma-container">
            <div className="ohjelma-image">
                <img src="/img/DJ.webp" alt="DJ" />
            </div>
            <div className="ohjelma-content">
                <h2>DJ-PALVELUT</h2>
                <br />
                <p> Kauttamme dj-palvelut ja huippu tiskijukat ravintolaanne ja erityistilaisuuksiin.
                    Soittajamme ovat kokeneita ja hallitsevat eri musiikkigenret. Teemme työmme asiakaslähtöisesti,
                    asiakas ensin ja asiakkaille. Se takaa viihtyisyyden, illan onnistumisen ja ravintolan
                    menestyksen.</p>
                <br />
                <p><strong>Konseptimme on seuraava:</strong></p>
                <ul>
                    <li>Soittajat ovat kokeneita, osaavat asiakaspalvelun, ottavat vastaan toiveita ja myös
                        soittavat ne.
                    </li>
                    <li>Tiskijukkamme hallitsevat juontamisen ja mikrofonin käytön.</li>
                    <li>Asiakaspalvelu on tärkeintä, asiakkaat ovat tärkeitä. Panostamme viihtyisyyteen ja
                        asiakaspalveluun.
                    </li>
                    <li>Toivemusiikki otetaan vastaan ja toivebiisit myös soitetaan.</li>
                    <li>Palvelua kehitetään yhdessä ravintolan kanssa, säännölliset palaverit onnistumisista ja
                        asioista, jotka ehkä vaativat paneutumista ja yhdessä kehittämistä.</li>
                    <li>Sitoudumme menestymään yhdessä.</li>
                </ul>
                <br />
            </div>

        </div><div className="ohjelma-container">
                <div className="ohjelma-image">
                    <img src="/img/karaoke.webp" alt="Karaoke" />
                </div>
                <div className="ohjelma-content">
                    <h2>KARAOKE-PALVELUT</h2>
                    <br />
                    <p> Kauttamme karaokepalvelut ja huippu karaokevetäjät ravintolaanne ja erityistilaisuuksiin.
                        Karaokevetäjämme ovat kokeneita. Teemme työmme asiakaslähtöisesti, asiakas ensin ja
                        asiakkaille. Se takaa viihtyisyyden, illan onnistumisen ja ravintolan menestyksen.</p>
                    <br />
                    <p><strong>Konseptimme on seuraava:</strong></p>
                    <ul>
                        <li> Karaokevetäjät ovat kokeneita, osaavat asiakaspalvelun.</li>
                        <li> Karaokevetäjämme hallitsevat juontamisen ja mikrofonin käytön.</li>
                        <li>Asiakaspalvelu on tärkeintä, asiakkaat ovat tärkeitä. Panostamme viihtyisyyteen ja
                            asiakaspalveluun.
                        </li>
                        <li>Palvelua kehitetään yhdessä ravintolan kanssa, säännölliset palaverit onnistumisista ja
                            asioista, jotka vaativat paneutumista ja yhdessä kehittämistä.</li>
                        <li>Sitoudumme menestymään yhdessä.</li>
                    </ul>
                </div>
            </div></>
    );
}

export default DJKaraoke;
