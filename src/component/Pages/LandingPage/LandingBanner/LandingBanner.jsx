import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import bannerImg from "../../../../assets/images/landingimg.png";
import CustomInput from "../../../../common/UI/CustomInput/CustomInput";
import { useFormik } from "formik";
import CustomSelect from "../../../../common/UI/Select/CustomSelect";
import { RefreshButton } from "../../../../assets/images/Icons/SvgIcons";
import CommonButton from "../../../../common/CommonButton/CommonButton";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./LandingBanner.scss";

const LandingBanner = () => {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const courseOptions = [
    { value: "degreeprogram", label: "Degree Program" },
    { value: "animation", label: "Animation" },
    { value: "vfx", label: "VFX" },
    { value: "webgraphics", label: "Web & Graphics" },
    { value: "filmmaking", label: "Film Making" },
    { value: "photography", label: "Photography" },
    { value: "videoediting", label: "Video Editing" },
    { value: "digitalmarketting", label: "Digital Marketing" },
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
    if (!values.firstName) errors.firstName = "Please enter your first name";
    if (!values.lastName) errors.lastName = "Please enter your last name";

    if (!values.email) {
      errors.email = "Please enter your email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      course: "",
      timeSlot: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const toastId = toast.loading("Sending...");

      const formData = new FormData();
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
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
          toast.success("Form Submitted Successfully 🎉");
          navigate("/thank-you");
          resetForm();
          setUserCaptcha("");
          setCaptcha(generateCaptcha());
        } else {
          toast.error(data.message || "Submission failed ❌");
        }
      } catch (error) {
        toast.dismiss(toastId);
        toast.error("Error submitting form ❌");
      }
    },
  });
  return (
    <section className="landing_banner">
      <Container>
        <div className="landing_banner_con">
          <div className="landing_banner_img">
            <img src={bannerImg} alt="team-img" />
          </div>
          <div className="landing_banner_form">
            <h2>Start Your Creative Journey</h2>
            <p>
              Fill out the form and our counsellors will get in touch with you
              soon.
            </p>
            <Form onSubmit={formik.handleSubmit} className="form-contact">
              <Row>
                <Col lg={6}>
                  <CustomInput
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.firstName && (
                    <p className="error">{formik.errors.firstName}</p>
                  )}</Col>

                <Col lg={6}>
                  <CustomInput
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.lastName && (
                    <p className="error">{formik.errors.lastName}</p>
                  )}</Col>
                <Col lg={6}>
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <p className="error">{formik.errors.email}</p>
                  )}</Col>
                <Col lg={6}>
                  <CustomInput
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone && (
                    <p className="error">{formik.errors.phone}</p>
                  )}

                </Col>
                <Col lg={6}>
                  <CustomSelect
                    options={courseOptions}
                    name="course"
                    placeholder="Select Course"
                    value={
                      courseOptions.find(
                        (option) => option.value === formik.values.course
                      ) || ""
                    }
                    onChange={(selectedOption) => {
                      formik.setFieldValue("course", selectedOption.value);
                    }}
                  />
                  {formik.errors.course && (
                    <p className="error">{formik.errors.course}</p>
                  )}
                </Col>
                <Col lg={6}>
                  <CustomSelect
                    options={timeSlots}
                    name="timeSlot"
                    placeholder="Select Time Slot"
                    value={
                      timeSlots.find(
                        (slot) => slot.value === formik.values.timeSlot
                      ) || ""
                    }
                    onChange={(selectedOption) =>
                      formik.setFieldValue("timeSlot", selectedOption.value)
                    }
                  />
                  {formik.errors.timeSlot && (
                    <p className="error">{formik.errors.timeSlot}</p>
                  )}
                </Col>

                <Col lg={6}>
                  <div className="captcha-box">
                    <CustomInput
                      type="text"
                      className="captcha-box-input"
                      placeholder="Enter CAPTCHA"
                      value={userCaptcha}
                      onChange={(e) => setUserCaptcha(e.target.value)}
                    />
                    {formik.errors.userCaptcha && (
                      <p className="error">{formik.errors.userCaptcha}</p>
                    )}
                  </div>
                </Col>
                <Col lg={6}>
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
              </Row>
              <div className="form_btn">
                <CommonButton
                  text="Submit"
                  type="submit"
                  className="mt-5 form_btn_text "
                />
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LandingBanner;
