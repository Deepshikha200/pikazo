import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "./../UI/CustomInput/CustomInput";
import CommonButton from "../CommonButton/CommonButton";
import { Col, Form, Row } from "react-bootstrap";
import CustomSelect from "./../UI/Select/CustomSelect";
import "./GetInTocuh.scss";
import { RefreshButton } from "../../assets/images/Icons/SvgIcons";

const GetInTocuh = () => {
  const [result, setResult] = useState("");
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

    // ✅ Add CAPTCHA validation here
    if (!userCaptcha) {
      errors.userCaptcha = "Please enter the CAPTCHA";
    } else if (userCaptcha !== captcha) {
      errors.userCaptcha = "CAPTCHA does not match";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", course: "" },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setResult("Sending....");
      const formData = new FormData();
      formData.append("access_key", "a6baaa41-ff5b-45a6-8e46-ffff5b66245e");
      // formData.append("access_key", "bb345f89-5331-4375-8bd4-2b09315e4945");

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
          resetForm(); // Reset Formik fields
          setUserCaptcha(""); // ✅ Reset CAPTCHA input
          setCaptcha(generateCaptcha()); // ✅ Generate new CAPTCHA
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
      <h2 className="mb-3">Enquiry </h2>
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
          <CustomSelect
            options={courseOptions}
            name="course"
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
        </div>

        <div className="captcha-box mt-4">
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
          <Row className="align-items-center ">
            <Col lg={8}>
              <div className="captcha">
                <span
                  
                >
                  {captcha}
                </span>
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
      <span>{result}</span>
    </div>
  );
};

export default GetInTocuh;
