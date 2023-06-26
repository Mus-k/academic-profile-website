import React from "react";
import "./Teaching.css";
import { default as education } from "../../assest/images/jessica-ruscello-OQSCtabGkSY-unsplash.jpg";
import { Footer } from "../footer/Footer";
import { motion } from "framer-motion";
export const Teaching = () => {
  return (
    <motion.section
      id="teaching"
      className="teaching"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="research-left">
        <h3 className="research-title">
          Home <i className="fa-solid fa-angles-right"></i>
          <span className="active">Teaching</span>
        </h3>
      </div>
      <div className="image">
        <motion.div
          className="white-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.9 }}
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
          <div className="div-img">
            <img src={education} alt="education" width="100%" />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="teaching-text-div"
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
        <p className="teaching-text">
          In my courses, I take a problem-based learning approach, which has
          been described as “[a teaching style] approached through concrete
          material and problems, the working through of which not only
          illustrates the principle but engages students in its use.” I seek to
          create spaces in my classes for students to feel comfortable
          discussing their own—and others’—perspectives and lived experience
          with respect for not only the diversity represented in the classroom
          but across human societies worldwide and over time. I recognize that
          each student comes to class with a different approach to learning,
          educational background, and life circumstances that make it easier—or
          harder—for them to participate and be successful in the course.
        </p>
      </motion.div>
      <Footer />
    </motion.section>
  );
};
