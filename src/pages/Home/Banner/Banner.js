import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <p className="text-white site-name-top">Get started for fitness</p>
            <h1 className="site-name text-white">Fitness Point</h1>
            <p className="text-white text-center w-50">Regular exercise and physical activity promotes strong muscles and bones. It improves respiratory, cardiovascular health, and overall health.</p>
            <br />
            <Link style={{ backgroundColor: "#EE4F15", color: "white" }} className="btn" to="/contact">Contact us</Link>
        </div>
    );
};

export default Banner;