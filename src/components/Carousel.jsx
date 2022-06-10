import { useState } from 'react';

const Carousel = ({ images }) => {
  const [picNum, setPicNum] = useState(0);

  let moveRight = () => {
    console.log(picNum);
    if (picNum === images.length - 1) {
      setPicNum(0);
    } else {
      setPicNum(picNum + 1);
    }
  };

  let moveLeft = () => {
    console.log(picNum);
    if (picNum <= 0) {
      setPicNum(images.length - 1);
    } else {
      setPicNum(picNum - 1);
    }
  };

  return (
    <>
      <div>
        <img src={images[picNum]} width="300px" alt="imagen"></img>
      </div>

      <div>
        <button onClick={moveLeft}>Left</button>
        <button onClick={moveRight}>Right</button>
      </div>
    </>
  );
};

export default Carousel;
