import React from "react";
import { Container } from "react-bootstrap";
import "./Testimonial.scss";
import CommonButton from "../../../../common/CommonButton/CommonButton";
import TestimonialModal from "../../../../common/Modal/TestimonialModal/TestimonialModal";

const Testimonial = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <section className="testimonial">
      <Container>
        <CommonButton
          text="Click Here to view our testimonials"
          className="w-25 d-block mx-auto "
          onClick={() => setShowModal(true)} // Open modal
        />
        <TestimonialModal show={showModal} handleClose={handleClose} />
      </Container>
    </section>
  );
};

export default Testimonial;
