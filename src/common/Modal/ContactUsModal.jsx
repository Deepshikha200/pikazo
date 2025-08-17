import React, { useState, useEffect } from "react";
import CommonModal from "./CommonModal";
import { useFormik } from "formik";
import CustomInput from "./../UI/CustomInput/CustomInput";
import CommonButton from "../CommonButton/CommonButton";
import { Col, Form, Row } from "react-bootstrap";
import CustomSelect from "./../UI/Select/CustomSelect";

import "./ContactUsModal.scss";
import { RefreshButton } from "../../assets/images/Icons/SvgIcons";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContactUsModal = ({ show, handleClose }) => {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const navigate = useNavigate();

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const options = [
    { value: "degreeprogram", label: "Degree Program" },
    { value: "animation", label: "Animation" },
    { value: "vfx", label: "VFX" },
    { value: "webgraphics", label: "Web & Graphics" },
    { value: "filmmaking", label: "Film Making" },
    { value: "photography", label: "Photography" },
    { value: "videoediting", label: "Video Editing" },
    { value: "digitalmarketing", label: "Digital Marketing" },
    { value: "ai", label: "AI Content Creation" },
  ];

  const timeSlots = [
    { value: "11:00am - 12:00pm", label: "11:00am - 12:00pm" },
    { value: "12:00pm - 1:00pm", label: "12:00pm - 1:00pm" },
    { value: "1:00pm - 2:00pm", label: "1:00pm - 2:00pm" },
    { value: "4:00pm - 5:00pm", label: "4:00pm - 5:00pm" },
    { value: "5:00pm - 6:00pm", label: "5:00pm - 6:00pm" },
  ];

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Please enter your name";
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) errors.phone = "Please enter your phone number";
    if (!values.course) errors.course = "Please select a course";
    if (!values.timeSlot) errors.timeSlot = "Please select a time slot";
    if (!userCaptcha) {
      errors.userCaptcha = "Please enter the CAPTCHA";
    } else if (userCaptcha !== captcha) {
      errors.userCaptcha = "CAPTCHA does not match";
    }

    return errors;
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      timeSlot: "",
    },
    validate,
    onSubmit: async (values) => {
      const toastId = toast.loading("Sending...");

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("course", values.course);
      formData.append("timeSlot", values.timeSlot);
      formData.append(
        "_cc",
        "growdigitalpreneur@gmail.com,pikazoinstitute@gmail.com"
      );
      formData.append("_subject", "New Enquiry Submitted from Website");
      formData.append("_template", "table");

      try {
        const response = await fetch(
          "https://formsubmit.co/ajax/amitrathore5550@gmail.com",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        toast.dismiss(toastId);
        if (data.success === "true") {
          toast.success("Form Submitted Successfully");
          navigate("/thank-you");
          resetForm();
          setUserCaptcha("");
          setCaptcha(generateCaptcha());
          handleClose(); // Optional: close modal after success
        } else {
          toast.error(data.message || "Submission failed");
        }
      } catch (error) {
        toast.dismiss(toastId);
        toast.error("Error submitting form");
      }
    },
  });

  return (
    <CommonModal
      show={show}
      handleClose={handleClose}
      className="logout-modal"
      heading="Contact Us"
    >
      <div>
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
            <label htmlFor="course" className="form-label mt-4">
              Select Course
            </label>
            <CustomSelect
              options={options}
              name="course"
              value={
                options.find((option) => option.value === values.course) || ""
              }
              onChange={(selectedOption) =>
                setFieldValue("course", selectedOption.value)
              }
            />
            {errors.course && <p className="error">{errors.course}</p>}
          </div>

          <div>
            <label htmlFor="timeSlot" className="form-label mt-4">
              Select Time Slot
            </label>
            <CustomSelect
              options={timeSlots}
              name="timeSlot"
              value={
                timeSlots.find((slot) => slot.value === values.timeSlot) || ""
              }
              onChange={(selectedOption) =>
                setFieldValue("timeSlot", selectedOption.value)
              }
            />
            {errors.timeSlot && <p className="error">{errors.timeSlot}</p>}
          </div>

          <div className="captcha-box mt-4">
            <CustomInput
              type="text"
              className="captcha-box-input"
              placeholder="Enter CAPTCHA"
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
            />
            {errors.userCaptcha && (
              <p className="error">{errors.userCaptcha}</p>
            )}
            <Row className="align-items-center">
              <Col lg={8}>
                <div className="captcha">
                  <span>{captcha}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setCaptcha(generateCaptcha());
                      setUserCaptcha("");
                    }}
                    className="refresh-button"
                  >
                    <RefreshButton />
                  </button>
                </div>
              </Col>
              <Col lg={4}>
                <CommonButton
                  text="Submit"
                  type="submit"
                  className="mt-4"
                  disabled={userCaptcha !== captcha}
                />
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </CommonModal>
  );
};

export default ContactUsModal;
