import React from 'react';
import { Link } from 'react-router-dom'
import '../Styles/Pages.css';

function FratParty() {
    return (
        <div className="ohjelma-container">
            <div className="ohjelma-image">
                <img src="/img/fratparty.webp" alt="Frat Party" />
            </div>
            <div className="ohjelma-content">
                <h2>FRAT PARTY</h2>
                <br />
                <p>Koska koemme että Suomessa bilekulttuuri on erittäin laimeeta ja yksitoikkoista, päätimme
                    tuoda tämän konseptin amerikan luvatusta maasta sekoittamaan hieman pakkaa. Teemana
                    toimii siis TV-sarjoista ja elokuvista tutut jenkkien yliopistobileet. Vauhtia ja vaarallisia
                    tilanteita täynnä oleva ilta tarjoaa jokaiselle jotakin.<br /><br />
                    Illan keskeisenä tavoitteena on luoda frat-henkinen ja rento ilmapiiri, jossa jokainen voi pitää
                    hauskaa haluamallaan tavalla. Tapahtumapaikka verhoillaan teeman mukaiseen ulkoasuun
                    erilaisilla kylteillä, bannereilla, sekä muilla koristeilla ja härpäkkeillä. Mutta mitkä olisivatkaan
                    frat-bileet ilman vanhoja kunnon juomapelejä. Ei hätää, sillä tämän osalta olemme pitäneet
                    huolen siitä, että juhlakansalle löytyy laaja valikoima toinen toistaan hauskempia pelejä ja
                    aktiviteetteja. Tarjolla on mm. erilaisia korttipelejä, klassikoiksi muodostuneet flip cup ja beer
                    pong, sekä tehtävälista jonka suorittaneet palkitaan. Hulluimmilla ja uhkarohkeilla on myös
                    mahdollisuus kokeilla fear pongia.<br /><br />
                    Musiikista vastaa kaksi ammattitaitoista DJ:tä jotka pitävät bileet kuin American Pie:ssa
                    (ilman sitä omenapiirakkaa). Teeman kuuluvasti musiikki on sekoitus TV:stä tuttuja
                    2000-luvun bileklassikoita joihin DJ:t luovat omat hauskat twistinsä. Tämä aikaan saatu
                    show takaa sen, että juhlakansalla on hauskaa ja meno tanssilattialla pysyy katossa illan
                    pikkutunneille asti.
                    <br /><br />
                    <strong>- We All Deserve an Alcoholiday</strong></p>
            </div>
        </div>
    );
}

export default FratParty;
