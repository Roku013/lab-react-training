import { useState } from 'react';

const Dice = () => {
  let randomNum = Math.floor(Math.random() * 5 + 1);

  const [dice, setDice] = useState(`dice${randomNum}.png`);

  const throwDice = () => {
    setDice('dice-empty.png');
    setTimeout(() => {
      setDice(`dice${randomNum}.png`);
    }, 1000);
  };

  return (
    <div>
      <img width="200px" src={dice} alt="dice pic" onClick={throwDice}></img>
    </div>
  );
};

export default Dice;
