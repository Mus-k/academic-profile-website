import { motion } from "framer-motion";
import React from "react";
import { default as profilePicture } from "../../assest/images/Capture.PNG";
import { Link } from "react-scroll";
import "./Landing.css";
export const LandingPage = () => {
  return (
    <section className="landing">
      <div className="landing-container">
        <motion.div
          class="home-right image-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <img
            src={profilePicture}
            alt="profile"
            className="image"
            width="100%"
          />
          <div className="personal-info">
            <p className="kamara">Dr. Abu Kamara</p>
            <div class="info-form">
              <div className="profile-info">
                <i className="fa-solid-contact fa-solid fa-map-location"></i>
                <p>Samsun Korfez atakum 50023</p>
              </div>
              <div className="profile-info">
                <i className="fa-solid-contact fa-solid fa-envelope"></i>
                <p>abukamara@gmail.com</p>
              </div>
              <div className="profile-info">
                <i className="fa-solid-contact fa-solid fa-phone-flip"></i>
                <p>5433-456-789</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="home-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 1.1 }}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
        >
          <div className="first-letter">
            Communication processes lie at the heart of the creation, transfer,
            and use of scientific knowledge for policy. Communication can span
            boundaries between scientists and decision-makers, help achieve
            democratic goals for governance through citizen outreach and
            participation, and facilitate the use of evidence in the design of
            public-facing governmental programs.
          </div>
          <p className="sub-text">
            My research focuses on the intersection between governance and
            science and risk communication. I explore this nexus across three
            areas of study:{" "}
          </p>
          <div className="desktop-text">

         
          <p className="sub-text2">
            1. communication of science with policymakers, or “science advice”;
          </p>{" "}
          <p>
            2. communication of science with policymakers, or “science advice”;{" "}
          </p>
          <p>
            3. communication of science with policymakers, or “science advice”;{" "}
          </p>
          </div>
          <button className="desktop-div">
            <Link
              className="teaching"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Contact
            </Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
