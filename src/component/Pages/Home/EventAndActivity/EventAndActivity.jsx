import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Graphics1 from "../../../../assets/Student_Work/Graphics/img3.png";
import Graphics2 from "../../../../assets/Student_Work/Graphics/img4.png";
import Graphics3 from "../../../../assets/Student_Work/Graphics/img5.png";
import "./EventAndActivity.scss";

const EventAndActivity = () => {
  return (
    <section className="event">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="event_heading">
              <h2>Event and Activity</h2>
            </div>
          </Col>
          <Col lg={6}>
            <div className="event_img">
              <img src={Graphics1} alt="" className="event_img1" />
              <img src={Graphics2} alt="" className="event_img2 side-image" />
              <img src={Graphics3} alt="" className="event_img3 side-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EventAndActivity;
