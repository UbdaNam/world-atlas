import "../stylesheets/errorMessage.css";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="error-container">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
