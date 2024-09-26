import React, { useState } from 'react';
import profilePic from '../Assets/MYPROFILE.png';
import CV_Macayanan from '../Assets/CV_Macayanan.pdf';

function Dashboard() {
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Track if image is loaded
  console.log("Dashboard component rendered");

  return (
    <div className="dashboard">
      
      <div className="profile-section">
        <h1>Hello, It's Me</h1>
        <h2>John Vincent Macayanan</h2>
        <h3>An <span className="highlight">Aspiring Software Developer</span></h3>
        <p>Driven by curiosity and a love for coding, feel free to check out my CV below for more details about my experience and qualifications.</p>

        <br></br>
        {/* Button to download CV directly */}
        <a href={CV_Macayanan} download="CV_Macayanan.pdf" className="cv-btn">
          Download CV
        </a>
      </div>
      <div className="image-section">
        {/* Preloader while the image is loading */}
        {!isImageLoaded && (
          <div className="image-preloader">
            <div className="spinner"></div> {/* Simple spinner for preloader */}
          </div>
        )}
        <img
          src={profilePic}
          alt="Profile"
          onLoad={() => setIsImageLoaded(true)} // Set image loaded state to true
          style={isImageLoaded ? { display: 'block' } : { display: 'none' }} // Hide image until loaded
        />

      </div>


    </div>
  );
}

export default Dashboard;
