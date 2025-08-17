import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../component/MainLayout/Layout";
import LandingPageLayout from "../component/MainLayout/LandingPageLayout";
import LandingPage from "../component/Pages/LandingPage/LandingPage";
// import BlogPage from "../component/Pages/BlogPage/BlogPage";

// Lazy load components
const Home = lazy(() => import("../component/Pages/Home/Home"));
const StudentWork = lazy(() =>
  import("../component/Pages/StudentWork/StudentWork")
);
const ThankyouPage = lazy(() =>
  import("../component/Pages/ThankyouPage/ThankyouPage")
);
const CertificatePage = lazy(() =>
  import("../component/Pages/CertificatePage/CertificatePage")
);
const EventsAndActivites = lazy(() =>
  import("../component/Pages/EventsAndActivites/EventsAndActivites")
);
const GraphicDesign = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/GraphicDesign")
);
const AnimationCourse = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/AnimationCourse")
);
const Cinematography = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/Cinematography")
);
const DigitalMarketing = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/DigitalMarketing")
);
const DiplomainAnimation = lazy(() =>
  import(
    "../component/Pages/CoursesInnerPages/CourseDetails/DiplomainAnimation"
  )
);
const FlimMaking = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/FlimMaking")
);
const GameDesign = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/GameDesign")
);
const MotionGraphics = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/MotionGraphics")
);
const Photography = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/Photography")
);
const UiUx = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/UiUx")
);
const VFXCourse = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/VFXCourse")
);
const VideoEditing = lazy(() =>
  import("../component/Pages/CoursesInnerPages/CourseDetails/VideoEditing")
);
const BVocAnimation = lazy(() =>
  import(
    "../component/Pages/CoursesInnerPages/CourseDetails/BVocAnimation/BVocAnimation"
  )
);

// Loading component

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
        path: "students-work",
        element: <StudentWork />,
      },
      {
        path: "thank-you",
        element: <ThankyouPage />,
      },
      {
        path: "certificate-verification",
        element: <CertificatePage />,
      },
      {
        path: "events-and-activities",
        element: <EventsAndActivites />,
      },
      {
        path: "graphic-designing-institute-in-chandigarh",
        element: <GraphicDesign />,
      },
      {
        path: "best-3d-animation-degree-courses-in-chandigarh",
        element: <AnimationCourse />,
      },
      {
        path: "cinematography-course",
        element: <Cinematography />,
      },
      {
        path: "digital-marketing-institute-in-chandigarh",
        element: <DigitalMarketing />,
      },
      {
        path: "diploma-in-animation",
        element: <DiplomainAnimation />,
      },
      {
        path: "film-making-institute-in-chandigarh",
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
        path: "vfx-institute-in-chandigarh",
        element: <VFXCourse />,
      },
      {
        path: "video-editing-course",
        element: <VideoEditing />,
      },
      {
        path: "animation-and-multimedia-institute-in-chandigarh",
        element: <BVocAnimation />,
      },
      // {
      //   path: "blogs",
      //   element: <BlogPage />,
      // },
    ],
  },
  {
    path: "/landing-page",
    element: <LandingPageLayout />,
    children: [
      {
        index: "/landing-page",
        element: <LandingPage />,
      },
    ],
  }
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
