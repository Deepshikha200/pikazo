import React from "react";
import "./EventAndActivity.scss";
import event1 from "../../../../assets/images/event1.jpeg";
import event2 from "../../../../assets/images/event2.jpeg";
import event3 from "../../../../assets/images/event3.jpeg";
import event4 from "../../../../assets/images/event4.jpeg";
import event5 from "../../../../assets/images/event5.jpeg";
import event6 from "../../../../assets/images/event6.jpeg";

import CommonHeading from "../../../../common/CommonHeading/CommonHeading";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EventAndActivity = () => {
  return (
    <section className="event">
      <Container>
        <div className="event_heading  text-center mb-5">
          <CommonHeading heading="Event and Activity" className="pb-0" />
        </div>

        <div className="event_content">
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Comic Con 2024</p>
            </div>
            <img src={event1} alt="" className="event_event1" />
          </div>
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Collaboration With AMD</p>
            </div>
            <img src={event2} alt="" className="event_event1" />
          </div>
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Unreal Engine Workshop</p>
            </div>
            <img src={event3} alt="" className="event_event1" />
          </div>

          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Ramoji Filmcity</p>
            </div>
            <img src={event4} alt="" className="event_event1" />
          </div>
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Motion Capture Workshop</p>
            </div>
            <img src={event5} alt="" className="event_event1" />
          </div>
          <div>
            <div className="orverlay"></div>
            <div className="overlay_text">
              <p className="heaing text-center">Virtual Production Workshop</p>
            </div>
            <img src={event6} alt="" className="event_event1" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventAndActivity;
