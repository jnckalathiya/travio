import React from "react";
import {
  FaComment,
  FaDollarSign,
  FaEnvelopeOpen,
  FaGlobe,
  FaIdCard,
  FaMap,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Counterydet = () => {
  return (
    <div className="country-details">
      <div className="text">
        <h3>Country Details</h3>
        <p>
          Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <ul>
        <li>
          
            <FaMapMarkedAlt />
            <span className="title">Address:</span>
          
         
            <span className="description">New York City</span>
          
        </li>
        <li>
          
            <FaIdCard />
            <span className="title">Visa Requirements:</span>
          
         
            <span className="description">Yes Requard</span>
          
        </li>
        <li>
          
            <FaGlobe />
            <span className="title">Country:</span>
          
         
            <span className="description">New York City</span>
          
        </li>
        <li>
          
            <FaComment />
            <span className="title">Languages spoken:</span>
          
         
            <span className="description">English & Spanish</span>
          
        </li>
        <li>
          
            <FaDollarSign />
            <span className="title">Currency Used:</span>
          
         
            <span className="description">USD</span>
          
        </li>
        <li>
          
            <FaPhone />
            <span className="title">Suport Phone:</span>
          
         
            <span className="description">
              <Link to="">+310215402</Link>
            </span>
          
        </li>
        <li>
          
            <FaEnvelopeOpen />
            <span className="title">Emergency Email:</span>
          
         
            <span className="description">
              <Link to="">info@example.com</Link>
            </span>
          
        </li>
        <li>
          
            <FaMap />
            <span className="title">Distance:</span>
          
         
            <span className="description">10.7m</span>
          
        </li>
      </ul>
    </div>
  );
};

export default Counterydet;
