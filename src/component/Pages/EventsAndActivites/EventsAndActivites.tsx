import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { VectorArt } from "../../../assets/Student_Work/ArtImages";
import "./EventsAndActivites.scss";

gsap.registerPlugin(ScrollTrigger);

const eventsData = [
  {
    title: "NPS3D's Visit to the Institute",
    text: [
      "We were honored to host the exceptionally talented professional artist, NPS3D, at the Inside Institute of Filmmaking. During his visit, NPS3D conducted an in-depth workshop on Geometry Nodes in Blender, providing our students with hands-on experience and advanced techniques in this powerful tool.",
      "NPS3D shared his extensive experience working with international clients as a filmmaker, offering valuable insights into managing projects professionally. He covered topics such as client communication, project planning, and meeting deadlines, providing our students with practical advice to excel in their careers.",
    ],
    images: VectorArt,
  },
  {
    title: "NPS3D's Visit to the Institute",
    text: [
      "We were honored to host the exceptionally talented professional artist, NPS3D, at the Inside Institute of Filmmaking. During his visit, NPS3D conducted an in-depth workshop on Geometry Nodes in Blender, providing our students with hands-on experience and advanced techniques in this powerful tool.",
      "NPS3D shared his extensive experience working with international clients as a filmmaker, offering valuable insights into managing projects professionally. He covered topics such as client communication, project planning, and meeting deadlines, providing our students with practical advice to excel in their careers.",
    ],
    images: VectorArt,
  },
];

const EventsAndActivites = () => {
  const imgRef = useRef<(HTMLElement | null)[]>([]);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".heading", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    imgRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="events">
      {eventsData.map((event, i) => (
        <div
          className={`events_content ${i % 2 === 0 ? "bg-yellow" : "bg-white"}`}
          key={i}
        >
          <div className="events_con" ref={sectionRef}>
            <h2 className="text-center heading">{event.title}</h2>
            {event.text.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <div
            className="imgaes d-flex flex-wrap justify-content-center gap-5"
            ref={(el) => {
              if (el) {
                imgRef.current[i] = el;
              }
            }}
          >
            {event.images.map((item, index) => (
              <img
                src={item}
                alt="Event related"
                key={index}
                height="390px"
                width="390px"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default EventsAndActivites;
