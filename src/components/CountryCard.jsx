import "../stylesheets/countryCard.css";

const CountryCard = ({ country }) => {
  return (
    <li className="list-item">
      <h2>Country: {country.name}</h2>
      <h3>Region: {country.region}</h3>
      <p>
        Area: {country?.area?.toLocaleString()} Km<sup>2</sup>
      </p>
    </li>
  );
};

export default CountryCard;
