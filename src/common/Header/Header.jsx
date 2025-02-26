import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CommonButton from "../CommonButton/CommonButton";
import "./Header.scss";
import logo from "../../assets/images/PIKAZZO-logo.png";
import ContactUsModal from "../Modal/ContactUsModal";

const Header = ({ onNavbarToggle = () => {}, isScrolled }) => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleNavLinkClick = () => {
    setNavbarExpanded(false);
    onNavbarToggle(false);
  };

  const certificateCourses = [
    { path: "/graphic-design", name: "Graphic Design Course" },
    { path: "/motion-graphics-course", name: "Motion Graphics Course" },
    { path: "/video-editing-course", name: "Video Editing Course" },
    { path: "/animation-course", name: "Animation Course" },
    { path: "/vfx-course", name: "VFX Course" },
    { path: "/photography-course", name: "Photography" },
    { path: "/film-making-course", name: "Film Making" },
    { path: "/cinematography-course", name: "Cinematography" },
    { path: "/digital-marketing-course", name: "Digital Marketing" },
    { path: "/game-design-course", name: "Game Design" },
    { path: "/ui-ux-course", name: "UI/UX Design Course" },
  ];

  const diplomaCourses = [
    { path: "/diploma-in-animation", name: "Diploma in VFX and Animation" },
  ];
  const degreePrograms = [
    { path: "/degree-program", name: "B. Voc Animation & Multimedia" },
  ];

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <Navbar
        expand="lg"
        expanded={navbarExpanded}
        onToggle={(expanded) => setNavbarExpanded(expanded)}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" onClick={handleNavLinkClick}>
              <img src={logo} alt="logo" className="logo_img" />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>
                Home
              </NavLink>

              <li
                className="nav-link course_menu me-lg-5 me-0"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onMouseLeave={() => setIsDropdownVisible(false)}
              >
                Our Courses
                <div
                  className={
                    isDropdownVisible
                      ? "course_menu_dropdown show"
                      : "course_menu_dropdown"
                  }
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
                              onClick={handleNavLinkClick}
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
                              onClick={handleNavLinkClick}
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
                              onClick={handleNavLinkClick}
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
              <Nav.Link
                href="#about-us"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#placement"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Placement
              </Nav.Link>
              <NavLink
                to="/certificate-verification"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Certificate Verification
              </NavLink>
              <NavLink
                to="/student-work"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Student Work
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="custom-toggler"
          />
          <div className="navbar-buttons ms-auto">
            <CommonButton
              text="Let's Talk"
              className="header_btn"
              onClick={() => setShowModal(true)}
            />
            <ContactUsModal
              show={showModal}
              handleClose={() => setShowModal(false)}
            />
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
