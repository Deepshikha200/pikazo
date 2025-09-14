import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import vfx from "../../../../assets/images/vfx.mp4";
import ui from "../../../../assets/images/UIUX.mp4";
import market from "../../../../assets/images/market.mp4";
import web from "../../../../assets/images/web.mp4";
import "./CoursePreview.scss";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import thumbnail1 from "../../../../assets/images/Website thumbnails/Animtation.jpg";
import thumbnail2 from "../../../../assets/images/Website thumbnails/DigtialMarketing.jpg";
import thumbnail3 from "../../../../assets/images/Website thumbnails/FilmMaking.jpg";
import thumbnail4 from "../../../../assets/images/Website thumbnails/GameDesign.jpg";
import thumbnail5 from "../../../../assets/images/Website thumbnails/vfx.jpeg";
import thumbnail6 from "../../../../assets/images/Website thumbnails/UiUX.jpg";
import thumbnail7 from "../../../../assets/images/Website thumbnails/VideoEditing.jpg";
import thumbnail8 from "../../../../assets/images/Website thumbnails/WebGraphics.jpg";
// import { motion } from "framer-motion";

const CoursePreview = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [expandedCourses, setExpandedCourses] = useState({});

  const toggleReadMore = (id) => {
    setExpandedCourses((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const courses = [
    {
      id: "vfx",
      title: "VFX",
      url: vfx,
      description:
        "This significant course includes Roto, Paint & Prep, Green Screen, CC & CG, Camera Tracking, Match Move, Face Tracking, and 2D & 3D Compositing.",
      thumbnail: thumbnail5,
    },
    {
      id: "ui",
      title: "UI/UX ",
      url: ui,
      description:
        "This course focuses on designing intuitive and engaging user experiences and interfaces for digital products. Learn principles of user research, wireframing, prototyping, usability testing, and visual design to create user-friendly websites, mobile apps, and software. Master industry-standard tools for creating impactful and accessible digital experiences.",
      thumbnail: thumbnail6,
    },
    {
      id: "market",
      title: "Digital Marketing",
      url: market,
      description:
        "Pikazzo offers certified SEO courses. This course provides full-fledged SEO services and is affordable for any student.",
      thumbnail: thumbnail2,
    },
    {
      id: "web",
      title: "Web & Graphics",
      url: web,
      description:
        "In this course, we include Graphics and web designing, brochure, business kit, Visiting cards, Poster making, Web template, Infographics, etc.",
      thumbnail: thumbnail8,
    },
    {
      id: "animation",
      title: "Animation",
      url: "https://vimeo.com/934760458",
      description:
        "We prepare you for 2D & 3D animation, helping you master modeling, animation, lighting, rendering, performance, and compositing.",
      thumbnail: thumbnail1,
    },
    {
      id: "video-editing",
      title: "Video Editing",
      url: "https://vimeo.com/935358980",
      description:
        "This course includes video editing on advanced technologies, motion graphics, creating commercial ads, and basics of sound engineering.",
      thumbnail: thumbnail7,
    },
    {
      id: "film-making",
      title: "Film Making",
      url: "https://vimeo.com/935323300",
      description:
        "Learn advanced filmmaking techniques, storyboarding, scripting, shooting, editing, and post-production to bring stories to life.",
      thumbnail: thumbnail3,
    },
    {
      id: "game-designing",
      title: "Game Designing",
      url: "https://vimeo.com/935352028",
      description:
        "This course covers environment making, character creation, gaming visual effects, and learning tools like Unreal Engine and Unity.",
      thumbnail: thumbnail4,
    },
  ];

  return (
    <section className="course_preview">
      <Container>
        <CommonHeading
          heading="Our Courses"
          className="text-white mb-0 pb-0"
          dataContent="Our Course"
        />
        <p className="text-white mb-lg-5 pb-5 text-center">
          Unlock Your Potential with Knowledge That Inspires Brilliance.
        </p>
        <div className="course-items ">
          {courses.map((course, index) => (
            <div key={course.id} className="course_preview_item">
              <div
                className="video-container"
                onMouseEnter={() => setPlayingVideo(course.id)}
                onMouseLeave={() => setPlayingVideo(null)}
              >
                {!playingVideo || playingVideo !== course.id ? (
                  <div className="thumbnail-overlay">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="thumbnail "
                    />
                  </div>
                ) : null}
                <ReactPlayer
                  url={course.url}
                  playing={playingVideo === course.id}
                  controls
                  muted
                  width="100%"
                  height="380px"
                  className="react-player rounded"
                  loop
                />
              </div>
              <div className="course_preview_item_text">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>{course.title}</h4>
                  <button
                    className="read-more-btn"
                    onClick={() => toggleReadMore(course.id)}
                  >
                    {expandedCourses[course.id] ? "Read Less" : "Read More"}
                  </button>
                </div>
                <div className="description-add">
                  <div
                    className={`read-more-box ${expandedCourses[course.id] ? "active" : ""
                      }`}
                  >
                    <p>
                      {expandedCourses[course.id] ? course.description : ``}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoursePreview;
