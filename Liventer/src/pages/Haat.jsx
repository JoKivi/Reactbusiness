import React from 'react';
import './Haat.css'; // Oletetaan, että sinulla on CSS-tiedosto nimeltä 'haat.css'

function Haat() {
  return (
    <div className="haat-container">
      <div className="haat-image">
        <img src="img/Djsmiley.jpg" alt="DJ Smiley" />
      </div>
      <div className="haat-content">
        <h2>HÄÄJUHLAT</h2>
        <p>Tarjoamme yksityiskohtaisesti räätälöityjä hää-dj -palveluita koko Suomen alueella. Meidän
                    hääsoittajat toimivat Kokkolasta, Vaasasta, Tampereelta, Rovaniemelta ja pääkaupunkiseudulta käsin.
                    Toiminta-alueena koko Suomi. Jokaisella hääsoittajalla on kokemusta musiikkitapahtumien tuotannosta
                    ja häiden teosta useamman vuoden ja satojen onnistuneiden tapahtumien osalta.
                </p>
                <p><strong><em>HÄISSÄ TEEMME</em> asiakkaan toiveiden yhteisen suunnittelun pohjalta:
                    </strong></p>
                <ul>
                    <li>Avustamme puheiden pidossa, langattomat mikrofonit asiakkaan käytössä. Opastamme ja autamme.
                    </li>
                    <li>Juonnamme tarvittaessa koko tilaisuuden</li>
                    <li>Taustamusiikki asiakkaan toivomusten mukaisesti räätälöitynä</li>
                    <li>Illan bilemusiikki asiakkaan toivomusten mukaisesti. Tapamme on käydä asiakkaan kanssa hyvissä
                        ajoin
                        etukäteen asiakkaan toivomat artistit ja kappaleet läpi, jotka soitamme illan aikana. Myös
                        toiveet
                        illan aikana toteutetaan.</li>
                    <li>Tarvittaessa soitamme myös häätanssi-biisin asiakkaan toiveen mukaisesti.</li>
                </ul>
                <br />
                <p><strong>MUSIIKKI JA VALO -KALUSTO HÄIHIN</strong></p>
                <ul>
                    <li>Äänentoistolaitteet, aktiivi yläpäät. Lisäksi tarvittaessa bassoelementti</li>
                    <li>Valaistus, kohdevaloa ja efektivaloa. Näillä luodaan tunnelmaa ja illan bile-musiikin aikana
                        discomainen tunnelma ja viihtyisyys.</li>
                    <li>Tarvittaessa savukone-vahvistaa valaistuefektiä.</li>
                    <li>Langaton ja langallinen mikrofoni</li>
                    <li>soittolaitteet, mikseri, tietokone yms.</li>
                    <li>Lisäoptiona lisää näyttävyyttä valaistukseen ja tehoa ääneen asiakkaan toiveiden ja paikan
                        mahdollisuuksien mukaan.</li>
                </ul>
                <br />
                <p><strong>LISÄOPTIOT</strong></p>
                <ul>
                    <li>Teemme yhteistyötä ammattimaisen hääkuljetukseen kanssa. Yhteistyökumppanilla käytössä kaksi
                        kappaletta S-sarjan näyttävää Mercedes Benz -henkilöautoa. Upeita, kauniita ja arvokkaita.</li>
                    <li>Teemme yhteistyötä myös ravintola-alan ammattilasten kanssa. Kauttamme yksityistilaan
                        ammattimaiset baarimikot.</li>
                </ul>
      </div>
    </div>
  );
}

export default Haat;
