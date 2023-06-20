import "../stylesheets/countryFilter.css";
import { AiFillCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { ImRadioChecked2, ImRadioUnchecked } from "react-icons/im";
import { useEffect, useState } from "react";
import { sortData } from "../utils/sortUtils";
import { useSelector } from "react-redux";
import { countriesSelector } from "../redux/countries/countriesSlice";
import { filterData } from "../utils/filterUtils";

const CountryFilter = ({ setCountryList, setPageNumber }) => {
  const { countries } = useSelector(countriesSelector);
  const [isFilterByArea, setIsFilterByArea] = useState(false);
  const [isFilterByRegion, setIsFilterByRegion] = useState(false);
  const [isSorted, setIsSorted] = useState(true);

  useEffect(() => {
    setPageNumber(1);
    const filteredData = filterData(
      countries,
      isFilterByArea,
      isFilterByRegion
    );
    const sortedData = sortData(filteredData, isSorted);
    setCountryList(sortedData);
  }, [
    isFilterByArea,
    isFilterByRegion,
    isSorted,
    countries,
    setCountryList,
    setPageNumber,
  ]);

  return (
    <div className="filter-container">
      <div className="filter-item-container">
        <button
          className={isFilterByArea ? "filter-item active" : "filter-item"}
          onClick={() => setIsFilterByArea(!isFilterByArea)}
        >
          {isFilterByArea ? <ImRadioChecked2 /> : <ImRadioUnchecked />}
          Smaller than Lithuania by area
        </button>
        <button
          className={isFilterByRegion ? "filter-item active" : "filter-item"}
          onClick={() => setIsFilterByRegion(!isFilterByRegion)}
        >
          {isFilterByRegion ? <ImRadioChecked2 /> : <ImRadioUnchecked />}
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
