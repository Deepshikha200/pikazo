import { Col, Container, Form, Row } from "react-bootstrap";
import GetInTocuh from "../../../../common/GetInTocuh/GetInTocuh";
import Marquee from "react-fast-marquee";
import "./AdmissionOpen.scss";
import admision_img from "../../../../assets/images/admision_img.jpeg";

const AdmissionOpen = () => {
  return (
    <div className="admission_open_container">
      <section className="admission_open  ">
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          className="moving_text mb-lg-5 mb-3"
        >
          Admission open &nbsp; Admission open &nbsp; Admission open
          &nbsp;Admission open&nbsp; Admission open &nbsp;Admission open
          &nbsp;Admission open&nbsp; Admission open&nbsp; Admission open
          &nbsp;Admission open&nbsp; Admission open&nbsp; Admission open
          &nbsp;Admission open&nbsp; Admission open &nbsp;Admission open
          &nbsp;Admission open&nbsp; Admission open&nbsp; Admission open
          &nbsp;Admission open&nbsp;
        </Marquee>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={4}>
              <div className="admission_open_form ps-5">
                <h3 className=" mb-5">Apply Now For Scholarship </h3>
                <GetInTocuh />
              </div>
            </Col>
            <Col lg={4}>
              <div className="admission_open_col pe-5">
                <img src={admision_img} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AdmissionOpen;
