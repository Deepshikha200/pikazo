import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../component/MainLayout/Layout";
import Home from "../component/Pages/Home/Home";
import StudentWork from "../component/Pages/StudentWork/StudentWork";
import GraphicDesign from "../component/Pages/CoursesInnerPages/CourseDetails/GraphicDesign";
import DiplomainAnimation from "../component/Pages/CoursesInnerPages/CourseDetails/DiplomainAnimation";
import AnimationCourse from "./../component/Pages/CoursesInnerPages/CourseDetails/AnimationCourse";
import Cinematography from "./../component/Pages/CoursesInnerPages/CourseDetails/Cinematography";
import DigitalMarketing from "./../component/Pages/CoursesInnerPages/CourseDetails/DigitalMarketing";
import FlimMaking from "./../component/Pages/CoursesInnerPages/CourseDetails/FlimMaking";
import GameDesign from "./../component/Pages/CoursesInnerPages/CourseDetails/GameDesign";
import MotionGraphics from "./../component/Pages/CoursesInnerPages/CourseDetails/MotionGraphics";
import Photography from "./../component/Pages/CoursesInnerPages/CourseDetails/Photography";
import UiUx from "./../component/Pages/CoursesInnerPages/CourseDetails/UiUx";
import VFXCourse from "./../component/Pages/CoursesInnerPages/CourseDetails/VFXCourse";
import VideoEditing from "./../component/Pages/CoursesInnerPages/CourseDetails/VideoEditing";
import BVocAnimation from "../component/Pages/CoursesInnerPages/CourseDetails/BVocAnimation/BVocAnimation";
import EventAndActivity from "../component/Pages/Home/EventAndActivity/EventAndActivity";
import EventsAndActivites from "../component/Pages/EventsAndActivites/EventsAndActivites";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "student-work",
          element: <StudentWork />,
        },
        {
          path: "events",
          element: <EventsAndActivites />,
        },
        {
          path: "graphic-design",
          element: <GraphicDesign />,
        },
        {
          path: "animation-course",
          element: <AnimationCourse />,
        },
        {
          path: "cinematography-course",
          element: <Cinematography />,
        },
        {
          path: "digital-marketing-course",
          element: <DigitalMarketing />,
        },
        {
          path: "diploma-in-animation",
          element: <DiplomainAnimation />,
        },
        {
          path: "film-making-course",
          element: <FlimMaking />,
        },
        {
          path: "game-design-course",
          element: <GameDesign />,
        },
        {
          path: "motion-graphics-course",
          element: <MotionGraphics />,
        },
        {
          path: "photography-course",
          element: <Photography />,
        },
        {
          path: "ui-ux-course",
          element: <UiUx />,
        },
        {
          path: "vfx-course",
          element: <VFXCourse />,
        },
        {
          path: "video-editing-course",
          element: <VideoEditing />,
        },
        {
          path: "degree-program",
          element: <BVocAnimation />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
