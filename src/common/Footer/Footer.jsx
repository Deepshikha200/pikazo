import { Container } from "react-bootstrap";
// import logo from "../../assets/images/PIKAZZO-logo.png";
import logo from "../../assets/images/Pikazzo logo.png";

import {
  Instagram,
  Linkdin,
  FaceBookIcon,
  Youtube,
} from "../../assets/images/Icons/SvgIcons";
import locationicon from "../../assets/images/locationIcon_dark.png";
import { Link, useLocation } from "react-router-dom";
import "./Footer.scss";
import { ROUTES } from "../../utils/Constants";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <footer className="footer">
      <Container>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="Pikazzo Logo" loading="lazy" />
            </div>
            <div className="footer-content-text">
              <p>
                Pikazzo Institute, based in Chandigarh, is a premier hub for 2D
                & 3D Animation, VFX, Motion Graphics, Photography, and Film
                Making. With over 9+ years of experience in industrial training,
                we now offer a commercial platform to help students build
                thriving careers guided by seasoned professionals.
              </p>
            </div>
            <div className="footer-content-icons d-flex gap-4">
              <span>
                <a
                  href="https://www.linkedin.com/company/pikazoinstitute/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkdin />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/pikazzoinstitute/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </span>
              <span>
                <a
                  href="https://www.youtube.com/@pikazzoinstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube />
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/PikazoInstitute/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaceBookIcon />
                </a>
              </span>
            </div>
          </div>

          <div className="footer-links">
            <h5>Quick Links</h5>
            <div className="footer-links_ul">
              <ul>
                <li>
                  {pathname === ROUTES.HOME ? (
                    <a href="#banner">Home</a>
                  ) : (
                    <Link to={ROUTES.HOME}>Home</Link>
                  )}
                </li>
                <li>
                  {pathname === ROUTES.HOME ? (
                    <a href="#about-us">About Us</a>
                  ) : (
                    <Link to={ROUTES.ABOUT_US}>About Us</Link>
                  )}
                </li>
                <li>
                  {pathname === ROUTES.HOME ? (
                    <a href="#placements">Placement</a>
                  ) : (
                    <Link to={ROUTES.PLACEMENTS}>Placement</Link>
                  )}
                </li>
                <li>
                  <Link to={ROUTES.STUDENTS_WORK}>Student Work</Link>
                </li>
                <li>
                  <Link to={ROUTES.EVENTS}>Events</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link to={ROUTES.GRAPHIC_DESIGN}>Graphic Design Course</Link>
                </li>
                <li>
                  <Link to={ROUTES.MOTION_GRAPHICS}>
                    Motion Graphics Course
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.VFX}>VFX Course</Link>
                </li>
                <li>
                  <Link to={ROUTES.ANIMATION}>Animation Course</Link>
                </li>
                <li>
                  <Link to={ROUTES.DEGREE_ANIMATION}>
                    B. Voc Animation & Multimedia
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to={ROUTES.DIPLOMA_VFX}>Diploma in VFX</Link>
                </li>
                <li>
                  <Link to={ROUTES.DIPLOMA_GRAPHIC}>
                    Diploma in Graphic Design
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.DIPLOMA_GAME}>Diploma in Game Design</Link>
                </li>
                <li>
                  <Link to={ROUTES.DIPLOMA_ANIMATION}>Diploma in Animation</Link>
                </li>
                <li>
                  <Link to={ROUTES.DIPLOMA_FILM}>
                    Diploma in Film Making
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-links">
            <div className="d-flex align-items-center flex-wrap gap-3 footer-content-location">
              <img src={locationicon} alt="Location" loading="lazy"/>
              <a
                href="https://www.google.com/maps/search/SCO+176,+Sector+39-D,+Chandigarh/"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                SCO 176, (TOP FLOOR) <br /> Sector 39-D, Chandigarh.
              </a>
            </div>

            <div className="d-flex align-items-center flex-wrap gap-3 gap-xl-5 mb-5">
              <a href="tel:+919569473492" className="contact-number">
                +91 95694-73492
              </a>
              <a href="tel:+919056513316" className="contact-number">
                +91 90565-13316
              </a>
            </div>

            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.1092426969517!2d76.72523821102091!3d30.743432785009652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed5e02ccbbcf%3A0xfa77da377849463f!2sPikazzo%20Institute%20-%20Best%20Animation%20%26%20VFX%20Institute!5e0!3m2!1sen!2sin!4v1757826976220!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pikazzo Location"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
