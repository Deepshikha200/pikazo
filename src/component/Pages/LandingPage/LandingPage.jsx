import Awards from '../Home/Awards/Awards';
import BannerTwo from '../Home/DegreeBanner/BannerTwo';
import CoursePreview from '../Home/CoursePreview/CoursePreview';
import Course from '../Home/Course/Course';
import EventAndActivity from '../Home/EventAndActivity/EventAndActivity';
import OurStudent from '../Home/OurStudent/OurStudent';
import Testimonial from '../Home/Testimonial/Testimonial';
import Placements from '../Home/Placements/Placements';
import FaqsSection from '../Home/FaqsSection/FaqsSection';
import { useNavigate } from 'react-router-dom';
import LandingBanner from './LandingBanner/LandingBanner';
import "./LandingPage.scss";


const LandingPage = () => {

  const navigate = useNavigate();

  return (
    <div className='landing_page'>
      <LandingBanner />
      <Awards />
      <BannerTwo />
      <CoursePreview />
      <Course />
      <EventAndActivity onClick={() => navigate("/")} />
      <OurStudent />
      <Testimonial />
      <Placements />
      <FaqsSection />
    </div>
  )
}

export default LandingPage