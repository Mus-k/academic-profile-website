import React from "react";
import "./Contact.css";

import { Link } from "react-router-dom";
export const Contact = () => {
  return (
    <article id="contact" className="contact"
   
      >
      <div class="container-form">
        <span class="big-circle"></span>

        <div
          class="form"
         
        >
          <div class="contact-info">
            <div class="info-form">
              <div class="info-contact">
                <i className="fa-solid-contact fa-solid fa-map-location"></i>
                <p>Samsun Korfez atakum 50023</p>
              </div>
              <div class="info-contact">
                <i className="fa-solid-contact fa-solid fa-envelope"></i>
                <p>abukamara@gmail.com</p>
              </div>
              <div class="info-contact">
                <i className="fa-solid-contact fa-solid fa-phone-flip"></i>
                <p>5433-456-789</p>
              </div>
            </div>

            <div class="social-media">
              <p>Connect me :</p>
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
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="" autocomplete="off">
              <h3 class="title">Contact me</h3>
              <div class="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="name"
                />
              </div>
              <div class="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="email"
                />
              </div>
              <div class="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="phone number"
                />
              </div>
              <div class="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  placeholder="message"
                ></textarea>
              </div>
              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </div>
      </div>
    </article>
  );
};
