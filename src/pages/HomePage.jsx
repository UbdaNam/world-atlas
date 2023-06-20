import { useDispatch, useSelector } from "react-redux";
import CountryFilter from "../components/CountryFilter";
import CountryList from "../components/CountryList";
import {
  countriesSelector,
  fetchCountries,
} from "../redux/countries/countriesSlice";
import "../stylesheets/homePage.css";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [currentCountries, setCurrentCountries] = useState([]);
  const [countriesPerPage] = useState(10);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const { isLoading, error } = useSelector(countriesSelector);

  const lastPageNumber = Math.ceil(currentCountries.length / countriesPerPage);
  const currentLastIndex = countriesPerPage * currentPageNumber;
  const currentFirstIndex = currentLastIndex - countriesPerPage;
  const paginatedCountries = currentCountries.slice(
    currentFirstIndex,
    currentLastIndex
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <main>
      <CountryFilter
        setCountryList={setCurrentCountries}
        setPageNumber={setCurrentPageNumber}
      />
      {isLoading && <Loading />}
      {error && <ErrorMessage errorMessage={error} />}
      {!isLoading && !error && (
        <>
          <CountryList countriesData={paginatedCountries} />
          <Pagination
            lastPageNumber={lastPageNumber}
            setPageNumber={setCurrentPageNumber}
            currentPageNumber={currentPageNumber}
          />
        </>
      )}
    </main>
  );
};

export default HomePage;
