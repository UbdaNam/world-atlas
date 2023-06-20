import "../stylesheets/countryList.css";
import CountryCard from "./CountryCard";

const CountryList = ({ countriesData }) => {
  return (
    <section>
      <ul className="list-container">
        {countriesData.map((country, index) => (
          <CountryCard country={country} key={`${index}${country.name}`} />
        ))}
      </ul>
    </section>
  );
};

export default CountryList;
