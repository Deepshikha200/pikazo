import React from "react";
import BannerSection from "./BannerSection/BannerSection";
import FormPage from "./FormPage/FormPage";
import Awards from "./Awards/Awards";
import Course from "./Course/Course";
import CoursePreview from "./CoursePreview/CoursePreview";
// import Projects from "./Projects/Projects";
import Placements from "./Placements/Placements";
import OurStudent from "./OurStudent/OurStudent";
import EventAndActivity from "./EventAndActivity/EventAndActivity";
import Testimonial from "./Testimonial/Testimonial";
// import GetInTocuh from "../../../common/GetInTocuh/GetInTocuh";
// import DegreeBanner from "./DegreeBanner/DegreeBanner";
import BannerTwo from "./DegreeBanner/BannerTwo";
import AdmissionOpen from "./AdmissionOpen/AdmissionOpen";
import FaqsSection from "./FaqsSection/FaqsSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <BannerSection />
      <FormPage />
      <Awards />
      {/* <AdmissionOpen /> */}
      <BannerTwo />
      {/* <Projects /> */}
      {/* <DegreeBanner /> */}
      <CoursePreview />
      <Course />
      <EventAndActivity onClick={() => navigate("events-and-activities")} />
      <OurStudent />
      <Testimonial />
      <Placements />
      <FaqsSection />
    </>
  );
};

export default Home;
