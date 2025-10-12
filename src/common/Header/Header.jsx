import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import CommonButton from "../CommonButton/CommonButton";
import logo from "../../assets/images/Pikazzo logo.png";
import ContactUsModal from "../Modal/ContactUsModal";
import { ROUTES } from "../../utils/Constants";
import "./Header.scss";
import gsap from "gsap";

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
    { path: ROUTES.DIPLOMA_VFX, name: "Diploma in VFX " },
    { path: ROUTES.DIPLOMA_GRAPHIC, name: "Diploma in Graphic Design" },
    { path: ROUTES.DIPLOMA_GAME, name: "Diploma in Game Design" },
    { path: ROUTES.DIPLOMA_ANIMATION, name: "Diploma in Animation" },
    { path: ROUTES.DIPLOMA_FILM, name: "Diploma in Film Making" },
  ];

  const degreePrograms = [
    { path: ROUTES.DEGREE_ANIMATION, name: "B. Voc Animation & Multimedia" },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".header_btn",
      { scale: 0.8 }, // starting smaller
      {
        scale: 1.2,   // expand to 1.2x size
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,   // shrink back automatically
        repeat: -1,   // infinite loop
      }
    );
  }, []);



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
              <img src={logo} alt="logo" className="logo_img" loading="lazy" />
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
              // text="Free demo"
              className="header_btn"
              text={<span className="btn_text">Free demo</span>}
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


// import React, { useState } from "react";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../assets/images/Pikazzo logo.png";
// import CommonButton from "../CommonButton/CommonButton";
// import ContactUsModal from "../Modal/ContactUsModal";
// import { ROUTES } from "../../utils/Constants";
// import "./Header.scss";

// const Header = ({ onNavbarToggle = () => { }, isScrolled }) => {
//   const [navbarExpanded, setNavbarExpanded] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const pathname = location.pathname;

//   const certificateCourses = [
//     { path: ROUTES.GRAPHIC_DESIGN, name: "Graphic Design Course" },
//     { path: ROUTES.MOTION_GRAPHICS, name: "Motion Graphics Course" },
//     { path: ROUTES.VIDEO_EDITING, name: "Video Editing Course" },
//     { path: ROUTES.ANIMATION, name: "Animation Course" },
//     { path: ROUTES.VFX, name: "VFX Course" },
//     { path: ROUTES.PHOTOGRAPHY, name: "Photography Course" },
//     { path: ROUTES.FILM_MAKING, name: "Film Making Course" },
//     { path: ROUTES.CINEMATOGRAPHY, name: "Cinematography Course" },
//     { path: ROUTES.DIGITAL_MARKETING, name: "Digital Marketing Course" },
//     { path: ROUTES.GAME_DESIGN, name: "Game Design Course" },
//     { path: ROUTES.UI_UX, name: "UI/UX Design Course" },
//   ];

//   const diplomaCourses = [
//     { path: ROUTES.DIPLOMA_VFX, name: "Diploma in VFX " },
//     { path: ROUTES.DIPLOMA_GRAPHIC, name: "Diploma in Graphic Design" },
//     { path: ROUTES.DIPLOMA_GAME, name: "Diploma in Game Design" },
//     { path: ROUTES.DIPLOMA_ANIMATION, name: "Diploma in Animation" },
//     { path: ROUTES.DIPLOMA_FILM, name: "Diploma in Film Making" },
//   ];

//   const degreePrograms = [
//     { path: ROUTES.DEGREE_ANIMATION, name: "B. Voc Animation & Multimedia" },
//   ];

//   const handleNavLinkClick = (path, offset = -100) => {
//     setNavbarExpanded(false);
//     onNavbarToggle(false);
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => scrollToSection(path, offset), 100);
//     } else {
//       scrollToSection(path, offset);
//     }
//   };

//   const scrollToSection = (id, offset) => {
//     const el = document.getElementById(id);
//     if (el) {
//       window.scrollTo({
//         top: el.offsetTop + offset,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
//       <div className="navbar">
//         <div className="container d-flex align-items-center justify-content-between">
//           <Link to="/" onClick={() => handleNavLinkClick("/")}>
//             <img src={logo} alt="logo" className="logo_img" loading="lazy" />
//           </Link>


