import "../stylesheets/countryFilter.css";
import { AiFillCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useEffect, useState } from "react";
import { sortData } from "../utils/sortUtils";
import { useSelector } from "react-redux";
import { countriesSelector } from "../redux/countries/countriesSlice";
import { filterData } from "../utils/filterUtils";

const CountryFilter = ({ setCountryList }) => {
  const { countries } = useSelector(countriesSelector);
  const [isFilterByArea, setIsFilterByArea] = useState(false);
  const [isFilterByRegion, setIsFilterByRegion] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    const filteredData = filterData(
      countries,
      isFilterByArea,
      isFilterByRegion
    );
    const sortedData = sortData(filteredData, isSorted);

    setCountryList(sortedData);
  }, [isFilterByArea, isFilterByRegion, isSorted, countries, setCountryList]);

  return (
    <div className="filter-container">
      <div className="filter-item-container">
        <button
          className="filter-item"
          onClick={() => setIsFilterByArea(!isFilterByArea)}
        >
          Smaller than Lithuania by area
        </button>
        <button
          className="filter-item"
          onClick={() => setIsFilterByRegion(!isFilterByRegion)}
        >
          Countries in Oceania region
        </button>
      </div>
      <button className="filter-item" onClick={() => setIsSorted(!isSorted)}>
        Name
        {isSorted ? <AiFillCaretDown /> : <AiOutlineCaretUp />}
      </button>
    </div>
  );
};

export default CountryFilter;