import { useSelector } from "react-redux";
import CountryFilter from "../components/CountryFilter";
import CountryList from "../components/CountryList";
import { countriesSelector } from "../redux/countries/countriesSlice";
import "../stylesheets/homePage.css";
import { useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const HomePage = () => {
  const [currentCountries, setCurrentCountries] = useState([]);
  const { isLoading, error } = useSelector(countriesSelector);

  return (
    <main>
      <CountryFilter
        setCountryList={setCurrentCountries}
        countryList={currentCountries}
      />
      {isLoading && <Loading />}
      {error && <ErrorMessage errorMessage={error} />}
      {!isLoading && !error && (
        <>
          <CountryList countriesData={currentCountries} />
        </>
      )}
    </main>
  );
};

export default HomePage;
