import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Graphics1 from "../../../../assets/Student_Work/Graphics/img3.png";
// import Graphics2 from "../../../../assets/Student_Work/Graphics/img4.png";
// import Graphics3 from "../../../../assets/Student_Work/Graphics/img5.png";
import "./EventAndActivity.scss";
import img1 from "../../../../assets/images/banner.jpg";
import img2 from "../../../../assets/images/bannerf1.jpg";
import img4 from "../../../../assets/images/banner1.jpeg";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";

const EventAndActivity = () => {
  return (
    <section className="event">
      <div className="event_heading   text-center mb-5">
        {/* <h2>Event and Activity</h2> */}
        <CommonHeading heading="Event and Activity" />
      </div>
      {/* <Row className="align-items-center">
          <Col lg={6} className="mb-lg-0 mb-5"></Col>
          <Col lg={6}>
            <div className="event_img">
              <img src={Graphics1} alt="" className="event_img1" />
              <img src={Graphics2} alt="" className="event_img2 side-image" />
              <img src={Graphics3} alt="" className="event_img3 side-image" />
            </div>
          </Col>
        </Row> */}
      <div className="event_content">
        <div>
          <div className="orverlay"></div>
          <img src={img1} alt="" className="event_img1" />
        </div>
        <div>
          <div className="orverlay"></div>
          <div className="overlay_text">
            <p className="heaing text-center">Lorem ipsum dolor sit.</p>
            <p className="text-center text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              dolorum?
            </p>
          </div>
          <img src={img2} alt="" className="event_img2" />
        </div>
        <div>
          <div className="orverlay"></div>
          <img src={img4} alt="" className="event_img3" />
        </div>
      </div>
    </section>
  );
};

export default EventAndActivity;
