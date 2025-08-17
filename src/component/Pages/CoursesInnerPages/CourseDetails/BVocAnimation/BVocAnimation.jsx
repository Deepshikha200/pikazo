import React from "react";
import clgimg from "../../../../../assets/images/clgimg.webp";
import { Col, Container, Row } from "react-bootstrap";
import "./BVocAnimation.scss";
import GetInTocuh from "../../../../../common/GetInTocuh/GetInTocuh";

const BVocAnimation = () => {
  return (
    <section className="b_voc">
      <img src={clgimg} alt="" />
      <Container>
        <div className="text-center my-5">
          <h2 className="heading">B.Voc Animation & Multimedia</h2>
        </div>

        <Row>
          <Col lg={8} className="">
            <h3 className="b_voc_heading">Course Overview</h3>
            <div className="b_voc_content">
              <h3>Degree in B.Voc Animation & Multimedia</h3>
              <p className="b_voc_text">
                At <strong> Pikazzo Institute,</strong> Step into the
                captivating world of Animation and Visual Effects (VFX) with
                Pikazo, where creativity and technology merge to breathe life
                into imaginations. Today, let’s delve deep into a dedicated
                degree program in this dynamic field. Join us as we uncover the
                intricacies of pursuing a degree in Animation & VFX.
              </p>

              <div className="b_voc_section">
                <div>
                  <span>Section 1: Building a Strong Basis</span>
                  <p>
                    The foundation for a career in this fascinating field is
                    laid by a degree program in animation and visual effects.
                    Students go right into learning foundational skills like
                    animation techniques, design ideas, and drawing. Through
                    character design, digital modeling, and storytelling-focused
                    courses, they build a strong foundation that is necessary
                    for success in the industry.
                  </p>
                </div>
                <div>
                  <span>Section 2: Embracing Digital</span>
                  <p>
                    It’s essential to keep up with the latest technological
                    advancements in the digital world. Students enrolled in
                    degree programs in Animation & VFX have practical exposure
                    with state-of-the-art tools and industry-standard software.
                    They learn how to use technology, from animation platforms
                    to 3D modeling applications, to realize their creative
                    dreams.
                  </p>
                </div>
                <div>
                  <span>Section 3: Professional Advice</span>
                  <p>
                    The advice of seasoned instructors is very helpful in
                    molding future animators and VFX artists. Mentorship,
                    insight sharing, and practical knowledge sharing are
                    provided by professors with industry expertise. Under their
                    direction, students can better understand difficult ideas
                    and hone their abilities, putting them in a position to face
                    industry obstacles.
                  </p>
                </div>{" "}
                <div>
                  <span>
                    Section 4: Project-Based Learning for Applied Experience
                  </span>
                  <p>
                    The foundation of degree programs in Animation & VFX is
                    project-based learning. Students engage in real-world
                    projects such as designing VFX sequences and animating short
                    films. Through practical experience, kids pick up skills
                    like innovation, teamwork, and problem-solving—all necessary
                    for success in the field.
                  </p>
                </div>{" "}
                <div>
                  <span>Section 5: Links with Industry</span>
                  <p>
                    Students gain important insights into industry trends and
                    practices through collaborations with professionals in the
                    field. Events such as company visits, guest lectures, and
                    workshops present chances for professional growth and
                    networking. These relationships frequently result in
                    internship and employment opportunities, which helps
                    students advance in their careers.
                  </p>
                </div>{" "}
                <div>
                  <span>Section 6: Life Outside of the Classroom</span>
                  <p>
                    Activities outside of the classroom are essential to a
                    well-rounded education. Students enrolled in degree programs
                    in animation and visual effects have the chance to take part
                    in animation festivals, contests, and industry gatherings.
                    These encounters enhance their educational journey and
                    encourage originality and creativity.
                  </p>
                </div>
                <div>
                  <span>Section 7: Expert Courses</span>
                  <p>
                    Activities outside of the classroom are essential to a Many
                    employment options are available to those with a degree in
                    animation and visual effects. Graduates can work for
                    animation studios, production firms for movies and
                    television, gaming companies, advertising agencies, and
                    more. They support the production of visually stunning
                    content across a range of media industries with their
                    knowledge and abilities.
                  </p>
                </div>
              </div>
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

export default BVocAnimation;
