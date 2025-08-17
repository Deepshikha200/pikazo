import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Placements.scss";
import { PlacementImg } from "../../../../assets/Student_Work/ArtImages.js";
import CommonHeading from "../../../../common/CommonHeading/CommonHeading.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import placement1 from "../../../../assets/images/Placements/placement1.png";
// import placement2 from "../../../../assets/images/Placements/placement2.png";
import placement3 from "../../../../assets/images/Placements/placement3.png";
import placement4 from "../../../../assets/images/Placements/placement4.png";
import placement5 from "../../../../assets/images/Placements/placement5.png";
import placement6 from "../../../../assets/images/Placements/placement6.png";
// import placement7 from "../../../../assets/images/Placements/placement7.png";
import placement8 from "../../../../assets/images/Placements/placement8.png";
import placement9 from "../../../../assets/images/Placements/placement9.png";
import placement10 from "../../../../assets/images/Placements/placement10.png";
import placement11 from "../../../../assets/images/Placements/placement11.png";
import placement12 from "../../../../assets/images/Placements/placement12.png";
import placement13 from "../../../../assets/images/Placements/placement13.png";
import placement14 from "../../../../assets/images/Placements/placement14.png";
import placement15 from "../../../../assets/images/Placements/placement15.png";
import placement16 from "../../../../assets/images/Placements/placement16.png";

const Placements = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const positions = [
      { x: "42rem", y: "-31rem" },
      { x: "28rem", y: "25rem" },
      { x: "-44rem", y: "-19rem" },
      { x: "-80rem", y: "11rem" },
      { x: "67rem", y: "-35rem" },
      { x: "45rem", y: "-10rem" },
      { x: "-50rem", y: "23rem" },
      { x: "-73rem", y: "-29rem" },
      { x: "49rem", y: "10rem" },
      { x: "-68rem", y: "-10rem" },
      { x: "-5rem", y: "-29rem" },
      { x: "-39rem", y: "5rem" },
      { x: "-4rem", y: "29rem" },
      { x: "75rem", y: "21rem" },
      { x: "69rem", y: "-10rem" },
      { x: "40rem", y: "-10rem" },
    ];

    gsap.to(".box", {
      opacity: 1,
      duration: 0.55,
      x: (index) => positions[index].x,
      y: (index) => positions[index].y,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ".placements_section",
        start: "top 41%",
        // end: "bottom 20%",
        // scrub: 5,
      },
      onComplete: () => {
        gsap.to(".box", {
          x: (index) => `+=${Math.random() * 2}rem`,
          y: (index) => `+=${Math.random() * 2}rem`,
          duration: 0.77,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      },
    });
  }, []);

  return (
    <>
      <section className="d-xl-block d-none placements_section" id="placements">
        <div className="placements ">
          <CommonHeading heading="Our Placements" className="place_heading" />
          <img src={placement1} alt="" className="box" />
          {/* <img src={placement2} alt="" className="box" /> */}
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
              <>
                <img src={placement1} alt="" key={`p1-${i}`} />
                {/* <img src={placement2} alt="" key={`p2-${i}`} /> */}
                <img src={placement3} alt="" key={`p3-${i}`} />
                <img src={placement4} alt="" key={`p4-${i}`} />
                <img src={placement5} alt="" key={`p5-${i}`} />
                <img src={placement6} alt="" key={`p6-${i}`} />
                {/* <img src={placement7} alt="" key={`p7-${i}`} /> */}
                <img src={placement8} alt="" key={`p8-${i}`} />
                <img src={placement9} alt="" key={`rp9-${i}`} />
              </>
            ))}
          </div>
        </div>
        <div className="place_flex revese">
          <div className="place_scroll">
            {[...Array(2)].map((_, i) => (
              <>
                <img src={placement10} alt="" key={`rp10-${i}`} />
                <img src={placement11} alt="" key={`rp11-${i}`} />
                <img src={placement12} alt="" key={`rp12-${i}`} />
                <img src={placement13} alt="" key={`rp13-${i}`} />
                <img src={placement14} alt="" key={`rp14-${i}`} />
                <img src={placement15} alt="" key={`rp15-${i}`} />
                <img src={placement16} alt="" key={`rp16-${i}`} />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Placements;
