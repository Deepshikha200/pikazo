import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Placements.scss";
import { PlacementImg } from "../../../../assets/Student_Work/ArtImages.js";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading.jsx";

const Placements = () => {
  return (
    <section className="placements">
      <Container>
        <Row>
          <Col lg={3}>
            <CommonHeading heading="Our Top Placements" className="heading" />
          </Col>
          <Col lg={9}>
            <div className="d-flex flex-wrap ">
              {PlacementImg.map((image, index) => (
                <img src={image} alt="" key={index} />
              ))}
            </div>
          </Col>
        </Row>

        {/* {PlacementImg.map((image, index) => ( */}
      </Container>
    </section>
  );
};

export default Placements;
