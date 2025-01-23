import React from "react";
import "./CommonHeading.scss";
import { motion } from "framer-motion";

const CommonHeading = ({ heading, className }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.77, delay: 0.2 }}
      className={`common-heading text-center  ${className}`}
    >
      {heading}
    </motion.h2>
  );
};

export default CommonHeading;
