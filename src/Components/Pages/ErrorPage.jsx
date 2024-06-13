import React from "react";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="error-inner">
          <h1>404</h1>
          <p>Oops! That page is not found.</p>

          <div className="message-btn">
            <button type="submit" className="button">
             Go To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
