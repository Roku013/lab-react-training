import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [glassesOff, setGlasses] = useState(img);

  const changeLook = () => setGlasses(!glassesOff);

  return (
    <div>
      <img
        alt="pic with glasses"
        onClick={changeLook}
        src={glassesOff ? img : imgClicked}
      ></img>
    </div>
  );
};

export default ClickablePicture;
