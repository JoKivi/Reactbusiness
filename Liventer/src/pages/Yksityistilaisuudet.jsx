import React from 'react';
import './Pages.css';

function Yksityistilaisuudet() {
  return (
    <div className="ohjelma-container">
      <div className="ohjelma-image">
        <img src="/img/yksityis.webp" alt="Yksityistilaisuudet" />
      </div>
      <div className="ohjelma-content">
        <h2>YKSITYISTILAISUUDET</h2>
        <br />
        <p> Teemme parinkymmenen vuoden kokemuksella ja ammattitaidolla yksityistilaisuuksia vuoden ympäri.
          Valikoimaamme kuuluvat pikkujoulut, vuosijuhlat, syntymäpäivät, kesätapahtumat ja virkistyspäivät.
          Tarjoamme tilaisuuksiin ammattimaisen tunnelma- ja efekti -valaistuksen, luomme puhe -ja taustaäänen
          toiston. Ja teemme asiakkaan toiveiden mukaisesti myös discomaisen bile-illan-musiikki tilaajan maun
          mukaan.</p>
          <br />
        <ul>
          <li>Pikkujoulut</li>
          <li>Syntymäpäivät</li>
          <li>Vuosijuhlat</li>
          <li>Kesätapahtumat</li>
          <li>Virkistyspäivät</li>
        </ul>

        <br />
        <p><strong>KALUSTO</strong></p>
        <br />
        <ul>
          <li>Äänentoisto ja äänenohjaus. Mikrofonit, langattomat ja langalliset.</li>
          <li>Valaistus, tunnelmavalaistus ja efektivalo. Synttäreihin yms. teemme discomaisen valaistuksen
            asiakkaan toiveiden mukaisesti.</li>
          <li>Äänentoisto tapahtuman luonteen mukaisesti. Äänentoisto puheisiin, taustaääneen ja musiikin
            soittamiseen ja tietenkin discomaisen bile-ääneen.</li>
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

export default Yksityistilaisuudet;
