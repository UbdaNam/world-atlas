import "../stylesheets/pagination.css";
import { limitPageNumbers } from "../utils/paginationUtils";
import { AiOutlineDash } from "react-icons/ai";
import { BsSkipForwardCircle, BsSkipBackwardCircle } from "react-icons/bs";

const Pagination = ({ lastPageNumber, setPageNumber, currentPageNumber }) => {
  const pageNumbers = limitPageNumbers(currentPageNumber, lastPageNumber);

  return (
    <ul className="page-numbers-container">
      {lastPageNumber > 7 && currentPageNumber > 4 && (
        <>
          <BsSkipBackwardCircle
            className="skip-backward-icon"
            onClick={() => setPageNumber(1)}
          />
          <AiOutlineDash />
        </>
      )}
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <button
            className={
              currentPageNumber === pageNumber
                ? "page-number active"
                : "page-number"
            }
            onClick={() => setPageNumber(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      ))}
      {lastPageNumber > 7 && currentPageNumber < lastPageNumber - 3 && (
        <>
          <AiOutlineDash />
          <BsSkipForwardCircle
            className="fast-forward-icon"
            onClick={() => setPageNumber(lastPageNumber)}
          />
        </>
      )}
    </ul>
  );
};

export default Pagination;
