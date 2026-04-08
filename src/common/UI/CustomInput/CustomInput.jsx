import { Form } from "react-bootstrap";
import "./CustomInput.scss";

const CustomInput = (props) => {
  return (
    <>
      <Form.Group className={`customInput ${props.className}`}>
        <Form.Label htmlFor={props.id} className={props.classLabel}>
          {props.label} {props.sub && <sup>*</sup>}
        </Form.Label>
        <Form.Control
          type={props.type}
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
