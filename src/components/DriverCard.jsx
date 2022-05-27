const DriverCard = ({ name, rating, img, car }) => {
  let roundedUp = Math.round(rating);
  switch (roundedUp) {
    case 0:
      rating = '☆☆☆☆☆';
      break;
    case 1:
      rating = '★☆☆☆☆';
      break;
    case 2:
      rating = '★★☆☆☆';
      break;
    case 3:
      rating = '★★★☆☆';
      break;
    case 4:
      rating = '★★★★☆';
      break;
    case 5:
      rating = '★★★★★';
      break;

    default:
      rating = '☆☆☆☆☆';
      break;
  }

  return (
    <div className="driverCard">
      <div>
        <img className="driverImg" src={img} alt="profilePic"></img>
      </div>
      <div className="driverInfo">
        <p>
          <strong>{name}</strong>
        </p>{' '}
        <p>{rating}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
