import React from "react";
import "./CommonHeading.scss";
import { motion } from "framer-motion";

const CommonHeading = ({ heading, className }) => {
  return (
    <motion.h2
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.7, delay: 0.001 }}
      className={`common-heading   ${className}`}
    >
      {heading}
    </motion.h2>
  );
};

export default CommonHeading;
