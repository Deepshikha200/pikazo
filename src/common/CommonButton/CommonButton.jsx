import "./CommonButton.scss";
import { motion } from "motion/react";

const CommonButton = (props) => {
  return (
    <motion.button
      initial={{}}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },

        ease: [0, 0.71, 0.2, 1.01],
      }}
      transition={{}}
      onClick={props?.onClick}
      type={props?.type}
      className={`btn-style ${props.className} ${props.fluid ? "w-100" : ""} ${
        props.transparent ? "transparent" : ""
      }`}
    >
      {props.text}
    </motion.button>
  );
};

export default CommonButton;
