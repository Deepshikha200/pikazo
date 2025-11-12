
import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import CommonButton from "../CommonButton/CommonButton";
import logo from "../../assets/images/Pikazzo logo.png";
import ContactUsModal from "../Modal/ContactUsModal";
import { ROUTES } from "../../utils/Constants";
import "./Header.scss";

const Header = ({ onNavbarToggle = () => { }, isScrolled }) => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const navigate = useNavigate(); // ✅ useNavigate for React Router navigation
  const location = useLocation();
  const pathname = location.pathname;

  // ✅ Smooth scroll handler
  const handleNavLinkClick = (path, offset = -100) => {
    setNavbarExpanded(false);
    onNavbarToggle(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(path, offset);
      }, 100);
    } else {
      scrollToSection(path, offset);
    }
  };

  // ✅ Helper to scroll to section
  const scrollToSection = (path, offset) => {
    const element = document.getElementById(path);
    if (element) {
      window.scrollTo({
        top: element.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  // ✅ Course lists
  const certificateCourses = [
    { path: ROUTES.GRAPHIC_DESIGN, name: "Graphic Design Course" },
    { path: ROUTES.MOTION_GRAPHICS, name: "Motion Graphics Course" },
    { path: ROUTES.VIDEO_EDITING, name: "Video Editing Course" },
    { path: ROUTES.ANIMATION, name: "Animation Course" },
    { path: ROUTES.VFX, name: "VFX Course" },
    { path: ROUTES.PHOTOGRAPHY, name: "Photography Course" },
    { path: ROUTES.FILM_MAKING, name: "Film Making Course" },
    { path: ROUTES.CINEMATOGRAPHY, name: "Cinematography Course" },
    { path: ROUTES.DIGITAL_MARKETING, name: "Digital Marketing Course" },
    { path: ROUTES.GAME_DESIGN, name: "Game Design Course" },
    { path: ROUTES.UI_UX, name: "UI/UX Design Course" },
  ];

  const diplomaCourses = [
    { path: ROUTES.DIPLOMA_VFX, name: "Diploma in VFX" },
    { path: ROUTES.DIPLOMA_GRAPHIC, name: "Diploma in Graphic Design" },
    { path: ROUTES.DIPLOMA_GAME, name: "Diploma in Game Design" },
    { path: ROUTES.DIPLOMA_ANIMATION, name: "Diploma in Animation" },
    { path: ROUTES.DIPLOMA_FILM, name: "Diploma in Film Making" },
  ];

  const degreePrograms = [
    { path: ROUTES.DEGREE_ANIMATION, name: "B. Voc Animation & Multimedia" },
  ];

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <Navbar
        expand="lg"
        expanded={navbarExpanded}
        onToggle={(expanded) => setNavbarExpanded(expanded)}
      >
        <Container>
          {/* ✅ Logo */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" className="logo_img" loading="lazy" />
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {/* ✅ Home */}
              <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>
                Home
              </NavLink>

              {/* ✅ Mobile Dropdown */}
              <div className="d-lg-none d-block">
                <NavDropdown title="Our Courses" id="courses-dropdown">
                  <NavDropdown
                    title="Certificate Courses"
                    id="certificate-dropdown"
                    drop="end"
                  >
                    {certificateCourses.map((course, index) => (
                      <NavDropdown.Item
                        as={Link}
                        to={course.path}
                        key={index}
                        onClick={() => setNavbarExpanded(false)}
                      >
                        {course.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  <NavDropdown
                    title="Diploma Courses"
                    id="diploma-dropdown"
                    drop="end"
                  >
                    {diplomaCourses.map((course, index) => (
                      <NavDropdown.Item
                        as={Link}
                        to={course.path}
                        key={index}
                        onClick={() => setNavbarExpanded(false)}
                      >
                        {course.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  <NavDropdown
                    title="Degree Programs"
                    id="degree-dropdown"
                    drop="end"
                  >
                    {degreePrograms.map((program, index) => (
                      <NavDropdown.Item
                        as={Link}
                        to={program.path}
                        key={index}
                        onClick={() => setNavbarExpanded(false)}
                      >
                        {program.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </NavDropdown>
              </div>

              {/* ✅ Desktop Dropdown */}
              <li
                className="nav-link course_menu me-lg-5 me-0 d-none d-lg-block"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                Our Courses
                <div
                  className={`course_menu_dropdown ${isDropdownVisible ? "show" : ""
                    }`}
                  style={{ display: isDropdownVisible ? "block" : "none" }}
                >
                  <ul className="items_list">
                    <li className="heading">
                      <span>Certificate Courses</span>
                      <ul>
                        {certificateCourses.map((course) => (
                          <li key={course.path}>
                            <NavLink
                              to={course.path}
                              onClick={() => setIsDropdownVisible(false)}
                            >
                              {course.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li className="heading">
                      <span>Diploma Courses</span>
                      <ul>
                        {diplomaCourses.map((course) => (
                          <li key={course.path}>
                            <NavLink
                              to={course.path}
                              onClick={() => setIsDropdownVisible(false)}
                            >
                              {course.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li className="heading">
                      <span>Degree Program</span>
                      <ul>
                        {degreePrograms.map((course) => (
                          <li key={course.path}>
                            <NavLink
                              to={course.path}
                              onClick={() => setIsDropdownVisible(false)}
                            >
                              {course.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>

              {/* ✅ About Us & Placements (scrolls only on Home) */}
              {pathname === "/" ? (
                <>
                  <Nav.Link
                    className="nav-link"
                    onClick={() => handleNavLinkClick("about-us")}
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    className="nav-link"
                    onClick={() => handleNavLinkClick("placements")}
                  >
                    Placements
                  </Nav.Link>
                </>
              ) : (
                <>
                  <NavLink
                    to="/#about-us"
                    className="nav-link"
                    onClick={() => handleNavLinkClick("about-us")}
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to="/#placements"
                    className="nav-link"
                    onClick={() => handleNavLinkClick("placements")}
                  >
                    Placements
                  </NavLink>
                </>
              )}

              {/* ✅ Other NavLinks */}
              <NavLink
                to="/certificate-verification"
                className="nav-link"
                onClick={() => setNavbarExpanded(false)}
              >
                Certificate Verification
              </NavLink>
              <NavLink
                to="/events-and-activities"
                className="nav-link"
                onClick={() => setNavbarExpanded(false)}
              >
                Events
              </NavLink>
              <NavLink
                to="/students-work"
                className="nav-link"
                onClick={() => setNavbarExpanded(false)}
              >
                Students Work
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          {/* ✅ Modal + Button */}
          <div className="navbar-buttons ms-auto me-3 me-lg-0">
            <CommonButton
              className="header_btn"
              text={<span className="btn_text">Free demo</span>}
              onClick={() => setShowModal(true)}
            />
            <ContactUsModal
              show={showModal}
              handleClose={() => setShowModal(false)}
            />
          </div>

          {/* ✅ Toggle button for mobile */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="custom-toggler"
          />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
