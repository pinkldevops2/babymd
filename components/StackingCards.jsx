// components/StackingCards.jsx
import { useEffect } from 'react';

const StackingCards = () => {
  useEffect(() => {
    // Add the 'js' class to the HTML element for progressive enhancement
    document.documentElement.classList.add('js');
    // Dynamically import the stacking cards script
    const script = document.createElement('script');
    script.src = '/js/stacking-cards.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ul className="stack-cards js-stack-cards">
      <li className="stack-cards__item bg radius-lg shadow-md js-stack-cards__item">
        <div className="flex flex-center">Card One</div>
      </li>
      <li className="stack-cards__item bg radius-lg shadow-md js-stack-cards__item">
        <div className="flex flex-center">Card Two</div>
      </li>
      <li className="stack-cards__item bg radius-lg shadow-md js-stack-cards__item">
        <div className="flex flex-center">Card Three</div>
      </li>
    </ul>
  );
};

export default StackingCards;