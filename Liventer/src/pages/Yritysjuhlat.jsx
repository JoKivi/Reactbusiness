import React from 'react';
import '../Styles/Pages.css';

function Yritysjuhlat() {
    return (
        <div className="ohjelma-container">
            <div className="ohjelma-image">
                <img src="/img/yritys.webp" alt="Yritysjuhlat" />
            </div>
            <div className="ohjelma-content">
                <h2>YRITYSJUHLAT</h2>
                <br />
                <p>Teemme parinkymmenen vuoden kokemuksella ja ammattitaidolla yritystilaisuuksia ja yritysjuhlia vuoden
                    ympäri. Valikoimaamme kuuluvat pikkujoulut, vuosijuhlat, yritysten kesätapahtumat ja
                    virkistyspäivät.
                    Tarjoamme tilaisuuksiin ammattimaisen tunnelma- ja efekti -valaistuksen, vuokraamme videotykkiä ja
                    led-seinää, lava - ja strussirakenteita, luomme puhe- ja taustaäänen toiston. Ja teemme asiakkaan
                    toiveiden mukaisesti myös discomaisen bile-illan-musiikin tilaajan maun mukaan.
                </p>
                <br />
                <ul>
                    <li>Pikkujoulut</li>
                    <li>Vuosijuhlat</li>
                    <li>Kesätapahtumat</li>
                    <li>Virkistyspäivät</li>
                    <li>Neuvottelutilaisuudet</li>
                </ul>

                <br />
                <p><strong>KALUSTO</strong></p>
                <br />
                <ul>
                    <li>Kongressi-tekniikka. Videotykit, led-seinää, strusseja ja äänentoisto ja äänenohjaus.
                        Mikrofonit, langattomat ja langalliset.</li>
                    <li>Valaistus, tunnelmavalaistus ja efektivalo. Pikkujouluihin teemme discomaisen valaistuksen
                        asiakkaan toiveiden mukaisesti.</li>
                    <li>Äänentoisto tapahtuman luonteen mukaisesti. Äänentoisto puheisiin, taustaääneen ja musiikin
                        soittamiseen ja tietenkin discomaiseen bile-ääneen.</li>
                </ul>
                <br />
                <p><strong>HENKILÖSTÖ</strong>
                    <br /><br />
                    Näitä tapahtumia tekevät ammattilaiset vuosien, jopa vuosikymmenten ja tuhansien onnistuneiden
                    tapahtumien kokemuksella.</p>
            </div>
        </div>
    );
}

export default Yritysjuhlat;
