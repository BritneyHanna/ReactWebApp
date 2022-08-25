import React from "react";
import { Link } from "react-router-dom";
import "./PricingStyles.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card novice">
          <h3>- The Novice -</h3>
          <span className="bar"></span>
          <p className="cost">$1000</p>
          <p>- 3 Days Per Week -</p>
          
          <p>- Group Classes-</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card guru">
          <h3>- The Guru -</h3>
          <span className="bar"></span>
          <p className="cost">$2500</p>
          <p>- 5 Days Per Week -</p>
          <p>- Dedicated Instructor -</p>
          
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card buddah">
          <h3>- The Buddah -</h3>
          <span className="bar"></span>
          <p className="cost buddah">$50,000</p>
          <p>- 7 Days Per Week -</p>
          <p>- Dedicated Enlightened Instructor -</p>
        
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
