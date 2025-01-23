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
import thumbnail5 from "../../../../assets/images/Website thumbnails/PhotoGraphy.jpg";
import thumbnail6 from "../../../../assets/images/Website thumbnails/UiUX.jpg";
import thumbnail7 from "../../../../assets/images/Website thumbnails/VideoEditing.jpg";
import thumbnail8 from "../../../../assets/images/Website thumbnails/WebGraphics.jpg";
import { motion } from "framer-motion";

const CoursePreview = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

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
      title: "UX/UI Designing",
      url: ui,
      description:
        "This course includes environment making, character creation, gaming visual effects, and learning software like Unreal Engine and Unity.",
      thumbnail: thumbnail6,
    },
    {
      id: "market",
      title: "Digital Marketing",
      url: market,
      description:
        "Pikazo offers certified SEO courses. This course provides full-fledged SEO services and is affordable for any student.",
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
          heading="Our Course"
          className="text-white mb-0"
          dataContent="Our Course"
        />
        <p className="text-white mb-lg-5 pb-5 text-center">
          Unlock Your Potential with Knowledge That Inspires Brilliance.
        </p>
        <Row>
          {courses.map((course, index) => (
            <Col
              xl={3}
              lg={4}
              md={6}
              sm={6}
              className="item_col"
              key={course.id}
            >
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="text-center course_preview_item mx-4"
              >
                <div
                  className="video-container"
                  onMouseEnter={() => setPlayingVideo(course.id)}
                  onMouseLeave={() => setPlayingVideo(null)}
                >
                  {!playingVideo || playingVideo !== course.id ? (
                    <div className="thumbnail-overlay">
                      <div
                        className="play-button"
                        onClick={() => setPlayingVideo(course.id)}
                      >
                        <img src={course.thumbnail} alt={course.title} />
                      </div>
                    </div>
                  ) : null}
                  <ReactPlayer
                    url={course.url}
                    playing={playingVideo === course.id}
                    controls
                    width="100%"
                    height="380px"
                    className="react-player"
                    loop
                  />
                </div>
                <div className="course_preview_item_text">
                  <h4 className="mb-20">{course.title}</h4>
                  <p>{course.description}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CoursePreview;
