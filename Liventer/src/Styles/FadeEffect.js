import { useEffect } from 'react';

const FadeEffect = (textRef) => {
     useEffect(() => {
          const checkIfInView = () => {
              const element = textRef.current;
              if (!element) return;
     
              const elementTop = element.getBoundingClientRect().top;
     
              if (window.scrollY > 0) {
                  if (elementTop < window.innerHeight && elementTop >= -100) {
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