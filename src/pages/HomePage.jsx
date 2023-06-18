import CountryFilter from "../components/CountryFilter";
import CountryList from "../components/CountryList";
import "../stylesheets/homePage.css";
import { useState } from "react";

const HomePage = () => {
  const [currentCountries, setCurrentCountries] = useState([]);

  return (
    <main>
      <CountryFilter setCountryList={setCurrentCountries} />
      <CountryList countriesData={currentCountries} />
    </main>
  );
};

export default HomePage;
