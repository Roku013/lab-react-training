function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let cardColors = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  let numEnd = '**** **** **** ' + number.substring(12, 16);
  let yearEnd = expirationYear.toString().substring(2, 4);

  const monthExp = () => {
    let month = expirationMonth.toString();
    let monthFinal = '';
    if (month.length === 1) {
      monthFinal = '0' + month;
    } else {
      monthFinal = month;
    }
    return monthFinal;
  };

  return (
    <div className="creditCard" style={cardColors}>
      <div className="cardType">
        <p>{type}</p>
      </div>
      <div className="cardNum">{numEnd}</div>
      <div className="cardBottom">
        Expires {monthExp(expirationMonth)}/{yearEnd} &nbsp;&nbsp; {bank}{' '}
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
