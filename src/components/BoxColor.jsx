const BoxColor = ({ r, g, b }) => {
  let backgroundColor = `rgb(${r}, ${g}, ${b})`;
  let backroundIsLight = r + g + b > (255 * 3) / 2;
  return (
    <div
      className="boxColor"
      style={{ backgroundColor, color: backroundIsLight ? 'Black' : 'White' }}
    >
      <p>{backgroundColor}</p>
    </div>
  );
};

export default BoxColor;
