const NumbersTable = ({ limit }) => {
  const limitArr = [];

  for (let i = 1; i <= limit + 1; i++) {
    limitArr.push(i);
  }

  let redSquare = {
    backgroundColor: 'red',
    border: '2px solid black',
    width: '75px',
    height: '75px',
  };
  let whiteSquare = {
    border: '2px solid black',
    width: '75px',
    height: '75px',
  };

  return (
    <table>
      <thead>
        <tr>
          {limitArr.map((el, i) => {
            if (i % 2 === 0 && i !== 0 && i <= limitArr.length / 2) {
              return <th style={redSquare}> {i}</th>;
            } else if (i !== 0 && i <= limitArr.length / 2) {
              return <th style={whiteSquare}> {i}</th>;
            }
          })}
        </tr>
      </thead>

      <thead>
        <tr>
          {limitArr.map((el, i) => {
            if (i % 2 === 0 && i !== 0 && i > limitArr.length / 2) {
              return <th style={redSquare}> {i}</th>;
            } else if (i !== 0 && i > limitArr.length / 2) {
              return <th style={whiteSquare}> {i}</th>;
            }
          })}
        </tr>
      </thead>
    </table>
  );
};

export default NumbersTable;
