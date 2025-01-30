import React from 'react';
import { Link } from 'react-router-dom'
import '../Styles/Pages.css';

function Erikoisohjelmat() {
    return (
        <div className="ohjelma-container">
            <div className="ohjelma-image">
                <img src="/img/erikois.webp" alt="Erikoisohjelmat" />
            </div>
            <div className="ohjelma-content">
                <h2>ERIKOISOHJELMAT</h2>
                <br />
                <p>Kauttamme erikoisohjelmat ravintolaanne ja erityistilaisuuksiin.</p>
                <br />
                <p><strong>YLEISTÄ ERIKOISOHJELMISTAMME</strong></p>
                <br />
                <p>Soittajamme ovat kokeneita ja hallitsevat eri musiikkigenret. Teemme työmme asiakaslähtöisesti,
                    asiakas ensin ja asiakkaille. Se takaa viihtyisyyden, illan onnistumisen ja ravintolan menestyksen.
                </p>
                <br />
                <p><strong>Konseptimme on seuraava:</strong></p>
                <ul>
                    <li>Soittajat ovat kokeneita, osaavat asiakaspalvelun, ottavat vastaan toiveita ja myös soittavat
                        ne.</li>
                    <li>Juontaja-tiskijukkamme hallitsevat juontamisen ja mikrofonin käytön.</li>
                    <li>Asiakaspalvelu on tärkeintä, asiakkaat ovat tärkeitä. Panostamme viihtyisyyteen ja
                        asiakaspalveluun.</li>
                    <li>Toivemusiikki otetaan vastaan ja toivebiisit myös soitetaan, tähän pyritään myös erikoisilloissa
                        ja teema-bileissä.</li>
                    <li>Palvelua kehitetään yhdessä ravintolan kanssa, säännölliset palaverit onnistumisista ja
                        asioista, jotka ehkä vaativat paneutumista ja yhdessä kehittämistä.</li>
                    <li>Sitoudumme menestymään yhdessä.</li>
                </ul>
                <br />
                <p><strong>ERIKOISOHJELMIA</strong></p>
                <ul>
                 
                    <br />
                    <li><Link to="/Glow" ><strong>Glow</strong></Link><br />
                        <p></p>
                    </li>
       
                    <br />
                    <li><strong>Ysäri-Pois</strong><br />
                        <p>Tämä DJ-kaksikko takaa sen, että musiikin siirtyminen tämän vuosituhannen puolelle oli yksi
                            ihmiskunnan suurimmista virheistä. Kyseinen ilta on paluu aikaan jolloin kaikki oli vielä
                            paremmin, sekä omistettu kaikille niille joiden nostalgiajalkaa vipattaa vimmatusti.
                            Tapahtuma pitää sisällään juonnettuja leikkimielisiä kilpailuja, sekä kuumaa reivaamista
                            parhaiden ysärihittien tahtiin.</p>
                    </li>
           
                    <br />
                    <li><strong>Video-disco</strong><br />
                        <p>Yksi aliarvostetuimmista bilekonsepteista. Video-disco tarjoaa äänen lisäksi myös
                            kuvamateriaalia yhdeltä tai useammalta screeniltä. Perusideana siis se, että DJ soittaa
                            musiikkia kuten normaalilla keikalla ja samaan aikaan taustalla olevilla screeneillä
                            pyörii soitettavien kappaleiden musiikkivideot. Pakettiin kuuluu myös kohde- ja
                            efektivalo, sekä savukone.
                            Musiikki on tässä konseptissa mahdollisuus valita 90-luvulta tähän päivään asti. Tähän
                            liittyen meillä on tarjolla kaksi eri teemailtaa nimeltään FRESH ja THROWBACK. Kuten
                            nimestä voi päätellä FRESH tarjoaa iltaan tämän päivän kuumimmat ja tuoreimmat
                            hitit, kun taas THROWBACK vie juhlakansan takaisin 90-luvun karkeloihin. Pystymme
                            myös tarvittaessa rajaamaan musiikin asiakkaan toiveiden mukaan</p>
                    </li>
                
                 </ul>
            </div>
        </div>
    );
}

export default Erikoisohjelmat;
