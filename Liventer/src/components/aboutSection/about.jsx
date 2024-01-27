import React, { useRef } from 'react';
import FadeEffect from '../../Styles/FadeEffect';
import './about.css'

function About() {
     const aboutTextRef = useRef(null);
     FadeEffect(aboutTextRef);
     
     return (
          <div className='about-section' name='about'>
               <div className="about-text-section fade-zoom-in" ref={aboutTextRef}>
                    <h2>Onnistuneiden tapahtumien tekijä!</h2>
                    <p>Vuonna 2013 perustettu Liventer Group Oy on monipuolinen tapahtumatuotantoyhtiö, joka järjestää, konsultoi, tuottaa ja toteuttaa erilaisia tapahtumia ympäri Suomea. Järjestämme vankalla ammattitaidolla asiakkaillemme mieleenpainuvat juhlat, tapahtumat yms. Meidän kauttamme voit tilata esitystekniikan ammattilaiset, sekä sopivan esiintyjän. Voimme siis räätälöidä teille kokonaisvaltaisen ohjelmapaketin toiveittenne mukaisesti</p>
               </div>
          </div>
     )
}

export default About;