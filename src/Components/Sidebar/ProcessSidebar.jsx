import React from "react";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

const ProcessSidebar = () => {
  return (
    <div className="sidebar process">
      <div class="title">
        <h3>Search</h3>
      </div>
      <div className="img-content">
        <img src="assets/img/sidebar-1.jpg" alt="" />
      </div>
      <h4>Mascow Red City Land</h4>
      <ul class="info">
        <li>
          <span className="icon">
            <FaCalendarAlt />
          </span>
          From: <span>25 Oct, 2020</span>
        </li>
        <li>
          <span className="icon">
            <FaCalendarAlt />
          </span>
          To: <span>29 Oct, 2020</span>
        </li>
        <li>
          <span className="icon">
            <FaUserAlt />
          </span>
          Guests: <span>2 Adults, 1 Child</span>
        </li>
      </ul>

      <div class="price">
        <h4>Total: $170.00</h4>
      </div>
    </div>
  );
};

export default ProcessSidebar;
