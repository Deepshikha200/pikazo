import { Form } from "react-bootstrap";
import "./CustomInput.scss";
// import { CloseEye, OpenEye } from "../../../assets/images/Icons/SvgIcons";
import { useState } from "react";
const CustomInput = (props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Form.Group className={`customInput ${props.className}`}>
        <Form.Label htmlFor={props.id} className={props.classLabel}>
          {props.label} {props.sub && <sup>*</sup>}
        </Form.Label>
        <Form.Control
          type={props.type === "password" && active ? "text" : props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          autoComplete="off"
          name={props.name}
          id={props.id}
          value={props.value}
        />
        {/* {props.type === "password" ? (
          <span onClick={() => setActive(!active)} className="eyeIcon">
            {active ? <OpenEye /> : <CloseEye />}
          </span>
        ) : (
          ""
        )} */}
      </Form.Group>
    </>
  );
};

export default CustomInput;
