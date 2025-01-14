import { Container } from "react-bootstrap";
import "./Footer.scss";
import logo from "../../assets/images/PIKAZZO-logo.png";
import {
  Instagram,
  Linkdin,
  Twiiter,
} from "../../assets/images/Icons/SvgIcons";
import locationicon from "../../assets/images/locationIcon_dark.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="" height={50} width={190} />
            </div>
            <div className="footer-content-text">
              <p>
                Pikazo Institute, based in Chandigarh, is a premier hub for 2D &
                3D Animation, VFX, Motion Graphics, Photography, and Film
                Making. With over 5 years of experience in industrial training,
                we now offer a commercial platform to help students build
                thriving careers guided by seasoned professionals.
              </p>
            </div>
            <div className="footer-content-icons d-flex gap-4">
              <span>
                <a
                  href="https://www.linkedin.com/company/pikazoinstitute/"
                  target="_blank"
                >
                  <Linkdin />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/pikazoinstitute/"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </span>
              <span>
                <Twiiter />
              </span>
            </div>
          </div>
          <div className="footer-links">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <Link to="/placement">Placement</Link>
              </li>
              <li>
                <Link to="/certificate-verification">
                  Certificate Verification
                </Link>
              </li>

              <li>
                <Link to="/student-work">Student Work</Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <div className="d-flex align-items-center gap-3 footer-content-location">
              <img src={locationicon} alt="" />
              <a
                href="https://www.google.com/maps/search/SCO+176,+Sector+39-D,+Chandigarh/"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                SCO 176, (TOP FLOOR) Sector 39-D, Chandigarh.
              </a>
            </div>
            <a href="tel:+919569473492" className="contact-number">
              +91 95694-73492
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
