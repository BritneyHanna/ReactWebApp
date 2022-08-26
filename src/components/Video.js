import React from 'react';
import { Link } from 'react-router-dom';
import './VideoStyles.css';
import yogaVideo from '../assets/naturevid.mp4';

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={yogaVideo} type="video/mp4" />
      </video>
      <div className="content">
        <div className="hero-banner-wrapper">
          <h1>Meditation Classes</h1>
          <p> Journey within to find inner peace and purpose</p>
        </div>
        <div>
          <Link to="/pricing" className="btn">
            See Packages
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Video