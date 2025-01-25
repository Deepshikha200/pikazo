import React from "react";
import "./EventAndActivity.scss";
import img1 from "../../../../assets/images/banner.jpg";
import img2 from "../../../../assets/images/bannerf1.jpg";
import img4 from "../../../../assets/images/banner1.jpeg";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EventAndActivity = () => {
  const navigate = useNavigate();

  return (
    <section className="event">
      <Container>
        <div className="event_heading  text-center mb-5">
          <CommonHeading heading="Event and Activity" className="pb-0" />
        </div>

        <div onClick={() => navigate("/events")} className="event_content">
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Lorem ipsum dolor sit.</p>
              <p className="text-center text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                dolorum?
              </p>
            </div>
            <img src={img2} alt="" className="event_img2" />
          </div>
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Lorem ipsum dolor sit.</p>
              <p className="text-center text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                dolorum?
              </p>
            </div>
            <img src={img2} alt="" className="event_img2" />
          </div>
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Lorem ipsum dolor sit.</p>
              <p className="text-center text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                dolorum?
              </p>
            </div>
            <img src={img2} alt="" className="event_img2" />
          </div>
        </div>
        <div onClick={() => navigate("/events")} className="event_content mt-4">
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Lorem ipsum dolor sit.</p>
              <p className="text-center text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                dolorum?
              </p>
            </div>
            <img src={img2} alt="" className="event_img2" />
          </div>
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Lorem ipsum dolor sit.</p>
              <p className="text-center text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                dolorum?
              </p>
            </div>
            <img src={img2} alt="" className="event_img2" />
          </div>
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Lorem ipsum dolor sit.</p>
              <p className="text-center text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                dolorum?
              </p>
            </div>
            <img src={img2} alt="" className="event_img2" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventAndActivity;
