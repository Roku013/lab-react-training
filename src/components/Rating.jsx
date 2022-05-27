const Rating = ({ children }) => {
  let roundedUp = Math.round(children);
  let rating;

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

  return <div>{rating}</div>;
};

export default Rating;
