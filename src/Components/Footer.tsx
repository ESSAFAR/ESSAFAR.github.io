import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {   
    faFacebook,
    faInstagram,
    faLinkedin,
     } from '@fortawesome/free-brands-svg-icons';





const Footer = () => {
    return (
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>Contactez-nous</h3>
              <p>Si vous avez des questions ou des demandes, n'hésitez pas à nous contacter :</p>
            </div>
            <div className="col-md-4">
              <div className="social-icons">
                <div className="social-icon p-2">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <span className="icon-name p-1">Facebook</span>
                </div>
                <div className="social-icon p-2">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  <span className="icon-name p-1">Instagram</span>
                </div>
                <div className="social-icon p-2">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  <span className="icon-name p-1">LinkedIn</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; 2023 OREMI - Made with Love</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
