import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "./../UI/CustomInput/CustomInput";
import CommonButton from "../CommonButton/CommonButton";
import { Form } from "react-bootstrap";
import CustomSelect from "./../UI/Select/CustomSelect";
import "./GetInTocuh.scss";

const GetInTocuh = () => {
  const [result, setResult] = useState("");

  const options = [
    { value: "animation", label: "Animation" },
    { value: "vfx", label: "VFX" },
    { value: "webgraphics", label: "Web & Graphics" },
    { value: "filmmaking", label: "Film Making" },
    { value: "photography", label: "Photography" },
    { value: "videoediting", label: "Video Editing" },
    { value: "digitalmarketting", label: "Digital Marketing" },
    { value: "ai", label: "AI Content Creation"},
  ];

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
    if (!values.course) {
      errors.course = "Please select a course";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", course: "" },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setResult("Sending....");
      const formData = new FormData();
      formData.append("access_key", "bb345f89-5331-4375-8bd4-2b09315e4945", "");
      // formData.append(
      //   "to",
      //   "493deepshikha@gmail.com, deepshikhap9877@gmail.com"
      // );
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("course", values.course);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          setResult("Form Submitted Successfully");
          toast.success("Form Submitted Successfully!");
          resetForm();
        } else {
          setResult(data.message);
          toast.error(data.message);
        }
      } catch (error) {
        setResult("Error submitting form");
        toast.error("Error submitting form");
      }
    },
  });

  return (
    <div className="form-page">
      <h2 className="mb-3">GET IN TOUCH</h2>
      <Form onSubmit={formik.handleSubmit} className="form-contact">
        <CustomInput
          label="Name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <p className="error">{formik.errors.name}</p>}

        <CustomInput
          label="Email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <p className="error">{formik.errors.email}</p>}

        <CustomInput
          label="Phone"
          type="number"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.errors.phone && <p className="error">{formik.errors.phone}</p>}

        <div>
          <label className="form-label mt-4">Select Course</label>
          {/* <CustomSelect
            options={options}
            name="course"
            value={formik.values.course}
            onChange={(selectedOption) =>
              formik.setFieldValue("course", selectedOption.value)
            } // Fix: Ensure selection updates state
          /> */}
          <CustomSelect
            options={options}
            name="course"
            value={
              options.find((option) => option.value === formik.values.course) ||
              ""
            }
            onChange={(selectedOption) => {
              formik.setFieldValue("course", selectedOption.value);
            }}
          />

          {formik.errors.course && (
            <p className="error">{formik.errors.course}</p>
          )}
        </div>

        <CommonButton text="Submit" type="submit" className="mt-4" />
      </Form>
      <span>{result}</span>
    </div>
  );
};

export default GetInTocuh;
