import "./CommonButton.scss";

const CommonButton = (props) => {
  return (
    <button
      onClick={props?.onClick}
      type={props?.type}
      className={`btn-style ${props.className} ${props.fluid ? "w-100" : ""} ${props.transparent ? "transparent" : ""
        }`}
    >
      {props.text}
    </button>
  );
};

export default CommonButton;
