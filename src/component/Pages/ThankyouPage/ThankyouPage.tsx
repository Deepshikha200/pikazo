import { Container } from "react-bootstrap";
import thankyou from "../../../assets/images/thankyou_img.png";
import "./ThankyouPage.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  FbIcon,
  InstaIcon,
  LDIcon,
  WhatsAppIcon,
  YtIcon,
} from "../../../assets/images/Icons/SvgIcons";
const ThankyouPage = () => {
  const naviagte = useNavigate();

  return (
    <section className="thank_you">
      <Container>
        <div className="thank_you_con">
          <div>
            <img src={thankyou} alt="" />
          </div>
          <h2>Thank you</h2>
          <p>Our Experts Connect with you </p>
          <ul className="d-flex justify-content-center align-items-center gap-4 mb-lg-5 mb-3 ">
            <li>
              <Link to="/">
                <InstaIcon />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FbIcon />
              </Link>
            </li>
            <li>
              <Link to="/">
                <YtIcon />
              </Link>
            </li>
            <li>
              <Link to="/">
                <LDIcon />
              </Link>
            </li>
            <li>
              <Link to="/">
                <WhatsAppIcon />
              </Link>
            </li>
          </ul>
          <button className="thank_you_con_btn" onClick={() => naviagte("/")}>
            Back to Home
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ThankyouPage;
