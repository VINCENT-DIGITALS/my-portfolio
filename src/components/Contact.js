import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import profilePic from '../Assets/MYPROFILE.png';

function Contact() {
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Track if image is loaded

  return (
    <div className="contact-container">
      <section className="contact-header">
        <h2>Get in touch</h2>
      </section>

      <section className="contact-content">

        <section className="contact-details">

          <div className="detail-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:mac.jvincent@gmail.com">mac.jvincent@gmail.com</a>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <a
              href="https://maps.app.goo.gl/VMMGSVBg1MFyren86"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maria Aurora, Aurora
            </a>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/john-vincent-macayanan-024a03324/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a> 
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>  
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faFacebook} />
            <a href="https://www.facebook.com/Itsvincentlang/" target="_blank" rel="noopener noreferrer">
              Facebook Profile
            </a>  
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+639497918144">+63949-791-8144</a>
          </div>
        </section>
        <section className="contact-image">
          {/* Preloader while the image is loading */}
          {!isImageLoaded && (
            <div className="image-preloader">
              <div className="spinner"></div>  
            </div>
          )}

          <img
            src={profilePic}
            alt="Person"
            onLoad={() => setIsImageLoaded(true)} // Set image loaded state to true
            style={isImageLoaded ? { display: 'block' } : { display: 'none' }} // Hide image until loaded
          />
        </section>
      </section>

    </div>
  );
}

export default Contact;
