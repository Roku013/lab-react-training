import { useState } from 'react';

const LikeButton = () => {
  const availableColors = [
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
  ];
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const color = availableColors[count % availableColors.length];

  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {count} Like{count !== 1 ? 's' : ''}
    </button>
  );
};
export default LikeButton;
