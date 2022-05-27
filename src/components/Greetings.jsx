import React from 'react';

function Greetings({ lang, children }) {
  let greetings;

  switch (lang) {
    case 'de':
      greetings = 'Hallo';
      break;
    case 'fr':
      greetings = 'Bonjour';
      break;
    default:
      greetings = 'Hello';
      break;
  }

  return (
    <div className="greeting">
      {greetings} - {children}
    </div>
  );
}

export default Greetings;
