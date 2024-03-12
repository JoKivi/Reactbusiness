import React from 'react';
import { Link } from 'react-router-dom'
import '../Styles/Pages.css';

function Juhlatilat() {
    return (
        <div className="ohjelma-container">
            <div className="ohjelma-image">
                <img src="/img/klondike.webp" alt="Klondike" />
            </div>
            <div className="ohjelma-content">
                <h2>KLONDYKE</h2>
                <br />
                <p>FunFun tarjoaa loistavan industrial-tyylisen tapahtuma- ja juhlatilan Klondyketalossa Keravalla.
                Korkeakattoinen tila levittäytyy useampaan tasoon ja koostuu ravintola-alueesta sekä parvialueista. 
                Kaiken keskellä komeilee lava-alue puoliympyrän muotoisine katsomoineen. Suuret ikkunat päästävät 
                sisään luonnon valoa ja illan hämyä, luoden punatiiliseen tilaan erityisen tunnelman. FunFun sijaitsee 
                toimistorakennuksessa, eli juhlia voi huoletta pikkutunneille asti.</p>
            </div>
        </div>
    );
}

export default Juhlatilat;
