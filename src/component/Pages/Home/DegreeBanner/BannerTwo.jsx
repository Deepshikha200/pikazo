import React, { useState } from "react";
import light_logo from "../../../../assets/images/light_logo.png";
import happy_student from "../../../../assets/images/happy_student.png";
// import update from "../../../../assets/images/updateimg.png";
import dark_logo from "../../../../assets/images/Pikazzo logo dark.png";

import { ButtonArrow } from "../../../../assets/images/Icons/SvgIcons";
import "./DegreeBanner.scss";
import { Container } from "react-bootstrap";
import ContactUsModal from "../../../../common/Modal/ContactUsModal";

const BannerTwo = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="degree_banner_row-two">
        <Container>
          <div className="d-flex justify-content-between align-items-end">
            <div className=" degree_banner_col">
              <div className="dark_text">
                <div className="img_con">
                  <img src={dark_logo} alt="" />
                </div>
                <h2 className="mb-0 ">
                  <h2 className="mb-0 ">
                    Build Your Future with Our <p> Degree Programs! </p>
                  </h2>
                </h2>
                <span>
                  Earn a degree in Animation, VFX, Game Design, or Film Making
                  and build a successful creative career.
                </span>
                <div className="enroll_btn" onClick={() => setShowModal(true)}>
                  <button>Enroll Now</button>
                  <span>
                    <ButtonArrow />
                  </span>
                </div>

                <ContactUsModal
                  show={showModal}
                  handleClose={() => setShowModal(false)}
                />
              </div>
            </div>
            <div>
              <img src={happy_student} alt="" />
            </div>
          </div>
        </Container>
      </section>
      <section className="degree_banner_mobile">
        <Container>
          <div className="d-flex justify-content-between align-items-end">
            <div className=" degree_banner_col">
              <div className="dark_text">
                <h2 className="mb-0 ">
                  <h2 className="mb-0 ">
                    Build Your Future with Our <p> Degree Programs! </p>
                  </h2>
                </h2>
                <span>
                  Earn a degree in Animation, VFX, Game Design, or Film Making
                  and build a successful creative career.
                </span>
                <div className="enroll_btn" onClick={() => setShowModal(true)}>
                  <button>Enroll Now</button>
                  <span>
                    <ButtonArrow />
                  </span>
                </div>

                <ContactUsModal
                  show={showModal}
                  handleClose={() => setShowModal(false)}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BannerTwo;
