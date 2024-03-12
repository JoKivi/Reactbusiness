import React from 'react';
import '../Styles/Pages.css';

function Yksityistilaisuudet() {
  return (
    <div className="ohjelma-container">
      <div className="ohjelma-image">
        <img src="/img/yksityis.webp" alt="Yksityistilaisuudet" />
      </div>
      <div className="ohjelma-content">
        <h2>YKSITYISTILAISUUDET</h2>
        <br />
        <p>Teemme yli kymmenen vuoden kokemuksella ja ammattitaidolla yksityistilaisuuksia, sekä
          yritysjuhlia vuodenajasta riippumatta. Laajasta valikoimastamme löytyy esitystekniikkaa,
          esiintyjiä, sekä tekijät tilaisuuteen kuin tilaisuuteen. Tekniikkamme soveltuu kooltaan ja
          luonteeltaan erilaisiin tapahtumiin; marsun nimipäivistä tuhansien ihmisten
          juhlatilaisuuksiin. Tapahtumien tekijät ovat ammattilaisia, joilla on takana vuosien tai jopa
          vuosikymmenien kokemus alalta ja takana satoja onnistuneita tapahtumia.
        </p>
        <br />
        <p>Esimerkkejä tapahtumista joita, järjestämme vuosittain.</p>
        <br />
        <ul>
          <li>Pikkujoulut</li>
          <li>Vuosijuhlat</li>
          <li>Virkistyspäivät</li>
          <li>Kesätapahtumat</li>
          <li>Syntymäpäivät</li>
        </ul>

        <br />
        <p>HUOM! Myös erikoisohjelmamme ovat tilattavissa yksityistilaisuuksiin, sekä yritysjuhliin.
          Lisätietoja valikoimastamme löytyy Erikoisohjelmat -välilehdeltä.</p>
      </div>
    </div>
  );
}

export default Yksityistilaisuudet;
