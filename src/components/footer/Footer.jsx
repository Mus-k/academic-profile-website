import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <copyright>2023 copyright &copy; Dr. Abu . All rights reserved.</copyright>
      </div>
     
        <div class="footer-media">
         
          <div class="social-icons">
            <Link to="">
              <i class="fab fa-facebook-f"></i>
            </Link>
            <Link to="">
              <i class="fab fa-twitter"></i>
            </Link>
            <Link to="">
              <i class="fab fa-instagram"></i>
            </Link>
            <Link to="">
              <i class="fab fa-linkedin-in"></i>
            </Link>
          </div>
        
      </div>
    </footer>
  );
};
