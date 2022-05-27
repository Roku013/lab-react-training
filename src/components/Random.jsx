import React from 'react';

function Random({ min, max }) {
  const num = Math.round(Math.random() * (max - min) + min);
  return (
    <div className="random">
      Random value between {min} and {max} is {num}
    </div>
  );
}

export default Random;
