import React from 'react';
import '../Styles/Pages.css';

function DJKaraoke() {
    return (
        <>
            <div className="ohjelma-container">
                <div className="ohjelma-image">
                    <img src="/img/lotta.webp" alt="Lotta Skog Band" />
                </div>
                <div className="ohjelma-content">
                    <h2>LOTTA SKOG BAND</h2>
                    <br />
                    <p>Lotta Skog Band on kovan luokan energinen bilebändi, joka on vastannut satojen hääparien,
                    yksityishenkilöiden, firmojen ja ravintoloi#en täysistä tanssilavoista ja onnistuneista
                    bileilloista jo vuosien ajan.
                    Taidokas soitto, parhaista (1960-2020-lukujen) hiteistä koostuva monipuolinen ohjelmisto sekä
                    Lotan mukaansa tempaava esiintyminen ovat hurmanneet tuhansia kuulijoita ympäri suomen ja
                    saaneet tilaajat buukkaamaan bändin yhä uudestaan ja uudestaan tilaisuuksiinsa.
                    Lotta Skog Band saa lähes poikkeuksetta aina keikoilla kiitosta monipuolisesta ohjelmistosta ja
                    huikeasta lavameiningistä.</p>
                    <br />
                    <a href="http://www.lottaskog.fi">Kotisivut</a>
                    <br />
                    <a href="https://youtu.be/1MCIgjllozM?si=m7CWHPPeCzEG_4e4">Ääninäyte livekeikalta</a>
                </div>
            </div>

            <div className="ohjelma-container">
                <div className="ohjelma-image">
                    <img src="/img/melli.webp" alt="Melli-band" />
                </div>
                <div className="ohjelma-content">
                    <h2>MELLI-BAND</h2>
                    <br />
                    <p>Melli-band koostuu pitkänlinjan muusikoista, joista useimman juuret on vankasti Suomen
                    Keravalla. Bändi soittaa hittejä laidasta laitaan ja on tunnettu viihdyttävästä, heittäytyvästä
                    ja humoristisestakin otteestaan keikoilla. Jokainen ilta on yleisön ja bändin yhteinen,
                    vuorovaikutuksellinen juhlahetki.
                    Pienempään ja intiimimpään juhlaan bändi muokkaituu tarvittaessa duoksi tai trioksi.
                    Krakat sivuun ja korkkarit kattoon!</p>
                </div>
            </div>

            <div className="ohjelma-container">
                <div className="ohjelma-image">
                    <img src="/img/chapter.webp" alt="Chapter 11" />
                </div>
                <div className="ohjelma-content">
                    <h2>CHAPTER 11</h2>
                    <br />
                    <p>Chapter 11 on huippuluokan bändi, joka soittaa hittejä omalla rouhealla tyylillään kaikissa 
                    tapahtumissa Uudellamaalla ja Helsingissä. Olemme soittaneet bilebändinä ammattimaisesti jo pitkään,
                    viihdyttäen juhlaväkeä erilaisissa yksityistilaisuuksissa, firman bileissä ja muissa tapahtumissa –
                    yökerhoja unohtamatta. Tuomme mukanamme Show’n, jota et unohda! 
                    Olemme bileiden paras bändi erityisesti sinulle, jos arvostat ammattimaista menoa, bilemusiikkia ja
                    korkeatasoista
                    tekniikkaa, tuomme mukanamme myös aina osaavan ääniteknikon jotta saundi olisi ihanteellinen tilaan
                    kuin tilaan.
                    Muokkaudumme aina tilanteen ja asiakkaan mukaan tilaisuutta kuunnellen ja kunnioittaen.  
                    Hoidamme tilaisuuden ammattitaidolla heti yhteydenpidosta palautteen vastaanottamiseen saakka.
                    Bändimme koostuu seitsemästä ammattimuusikosta, jotka tuovat tilaan kuin tilaan muhkean saundin,
                    kahden laulajan voimin energiaa ja katon räjäyttävän show’n,
                    joka ei varmasti jätä ketään kylmäksi.
                    Tuomme mukanamme myös illan juontajan, jos sille tarvetta tai mahdollisuuden käyttää
                    äänentoistoamme sekä valojamme esim. alkuillan puheita varten.</p>
                    <br />
                    Tsekkaa myös bändin instagram: <a href="https://www.instagram.com/Chapter11rocks/">Chapter11rocks</a>
                    <br />
                    sekä <a href="www.chapter11.fi">Kotisivut</a>
                </div>
            </div>
        </>
    );
}

export default DJKaraoke;
