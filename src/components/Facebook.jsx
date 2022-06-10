//import './Facebook.css';
import profiles from './../data/berlin.json';

const Facebook = () => {
  return (
    <div>
      <button>England</button>
      <button>Germany</button>
      <button>Malaysia</button>
      <button>USA</button>
      {profiles.map((el) => {
        return (
          <div className="facebook">
            <img className="fb-img" src={el.img} alt="students" />
            <div key={el.lastName}>
              <p>
                <strong>First name: </strong> {el.firstName}
              </p>
              <p>
                <strong>Last name: </strong> {el.lastName}
              </p>
              <p>
                <strong>Country: </strong> {el.country}
              </p>
              <p>
                <strong>Type: </strong> {el.isStudent ? 'Teacher' : 'Student'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Facebook;
