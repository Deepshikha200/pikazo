import React from "react";
import BannerSection from "./BannerSection/BannerSection";
import FormPage from "./FormPage/FormPage";
import Awards from "./Awards/Awards";
import Course from "./Course/Course";
import CoursePreview from "./CoursePreview/CoursePreview";
import Projects from "./Projects/Projects";
import Demo from "./demo/Demo";
import Placements from "./Placements/Placements";
import Footer from "../../../common/Footer/Footer";
import Header from "../../../common/Header/Header";
import OurStudent from "./OurStudent/OurStudent";
import EventAndActivity from "./EventAndActivity/EventAndActivity";

const Home = () => {
  return (
    <>
      <BannerSection />
      <FormPage />
      <Awards />
      <Course />
      <CoursePreview />
      <Projects />
      {/* <Demo /> */}
      <OurStudent />
      <Placements />
      <EventAndActivity />
    </>
  );
};

export default Home;
