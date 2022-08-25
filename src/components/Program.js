import React from 'react';
import "./ProgramStyles.css";

import { Link } from "react-router-dom";

import Pod from "../assets/incense.png";
import Moon from "../assets/person.png";


const Program = () => {
  return (
    <div className="program">
      <div className="left">
        <h1>Our Program</h1>
        <p>
          Our program is not for the faint of heart but the payoff
         is worth it. We enforce a stringent daily regimen of
          meditation visualization and a high priced, high quality Whole Foods
          diet. Our dedicated instructors will guide you every step of the way
          so your journey to enlightenment will be even easier than a 8kyu kata.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack bottom">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="image-stack top">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program