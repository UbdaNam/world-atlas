export const limitPageNumbers = (pageNumber, lastPageIndex) => {
  let pageNumbers = [];

  for (let i = 1; i <= lastPageIndex; i++) {
    pageNumbers.push(i);
  }

  let lowerLimit = Math.max(1, pageNumber - 3),
    upperLimit = Math.min(pageNumber + 3, pageNumbers.length);

  if (pageNumber < 4) {
    upperLimit = Math.min(upperLimit + (4 - pageNumber), pageNumbers.length);
  } else if (pageNumber > pageNumbers.length - 3) {
    lowerLimit = Math.max(
      1,
      lowerLimit - 3 + (pageNumbers.length - pageNumber)
    );
  }

  pageNumbers = pageNumbers.slice(lowerLimit - 1, upperLimit);

  return pageNumbers;
};
