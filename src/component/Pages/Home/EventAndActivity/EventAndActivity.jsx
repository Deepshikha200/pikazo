import React from "react";
import event1 from "../../../../assets/images/event1u.png";
import event2 from "../../../../assets/images/event2.png";
import event3 from "../../../../assets/images/event3.png";
import event4 from "../../../../assets/images/event4.png";
import event5 from "../../../../assets/images/event5.png";
import event6 from "../../../../assets/images/event6.png";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import { Container } from "react-bootstrap";
import logo1 from "../../../../assets/images/eventone.png";
import logo2 from "../../../../assets/images/eventtwo.png";
import logo3 from "../../../../assets/images/eventthree.png";
import logo4 from "../../../../assets/images/eventfour.png";
import logo5 from "../../../../assets/images/eventfive.png";
import logo6 from "../../../../assets/images/eventsix.png";
import mlogo1 from "../../../../assets/images/mlogo1.png";
import mlogo2 from "../../../../assets/images/mlogo2.png";
import mlogo3 from "../../../../assets/images/mlogo3.png";
import mlogo4 from "../../../../assets/images/mlogo4.png";
import mlogo5 from "../../../../assets/images/mlogo5.png";
import mlogo6 from "../../../../assets/images/mlogo6.png";
import "./EventAndActivity.scss";
// import { useNavigate } from "react-router-dom";

const EventAndActivity = ({ onClick }) => {
  // const navigate = useNavigate();

  return (
    <section className="event">
      <Container>
        <div className="event_heading  mb-5">
          <CommonHeading heading="Events and Activities" className="pb-0" />
        </div>

        <div
          className="event_content"
          // onClick={() => navigate("events-and-activities")}
          onClick={onClick}
        >
          <div>
            <div className="overlay"></div>
            <div className="overlay_text">
              <img
                src={logo1}
                alt="Event Logo"
                className="event_logo amd d-md-block d-none"
              />
              <img
                src={mlogo3}
                alt="Event Logo"
                className="d-md-none d-block"
              />
              <h4>Collaboration with AMD</h4>
              <p>
                We’re thrilled to collaborate with AMD to bring high-performance
                solutions to Pikazzo. Together, we’re pushing the boundaries of
                innovation.
              </p>
            </div>
            <img
              src={event2}
              alt="Collaboration with AMD"
              className="event_images"
            />
          </div>
          <div className="">
            <div className="overlay"></div>
            <div className="overlay_text">
              <div className="d-flex gap-3 align-items-center">
                <img
                  src={logo2}
                  alt="Event Logo"
                  className="event_logo comic d-md-block d-none"
                // width="120px"
                />
                <img
                  src={mlogo2}
                  alt="Event Logo"
                  className="d-md-none d-block comin_mobile"
                />
                <div>
                  <h4>Comic Con 2024</h4>
                  <p>
                    A thrilling celebration of comics, movies, gaming, and
                    cosplay, which brought fans and creators together for an
                    unforgettable experience.
                  </p>
                </div>
              </div>
            </div>
            <img src={event1} alt="Comic Con 2024" className="event_images " />
          </div>
          <div>
            <div className="overlay"></div>
            <div className="overlay_text">
              <div className="d-flex gap-3 align-items-center">
                <img
                  src={logo3}
                  alt="Event Logo"
                  className="event_logo unreal d-md-block d-none"
                />
                <img
                  src={mlogo5}
                  alt="Event Logo"
                  className="d-md-none d-block"
                />
                <div>
                  <h4>Unreal Engine Workshop</h4>
                  <p>
                    A hands-on session exploring real-time 3D creation,
                    environment design, and interactive experiences—perfect for
                    aspiring game developers and 3D artists!
                  </p>
                </div>
              </div>
            </div>
            <img
              src={event3}
              alt="Unreal Engine Workshop"
              className="event_images"
            />
          </div>

          <div>
            <div className="overlay"></div>
            <div className="overlay_text">
              <img src={logo4} alt="" className="d-md-block d-none comic" />
              <img
                src={mlogo4}
                alt="Event Logo"
                className="d-md-none d-block"
              />
              <h4>Ramoji Filmcity</h4>
              <p>
                A thrilling journey through the world’s largest film city!
                Students experienced behind-the-scenes magic, explored grand
                sets, and learned filmmaking secrets—an unforgettable adventure
                in cinematic excellence.
              </p>
            </div>
            <img src={event4} alt="Ramoji Filmcity" className="event_images" />
          </div>

          <div>
            <div className="overlay"></div>
            <div className="overlay_text">
              <div className="d-flex gap-3 align-items-center">
                <img
                  src={logo5}
                  alt=""
                  className="event_logo mocap d-md-block d-none "
                />
                <img
                  src={mlogo1}
                  alt="Event Logo"
                  className="d-md-none d-block"
                />
                <div>
                  <h4>Motion Capture Workshop</h4>
                  <p>
                    Bringing characters to life! Participants explored real-time
                    motion tracking, animation, and performance capture, gaining
                    hands-on experience in industry-standard mocap technology.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={event5}
              alt="Motion Capture Workshop"
              className="event_images"
            />
          </div>

          <div>
            <div className="overlay"></div>
            <div className="overlay_text">
              <div className="d-flex gap-3 align-items-center">
                <img
                  src={logo6}
                  alt=""
                  className="event_logo vfx d-md-block d-none"
                />
                <img
                  src={mlogo6}
                  alt="Event Logo"
                  className="d-md-none d-block"
                />
                <div>
                  <h4>Virtual Production Workshop</h4>
                  <p>
                    A deep dive into next-gen filmmaking! Participants explored
                    real-time VFX, LED walls, and motion capture, gaining
                    hands-on experience in cutting-edge virtual production
                    techniques.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={event6}
              alt="Virtual Production Workshop"
              className="event_images"
            />
          </div>
        </div>
      </Container>
    </section >
  );
};

export default EventAndActivity;
