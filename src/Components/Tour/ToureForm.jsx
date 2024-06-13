import React from "react";
import { FaSearch } from "react-icons/fa";

const ToureForm = () => {
  return (
    <div className="toure-form">
      <div className="container">
        <div className="form-inner">
          <form method="post" className="booking-form">
            <div className="form-group">
              <input type="text" name="service" placeholder="Where to?" />
            </div>
            <div className="form-group">
              <input type="date" name="date" required="" />
            </div>
            <div className="form-group">
              <select className="wide">
                <option data-display="Travel Type" selected disabled>
                  Travel Type
                </option>
                <option value="1">Adventure Tours</option>
                <option value="2">City Tours</option>
                <option value="3">Couple Tours</option>
                <option value="4">Group Tours</option>
              </select>
            </div>
            <div className="msg-button">
              <button type="submit" className="button">
                <FaSearch /> Find Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToureForm;
