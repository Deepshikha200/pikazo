import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../component/MainLayout/Layout";
import { ROUTES } from "../utils/Constants";

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

// Router setup using ROUTES
const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.STUDENTS_WORK.replace("/", ""), element: <StudentWork /> },
      { path: ROUTES.GO_BACK.replace("/", ""), element: <ThankyouPage /> },
      {
        path: ROUTES.CERTIFICATE_VERIFICATION.replace("/", ""),
        element: <CertificatePage />,
      },
      { path: ROUTES.EVENTS.replace("/", ""), element: <EventsAndActivites /> },
      {
        path: ROUTES.GRAPHIC_DESIGN.replace("/", ""),
        element: <GraphicDesign />,
      },
      { path: ROUTES.ANIMATION.replace("/", ""), element: <AnimationCourse /> },
      {
        path: ROUTES.CINEMATOGRAPHY.replace("/", ""),
        element: <Cinematography />,
      },
      {
        path: ROUTES.DIGITAL_MARKETING.replace("/", ""),
        element: <DigitalMarketing />,
      },
      {
        path: ROUTES.DIPLOMA_ANIMATION.replace("/", ""),
        element: <DiplomainAnimation />,
      },
      { path: ROUTES.FILM_MAKING.replace("/", ""), element: <FlimMaking /> },
      { path: ROUTES.GAME_DESIGN.replace("/", ""), element: <GameDesign /> },
      {
        path: ROUTES.MOTION_GRAPHICS.replace("/", ""),
        element: <MotionGraphics />,
      },
      { path: ROUTES.PHOTOGRAPHY.replace("/", ""), element: <Photography /> },
      { path: ROUTES.UI_UX.replace("/", ""), element: <UiUx /> },
      { path: ROUTES.VFX.replace("/", ""), element: <VFXCourse /> },
      {
        path: ROUTES.VIDEO_EDITING.replace("/", ""),
        element: <VideoEditing />,
      },
      {
        path: ROUTES.DEGREE_ANIMATION.replace("/", ""),
        element: <BVocAnimation />,
      },
      // Add other routes here if needed
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
