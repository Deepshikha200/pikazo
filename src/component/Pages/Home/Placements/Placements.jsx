import React, { useRef } from "react";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading.jsx";
import placement1 from "../../../../assets/images/Placements/placement1.png";
import placement3 from "../../../../assets/images/Placements/placement3.png";
import placement4 from "../../../../assets/images/Placements/placement4.png";
import placement5 from "../../../../assets/images/Placements/placement5.png";
import placement6 from "../../../../assets/images/Placements/placement6.png";
import placement8 from "../../../../assets/images/Placements/placement8.png";
import placement9 from "../../../../assets/images/Placements/placement9.png";
import placement10 from "../../../../assets/images/Placements/placement10.png";
import placement11 from "../../../../assets/images/Placements/placement11.png";
import placement12 from "../../../../assets/images/Placements/placement12.png";
import placement13 from "../../../../assets/images/Placements/placement13.png";
import placement14 from "../../../../assets/images/Placements/placement14.png";
import placement15 from "../../../../assets/images/Placements/placement15.png";
import placement16 from "../../../../assets/images/Placements/placement16.png";
import { usePlacementsAnimation } from "../../../../hooks/useAnimate.js";
import "./Placements.scss";

const Placements = () => {
  const placementsRef = useRef(null);

  usePlacementsAnimation(placementsRef);

  return (
    
    <>
      <section className="d-xl-block d-none placements_section" id="placements" ref={placementsRef}>
        <div className="placements ">
          <CommonHeading heading="Our Placements" className="place_heading" />
          <img src={placement1} alt="" className="box" />
          <img src={placement3} alt="" className="box" />
          <img src={placement4} alt="" className="box" />
          <img src={placement5} alt="" className="box" />
          <img src={placement6} alt="" className="box" />
          <img src={placement8} alt="" className="box" />
          <img src={placement9} alt="" className="box" />
          <img src={placement10} alt="" className="box" />
          <img src={placement11} alt="" className="box" />
          <img src={placement12} alt="" className="box  " />
          <img src={placement13} alt="" className="box" />
          <img src={placement14} alt="" className="box" />
          <img src={placement15} alt="" className="box" />
          <img src={placement16} alt="" className="box" />
        </div>
      </section>
      <section className="place_con d-xl-none d-block pt-5" id="placements">
        <CommonHeading
          heading="Our Placements"
          className="place_heading pb-0"
        />
        <div className="place_flex">
          <div className="place_scroll">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <img src={placement1} alt="" key={`p1-${i}`} />
                <img src={placement3} alt="" key={`p3-${i}`} />
                <img src={placement4} alt="" key={`p4-${i}`} />
                <img src={placement5} alt="" key={`p5-${i}`} />
                <img src={placement6} alt="" key={`p6-${i}`} />
                <img src={placement8} alt="" key={`p8-${i}`} />
                <img src={placement9} alt="" key={`rp9-${i}`} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="place_flex revese">
          <div className="place_scroll">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <img src={placement10} alt="" key={`rp10-${i}`} />
                <img src={placement11} alt="" key={`rp11-${i}`} />
                <img src={placement12} alt="" key={`rp12-${i}`} />
                <img src={placement13} alt="" key={`rp13-${i}`} />
                <img src={placement14} alt="" key={`rp14-${i}`} />
                <img src={placement15} alt="" key={`rp15-${i}`} />
                <img src={placement16} alt="" key={`rp16-${i}`} />
              </React.Fragment>

            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Placements;
