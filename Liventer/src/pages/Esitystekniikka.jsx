import React from 'react';
import { Link } from 'react-router-dom'
import '../Styles/Pages.css';

function Esitystekniikka() {
    return (
        <div className="ohjelma-container">
            <div className="ohjelma-image">
                <img src="/img/esitystekniikka.webp" alt="Esitystekniikka" />
            </div>
            <div className="ohjelma-content">
                <h2>ESITYSTEKNIIKKA</h2>
                <br />
                <p>Toteutamme kokonaisvaltaisen tekniikan ja rakenteet tapahtumaasi sisä- ja ulkotiloihin.
                Saat siis esiintymislavan, strussirakenteet , valotekniikan, äänitekniikan sekä kuva pintaan
                tarpeesi mukaan. Ammattitaitoinen henkilökunta palvelee juuri sinun tarpeiden mukaan.
                Saat siis avaimet käteen periaatteella kaiken mitä tapahtumasi vaatii perhejuhlista
                festivaaleihin.</p>
            </div>
        </div>
    );
}

export default Esitystekniikka;
