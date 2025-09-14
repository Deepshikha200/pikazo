import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import CommonButton from "../CommonButton/CommonButton";
import logo from "../../assets/images/Pikazzo logo.png";
import ContactUsModal from "../Modal/ContactUsModal";

import "./Header.scss";

const Header = ({ onNavbarToggle = () => { }, isScrolled }) => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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

  const scrollToSection = (path, offset) => {
    const element = document.getElementById(path);
    if (element) {
      window.scrollTo({
        top: element.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };
  const location = useLocation();
  const pathname = location.pathname;
  const certificateCourses = [
    {
      path: "/graphic-designing-institute-in-chandigarh",
      name: "Graphic Design Course",
    },
    { path: "/motion-graphics-course", name: "Motion Graphics Course" },
    { path: "/video-editing-course", name: "Video Editing Course" },
    {
      path: "/best-3d-animation-degree-courses-in-chandigarh",
      name: "Animation Course",
    },
    {
      path: "/vfx-institute-in-chandigarh",
      name: "VFX Course",
    },
    { path: "/photography-course", name: "Photography" },
    {
      path: "/film-making-institute-in-chandigarh",
      name: "Film Making",
    },
    { path: "/cinematography-course", name: "Cinematography" },
    {
      path: "/digital-marketing-institute-in-chandigarh",
      name: "Digital Marketing",
    },
    { path: "/game-design-course", name: "Game Design" },
    { path: "/ui-ux-course", name: "UI/UX Design Course" },
  ];

  const diplomaCourses = [
    {
      path: "/vfx-institute-in-chandigarh",
      name: "Diploma in VFX ",
    },
    {
      path: "/graphic-designing-institute-in-chandigarh",
      name: "Diploma in Graphic Design",
    },
    { path: "/game-design-course", name: "Diploma in Game Design" },
    {
      path: "/best-3d-animation-degree-courses-in-chandigarh",
      name: "Diploma in Animation",
    },
    {
      path: "/film-making-institute-in-chandigarh/",
      name: "Diploma in Film Making",
    },
  ];

  const degreePrograms = [
    {
      path: "/animation-and-multimedia-institute-in-chandigarh",
      name: "B. Voc Animation & Multimedia",
    },
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
                        onClick={handleNavLinkClick}
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
                        onClick={handleNavLinkClick}
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
                        onClick={handleNavLinkClick}
                      >
                        {program.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </NavDropdown>
              </div>
              <li
                className="nav-link course_menu me-lg-5 me-0 d-none d-lg-block"
                onMouseEnter={() => setIsDropdownVisible(true)}
                onClick={() => setIsDropdownVisible(true)}
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
                      <span onClick={() => handleHeadingClick("certificate")}>
                        Certificate Courses
                      </span>
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
                      <span onClick={() => handleHeadingClick("diploma")}>
                        Diploma Courses
                      </span>
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
                      <span onClick={() => handleHeadingClick("degree")}>
                        Degree Program
                      </span>
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
              {pathname === "/" ? (
                <>
                  <Nav.Link
                    href="#about-us"
                    className="nav-link"
                    onClick={() => handleNavLinkClick("about-us")}
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href="#placements"
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

              <NavLink
                to="/certificate-verification"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Certificate Verification
              </NavLink>
              <NavLink
                to="/events-and-activities"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Events
                {/* and Activities */}
              </NavLink>
              <NavLink
                to="/students-work"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Students Work
              </NavLink>

              {/* <a
                href="
              https://pikazoinstitute.com/blog"
                className="nav-link"
              >
                Blogs
              </a> */}
              {/* <NavLink
                to="/blogs"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Blogs
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>

          <div className="navbar-buttons ms-auto me-3 me-lg-0">
            <CommonButton
              text="Free demo"
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
