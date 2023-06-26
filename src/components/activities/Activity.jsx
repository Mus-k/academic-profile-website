import React from "react";
import { default as conference } from "../../assest/images/kenny-eliason-1-aA2Fadydc-unsplash.jpg";
import { default as scott } from "../../assest/images/scott-graham-5fNmWej4tAA-unsplash.jpg";
import { default as campaign } from "../../assest/images/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import { default as presentation } from "../../assest/images/jason-goodman-bzqU01v-G54-unsplash.jpg";
import "./Activity.css";
import { motion } from "framer-motion";
export const Activity = () => {
  return (
    <section id="activity" className="activity">
      <h1 className="activity-title">Activities</h1>

      <div className="gallery">
        <motion.div
          className="img-div"
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
          <img src={conference} alt="conference 1" width="100%" />
          <div class="overlayGallery">Public Participation</div>
        </motion.div>

        <motion.div
          className="img-div"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.9 }}
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
          <img src={campaign} alt="conference 1" width="100%" />
          <div class="overlayGallery">Community engagement</div>
        </motion.div>

        <motion.div
          className="img-div"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.9 }}
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
          <img src={scott} alt="conference 1" width="100%" />
          <div class="overlayGallery">Teaching</div>
        </motion.div>
        <motion.div
          className="img-div"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 1 }}
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
          <img src={presentation} alt="conference 1" width="100%" />
          <div class="overlayGallery">Thesis presentation</div>
        </motion.div>
      </div>
    </section>
  );
};
