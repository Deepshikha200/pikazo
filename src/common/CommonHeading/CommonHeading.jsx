import React from "react";
import "./CommonHeading.scss";


const CommonHeading = ({ heading, className }) => {
  return <h2 className={`common-heading text-center  ${className}`}>{heading}</h2>;
};

export default CommonHeading;
