import React from "react";
import BannerSection from "./BannerSection/BannerSection";
import FormPage from "./FormPage/FormPage";
import Awards from "./Awards/Awards";
import Course from "./Course/Course";
import CoursePreview from "./CoursePreview/CoursePreview";
import Projects from "./Projects/Projects";
import Placements from "./Placements/Placements";
import OurStudent from "./OurStudent/OurStudent";
import EventAndActivity from "./EventAndActivity/EventAndActivity";
import Testimonial from "./Testimonial/Testimonial";
import GetInTocuh from "../../../common/GetInTocuh/GetInTocuh";
import DegreeBanner from "./DegreeBanner/DegreeBanner";

const Home = () => {
  return (
    <>
      <BannerSection />
      <FormPage />
      <Awards />
      <DegreeBanner />
      <Course />
      <CoursePreview />
      <OurStudent />
      <EventAndActivity />
      <Placements />
      <Testimonial />
    </>
  );
};

export default Home;
