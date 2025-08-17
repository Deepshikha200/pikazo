import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { RedCross } from "../../../../assets/images/Icons/SvgIcons";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import "./FaqsSection.scss";
import { Link } from "react-router-dom";

const FaqsSection = () => {
  const faqs = [
    {
      question: "Why Choose Pikazzo Institute?",
      answer: (
        <>
          <p>
            Pikazzo Institute is the{" "}
            <strong>
              best animation and multimedia institute in Chandigarh,
            </strong>{" "}
            offering industry-focused training in{" "}
            <strong>
              multimedia and 3D animation courses, VFX, filmmaking, and digital
              marketing.
            </strong>{" "}
            Our courses provide:
          </p>
          <ul>
            <li>Hands-on training with real-world projects</li>
            <li>
              Latest industry-standard software like Maya, Blender, After
              Effects, and Adobe Photoshop
            </li>
            <li>Job placement support with top studios and companies</li>
            <li>Internship opportunities and expert mentorship</li>
            <li>Modern labs and extra practice hours for students</li>
          </ul>
        </>
      ),
    },
    {
      question: "Do I need any experience to join?",
      answer: (
        <p>
          No, beginners are welcome! Our{" "}
          <strong>animation and multimedia courses in Chandigarh</strong> start
          from the basics.
        </p>
      ),
    },
    {
      question: "Can I take a free demo class before joining?",
      answer: (
        <p>
          Yes, we offer demo classes at our{" "}
          <strong>
            {" "}
            <Link
              to="/best-3d-animation-degree-courses-in-chandigarh"
              target="_blank"
            >
              {" "}
              animation institute in Chandigarh{" "}
            </Link>
          </strong>{" "}
          so you can decide.
        </p>
      ),
    },
    {
      question: "How do I apply for a course?",
      answer: (
        <p>
          You can apply online or visit our{" "}
          <strong>top animation institute in Chandigarh</strong> for direct
          admission.
        </p>
      ),
    },
    {
      question: "Will I get to work on real projects?",
      answer: (
        <p>
          Yes! Our <strong>best animation and multimedia institute</strong>{" "}
          ensures students build a strong portfolio.
        </p>
      ),
    },
    {
      question: "Will Pikazzo Institute help me get a job?",
      answer: (
        <p>
          Yes, we offer job placement support for careers in{" "}
          <strong>VFX, animation, filmmaking, and graphic design.</strong>
        </p>
      ),
    },
    {
      question: "What kind of jobs can I get after completing the course?",
      answer: (
        <p>
          You can work as a{" "}
          <strong>
            3D Animator, VFX Artist, Motion Designer, Filmmaker, or Graphic
            Designer.
          </strong>
        </p>
      ),
    },
    {
      question:
        "Are you providing a Degree in Animation, Multimedia, or B.Voc?",
      answer: (
        <p>
          Yes! We offer a recognized{" "}
          <strong>
            <Link
              to="/animation-and-multimedia-institute-in-chandigarh"
              target="_blank"
            >
              B.Voc Degree in Animation and Multimedia.
            </Link>
          </strong>{" "}
          Our degree program combines theory with hands-on practice in
          animation, VFX, motion graphics, and digital media — making us one of
          the top animation degree colleges in Chandigarh.
        </p>
      ),
    },
    {
      question: " Can I pay the fee in installments?",
      answer: (
        <p>Yes, flexible installment options are available for all programs.</p>
      ),
    },
  ];

  return (
    <section className=" faqs">
      <Container>
        <CommonHeading heading="Frequently Asked Questions" />
        <Accordion defaultActiveKey="0" className="mt-4">
          {faqs.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>
                <span className="mx-lg-4 mx-0 me-2 me-lg-0">
                  <RedCross />
                </span>
                {item.question}
              </Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FaqsSection;
