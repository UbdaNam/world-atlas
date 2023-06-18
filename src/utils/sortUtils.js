export const sortData = (data, toggle) => {
  let sortedData = [];
  if (toggle) {
    sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
  } else {
    sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
  }
  return sortedData;
};
