import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          {/* <div className="location ">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>500 React Ave</p>
              <h4>Fort Lauderdale, FL</h4>
            </div>
          </div> */}
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              1-800-555-5555
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />{" "}
              mediatate@getenlighted.com
            </h4>
          </div>
        </div>
        <div className="right ">
          <h4>About Us</h4>
          <p>
            We've been apart of the South Florida community for 25 years and our
            methods have helped people from all walks of life achieve the mental
            state necessary for success and happiness.
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />
            </a>
            {/* <a  target="_blank" rel="noreferrer" href="https://www.linkedin.com/"></a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
