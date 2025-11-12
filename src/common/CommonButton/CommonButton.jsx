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
      {props.svgIcon && <span className="btn-style_icon">{props.svgIcon}</span>}
    </button>
  );
};

export default CommonButton;
