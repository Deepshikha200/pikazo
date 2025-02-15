import React, { useState, useEffect, useRef } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CommonButton from "../CommonButton/CommonButton";
import "./Header.scss";
import logo from "../../assets/images/PIKAZZO-logo.png";
import ContactUsModal from "../Modal/ContactUsModal";

const Header = ({ onNavbarToggle = () => {}, isScrolled }) => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    courses: false,
    certificateCourses: false,
    diplomaCourses: false,
    degreePrograms: false,
  });

  const handleMouseEnter = (key) => {
    setDropdownState((prevState) => ({ ...prevState, [key]: true }));
  };

  const handleMouseLeave = (key) => {
    setDropdownState((prevState) => ({ ...prevState, [key]: false }));
  };

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
            <Navbar.Brand className="">
              <img
                src={logo}
                alt="logo"
                className="logo_img d-lg-none d-block "
              />
            </Navbar.Brand>
            <Nav className="mx-auto">
              <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>
                Home
              </NavLink>

              {/* Main Dropdown for Courses */}
              <NavDropdown
                title="Our Courses"
                id="courses-dropdown"
                onMouseEnter={() => handleMouseEnter("courses")}
                onMouseLeave={() => handleMouseLeave("courses")}
                show={dropdownState.courses}
              >
                {/* Certificate Courses Dropdown */}
                <NavDropdown
                  title="Certificate Courses"
                  id="certificate-dropdown"
                  onMouseEnter={() => handleMouseEnter("certificateCourses")}
                  onMouseLeave={() => handleMouseLeave("certificateCourses")}
                  show={dropdownState.certificateCourses}
                >
                  {certificateCourses.map((course) => (
                    <NavDropdown.Item key={course.path} href={course.path}>
                      {course.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>

                {/* Diploma Courses Dropdown */}
                <NavDropdown
                  title="Diploma Courses"
                  id="diploma-dropdown"
                  onMouseEnter={() => handleMouseEnter("diplomaCourses")}
                  onMouseLeave={() => handleMouseLeave("diplomaCourses")}
                  show={dropdownState.diplomaCourses}
                >
                  {diplomaCourses.map((course) => (
                    <NavDropdown.Item key={course.path} href={course.path}>
                      {course.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>

                {/* Degree Programs Dropdown */}
                <NavDropdown
                  title="Degree Programs"
                  id="degree-dropdown"
                  onMouseEnter={() => handleMouseEnter("degreePrograms")}
                  onMouseLeave={() => handleMouseLeave("degreePrograms")}
                  show={dropdownState.degreePrograms}
                >
                  {degreePrograms.map((course) => (
                    <NavDropdown.Item key={course.path} href={course.path}>
                      {course.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </NavDropdown>

              <Nav.Link
                href="#about-us"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                About Us
              </Nav.Link>
              {/* <NavLink
                to="/events"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Events
              </NavLink> */}
              <NavLink
                href="#placement"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Placement
              </NavLink>
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
              {/* <Nav.Link
                href="#about-us"
                className="nav-link  "
                onClick={handleNavLinkClick}
              >
                Contact Us
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
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