//           <div className={`navbar-collapse ${navbarExpanded ? "show" : ""}`}>
//             <ul className="navbar-nav mx-auto">
//               <li>
//                 <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>
//                   Home
//                 </NavLink>
//               </li>

//               <li className="d-lg-none d-block nav-link">
//                 <details>
//                   <summary>Our Courses</summary>
//                   <details>
//                     <summary>Certificate Courses</summary>
//                     {certificateCourses.map((course, i) => (
//                       <NavLink key={i} to={course.path} className="nav-link" onClick={handleNavLinkClick}>
//                         {course.name}
//                       </NavLink>
//                     ))}
//                   </details>
//                   <details>
//                     <summary>Diploma Courses</summary>
//                     {diplomaCourses.map((course, i) => (
//                       <NavLink key={i} to={course.path} className="nav-link" onClick={handleNavLinkClick}>
//                         {course.name}
//                       </NavLink>
//                     ))}
//                   </details>
//                   <details>
//                     <summary>Degree Programs</summary>
//                     {degreePrograms.map((course, i) => (
//                       <NavLink key={i} to={course.path} className="nav-link" onClick={handleNavLinkClick}>
//                         {course.name}
//                       </NavLink>
//                     ))}
//                   </details>
//                 </details>
//               </li>

//               {/* Desktop Mega Menu */}
//               <li
//                 className="nav-link course_menu me-lg-5 me-0 d-none d-lg-block"
//                 onMouseEnter={() => setIsDropdownVisible(true)}
//                 onClick={() => setIsDropdownVisible(true)}
//                 onMouseLeave={() => setIsDropdownVisible(false)}
//               >
//                 Our Courses
//                 <div
//                   className={`course_menu_dropdown ${isDropdownVisible ? "show" : ""}`}
//                   style={{ display: isDropdownVisible ? "block" : "none" }}
//                 >
//                   <ul className="items_list">
//                     <li className="heading">
//                       <span>Certificate Courses</span>
//                       <ul>
//                         {certificateCourses.map((course) => (
//                           <li key={course.path}>
//                             <NavLink to={course.path} onClick={handleNavLinkClick}>
//                               {course.name}
//                             </NavLink>
//                           </li>
//                         ))}
//                       </ul>
//                     </li>
//                     <li className="heading">
//                       <span>Diploma Courses</span>
//                       <ul>
//                         {diplomaCourses.map((course) => (
//                           <li key={course.path}>
//                             <NavLink to={course.path} onClick={handleNavLinkClick}>
//                               {course.name}
//                             </NavLink>
//                           </li>
//                         ))}
//                       </ul>
//                     </li>
//                     <li className="heading">
//                       <span>Degree Programs</span>
//                       <ul>
//                         {degreePrograms.map((course) => (
//                           <li key={course.path}>
//                             <NavLink to={course.path} onClick={handleNavLinkClick}>
//                               {course.name}
//                             </NavLink>
//                           </li>
//                         ))}
//                       </ul>
//                     </li>
//                   </ul>
//                 </div>
//               </li>

//               {/* Static Nav Items */}
//               <li>
//                 <NavLink
//                   to="/#about-us"
//                   className="nav-link"
//                   onClick={() => handleNavLinkClick("about-us")}
//                 >
//                   About Us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/#placements"
//                   className="nav-link"
//                   onClick={() => handleNavLinkClick("placements")}
//                 >
//                   Placements
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/certificate-verification" className="nav-link" onClick={handleNavLinkClick}>
//                   Certificate Verification
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/events-and-activities" className="nav-link" onClick={handleNavLinkClick}>
//                   Events
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/students-work" className="nav-link" onClick={handleNavLinkClick}>
//                   Students Work
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           <div className="navbar-buttons ms-auto me-3 me-lg-0">
//             <CommonButton
//               text="Free demo"
//               className="header_btn"
//               onClick={() => setShowModal(true)}
//             />
//             <ContactUsModal show={showModal} handleClose={() => setShowModal(false)} />
//           </div>

//           <button
//             className="navbar-toggler"
//             onClick={() => {
//               setNavbarExpanded(!navbarExpanded);
//               onNavbarToggle(!navbarExpanded);
//             }}
//           >
//             <div className="navbar-toggler-icon" />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
