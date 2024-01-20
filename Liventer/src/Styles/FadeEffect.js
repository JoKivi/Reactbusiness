import { useEffect } from 'react';

const FadeEffect = (textRef) => {
     useEffect(() => {
          const checkIfInView = () => {
              const element = textRef.current;
              if (!element) return;
     
              const elementTop = element.getBoundingClientRect().top;
     
              // Tarkista onko sivua vieritetty vähintään 20px
              if (window.scrollY > 0) {
                  if (elementTop < window.innerHeight && elementTop >= -50) {
                      element.classList.add('animate');
                  } else {
                      element.classList.remove('animate');
                  }
              }
          };
     
          window.addEventListener('scroll', checkIfInView);
     
          checkIfInView();
     
          return () => window.removeEventListener('scroll', checkIfInView);
      }, []);
}


export default FadeEffect