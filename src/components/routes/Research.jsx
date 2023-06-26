import React from "react";
import "./Research.css";
import { motion } from "framer-motion";
import { Data } from "../../dataApi/ResearchData";
import { Footer } from "../footer/Footer";


export const Research = () => {
  return (
    <motion.div
      id="research"
      className="research"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="research-left">
        <h3 className="research-title">
          Home <i className="fa-solid fa-angles-right"></i>
          <span className="active">Research</span>
        </h3>
      </div>

      <div>
        {Data &&
         Data.map((data) => (
            <motion.div
              className="data-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
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
              <div className="column1">
                <img src={data.img} alt={data.title} width="100%" />
              </div>
              <div className="column2">
                <h1 className="data-title">{data.title}</h1>
                <p>{data.text}</p>
              </div>
            </motion.div>
          ))}
      </div>
      <Footer />
    </motion.div>
  );
};
