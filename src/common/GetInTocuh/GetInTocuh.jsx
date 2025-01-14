import React from "react";
import { useFormik } from "formik";
import CustomInput from "./../UI/CustomInput/CustomInput";
import CommonButton from "../CommonButton/CommonButton";
import { Form } from "react-bootstrap";
import CustomSelect from "./../UI/Select/CustomSelect";

const GetInTocuh = () => {
  const options = [
    { value: "animation", label: "Animation" },
    { value: "vfx", label: "VFX" },
    { value: "webgraphics", label: "Web & Graphics" },
    { value: "filmmaking", label: "Film Making" },
    { value: "photography", label: "Photography" },
    { value: "videoediting", label: "Video Editing" },
    { value: "digitalmarketting", label: "Digital Marketting" },
    { value: "ai", label: "AI Content Creation" },
  ];

  const initial = {
    name: "",
    email: "",
    phone: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Please enter your name";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "Please enter your phone number";
    }
    return errors;
  };

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initial,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="ps-lg-5 ps-0 mt-lg-0 mt-5">
      <h2 className="mb-3">GET IN TOUCH</h2>
      <Form onSubmit={handleSubmit} className="form-contact">
        <CustomInput
          label="Name"
          type="text"
          value={values.name}
          onChange={handleChange}
          name="name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <CustomInput
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          name="email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <CustomInput
          label="Phone"
          type="number"
          value={values.phone}
          onChange={handleChange}
          name="phone"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <div>
          <label htmlFor="" className="form-label mt-4">
            Select Course
          </label>
          <CustomSelect options={options} name="course" />
        </div>
        <CommonButton text="Submit" type="submit" className="mt-4" />
      </Form>
    </div>
  );
};

export default GetInTocuh;
