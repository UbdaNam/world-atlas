const filterByArea = (countryList, lithuaniaArea) => {
  const filteredCountries = countryList?.filter(
    (country) => country.area < lithuaniaArea
  );
  return filteredCountries;
};

const filterByRegion = (countryList) => {
  const filteredCountries = countryList?.filter(
    (country) => country.region === "Oceania"
  );
  return filteredCountries;
};

export const filterData = (data, isFilterByArea, isFilterByRegion) => {
  let filteredCountries = [];
  const [lithuaniaArea] = data?.filter(
    (country) => country.name === "Lithuania"
  );

  if (isFilterByArea && isFilterByRegion) {
    const filteredByArea = filterByArea(data, lithuaniaArea.area);
    filteredCountries = filterByRegion(filteredByArea);
  } else if (isFilterByArea) {
    filteredCountries = filterByArea(data, lithuaniaArea.area);
  } else if (isFilterByRegion) {
    filteredCountries = filterByRegion(data);
  } else {
    filteredCountries = data;
  }

  return filteredCountries;
};
