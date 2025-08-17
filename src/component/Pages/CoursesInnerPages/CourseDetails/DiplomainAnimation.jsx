import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../CoursesInnerPages.scss";
import GetInTocuh from "./../../../../common/GetInTocuh/GetInTocuh";

const DiplomainAnimation = () => {
  return (
    <section className="diploma py-60">
      <Container>
        <div className="text-center">
          <h2 className="d-inline-block diploma_heading">
            Diploma in Animation and VFX
          </h2>
        </div>
        <Row>
          <Col lg={8}>
            <div className="diploma_course">
              <h3>Course Overview</h3>
              <h4>Best Diploma in Animation and VFX</h4>

              <p>
                At Pikazzo Institute, we offer Diploma in Animation and VFX and
                its time period is two years. During this time period we provide
                proper training to the students by which they gets knowledge
                about technical skills that really matter in the industry. At
                this place students learn
                <strong>
                  2D and 3D animation techniques, use of complex software,
                  tactics related to VFX.
                </strong>
                By doing the Diploma in VFX and Animation students gets deep
                knowledge of design field and then
                <strong>expert in VFX and Animation.</strong>
                Our course curriculum is designed by best skilled trainers from
                industry so that it prepares the students for upcoming
                challenges which they will face in professional life. This
                programme helps the students in skill development and project
                management techniques as well as software training.
              </p>
              <p>
                The greatest learning during doing the
                <strong> Diploma in VFX and Animation </strong>is developing a
                sharp eye for detail. Students will become familiar with the
                smallest details
              </p>
              <p>
                Career opportunities after doing Diploma in VFX and Animation:
              </p>
              <ul className="mb-4">
                <li>
                  <strong>Post Production Artist: </strong>Motion graphic
                  designer, VFX artist, VFX supervisor, Rotoscoping artist,
                  Animator render wrangler etc.
                </li>
                <li className="my-4">
                  <strong>Pre Production Artist: </strong>Background artist,
                  layout artist, Concept artist, Character animator, Content
                  developer, Storyboard artist etc.
                </li>
                <li>
                  <strong>Other Jobs associated with VFX and Animation:</strong>
                  Music producer, Film director, Film/video editor, advertising
                  art director, TV production coordinator etc.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <GetInTocuh />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DiplomainAnimation;
