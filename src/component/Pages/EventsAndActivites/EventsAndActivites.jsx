import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import {
  AmdImages,
  ComicImages,
  MotionImages,
  RamojiImages,
  UnrealImages,
  VirtualImages,
} from "../../../assets/Student_Work/ArtImages";
import { useParams } from "react-router-dom";
import amd from "../../../assets/images/eventsimg/amd_img.jpeg";
import unreal from "../../../assets/images/eventsimg/unreal_img.jpeg";
import comic from "../../../assets/images/eventsimg/comic_img.jpeg";
import virtual from "../../../assets/images/eventsimg/virtual_img.jpeg";
import ramoji from "../../../assets/images/eventsimg/ramoji_img.jpeg";
import motion from "../../../assets/images/eventsimg/motion_img.jpeg";

import "./EventsAndActivites.scss";

gsap.registerPlugin(ScrollTrigger);

const EventsAndActivites = () => {
  const imgRef = useRef([]);
  const sectionRef = useRef(null);
  const { eventId } = useParams();

  const eventsData = [
    {
      img: amd,
      title: "Collaboration with AMD",
      text: [
        "We’re excited to announce our collaboration with AMD, bringing high-performance computing solutions to Pikazzo Institute. As part of India’s biggest AMD-exclusive e-sports and technology showcase, this event exposed students to cutting-edge innovations in VFX, gaming, and real-time rendering.",
        "Through interactive demos, networking sessions, and live tech exhibitions, students gained hands-on exposure to industry-grade tools, deepened their understanding of digital content creation, and connected with top professionals. Together, we’re empowering the next generation of digital artists and innovators.",
      ],
      images: AmdImages,
    },
    {
      img: ramoji,

      title: "Ramoji Filmcity",
      subtitle: "A Cinematic Adventure Like No Other",
      text: [
        "Students from Pikazzo Institute embarked on a thrilling journey through Ramoji Film City, the world’s largest integrated film studio complex, proudly listed in the Guinness Book of World Records.",
        "During the visit, students explored grand film sets, witnessed live production setups, and discovered filmmaking secrets from industry professionals. The experience blended education with entertainment, offering an unforgettable glimpse into the art and craft of cinema.",
        "Located in Hyderabad, Ramoji Film City also doubles as an amusement and theme park, making it the perfect blend of learning, excitement, and fun.",
      ],
      images: RamojiImages,
    },
    {
      img: unreal,

      title: "Unreal Engine Workshop",
      subtitle: "Real-Time 3D Creation & Interactive Design",
      text: [
        "The Unreal Engine Workshop offered an immersive, hands-on experience in real-time 3D creation, environment design, and interactive storytelling — ideal for aspiring game developers and 3D artists.",
        "Focusing on the industry-renowned Unreal Engine, a powerful 3D graphics game engine developed by Epic Games, the session introduced students to its latest features, including generative AI tools for creating dynamic content such as 3D models, animations, and immersive virtual environments.",
        "Students explored how Unreal Engine streamlines production pipelines, enhances creative flexibility, and empowers artists to build cinematic-quality visuals and real-time experiences. This workshop allowed students from Pikazzo Institute to dive deep into the future of digital design and development.",
      ],
      images: UnrealImages,
    },
    {
      img: comic,

      title: "Comic Con 2024",
      subtitle: "A Celebration of Pop Culture",
      text: [
        "Students from Pikazzo Institute immersed themselves in the electrifying world of Comic Con India 2024, the country’s largest and most iconic pop-culture convention.",
        "Through interactive sessions, live panels, and hands-on creative showcases, students explored the latest in comic art, character design, and storytelling trends. They engaged with industry professionals, gained valuable insights into the creative process, and discovered career paths across pop culture, design, gaming, and entertainment.",
        "From celebrity guest interactions to exclusive merchandise and live performances, the event offered a dynamic learning environment — helping students sharpen their visual storytelling skills, expand their network, and stay updated with emerging trends in popular media.",
      ],
      images: ComicImages,
    },

    {
      img: motion,

      title: "Motion Capture Workshop",
      subtitle: "Bringing Characters to Life",
      text: [
        "The Motion Capture Workshop gave students an in-depth look at the art of performance capture and real-time animation.",
        "Students gained hands-on experience in practical exercises, capturing live performances and seeing their animations come to life instantly.",
        "Conducted in collaboration with Apple Arts Studios — India’s largest motion capture studio — the workshop covered everything from real-time mocap visualization to data cleanup and post-processing techniques.",
        "This immersive experience helped students at Pikazzo Institute master essential skills in character animation, digital performance, and the technical workflows that power modern film, gaming, and VFX industries.",
      ],
      images: MotionImages,
    },
    {
      img: virtual,

      title: "Virtual Production Workshop",
      subtitle: "Exploring the Future of Filmmaking",
      text: [
        "Students at Pikazzo Institute took a deep dive into next-gen filmmaking through an immersive Virtual Production Workshop.",
        "They explored real-time VFX, LED walls, and motion capture, gaining hands-on experience with industry-standard tools and workflows.",
        "The workshop covered various camera tracking systems, showcasing how they synchronize virtual environments with live camera movement.",
        "Pikazzo Institute collaborated with Epic Games Mumbai, learning how to design and operate virtual sets using cutting-edge technology.",
        "Pikazzo students sharpened their skills in virtual cinematography and production-ready pipelines — preparing them to lead in the evolving world of digital filmmaking.",
      ],
      images: VirtualImages,
    },
  ];

  const filteredEvents = eventId
    ? eventsData.filter((e) =>
        e.title.toLowerCase().includes(eventId.toLowerCase())
      )
    : eventsData;

  useEffect(() => {
    if (!imgRef.current) return;

    imgRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [filteredEvents]);

  if (filteredEvents.length === 0) return <p>Event not found</p>;

  return (
    <section className="events">
      {filteredEvents.map((event, i) => (
        <div className="events_content" key={i}>
          {event.img && (
            <img
              src={event.img}
              alt="events_img"
              className="events_content_banner"
            />
          )}
          <Container>
            <div className="events_con" ref={sectionRef}>
              <h2 className="text-center heading">{event.title}</h2>
              {event.subtitle && (
                <h4 className="text-center mb-3">{event.subtitle}</h4>
              )}
              {event.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            {event.images.length > 0 && (
              <div
                className="images"
                ref={(el) => {
                  imgRef.current[i] = el;
                }}
              >
                {event.images.map((item, index) => (
                  <img
                    src={item}
                    alt={`${event.title} ${index + 1}`}
                    className="events_img"
                    key={index}
                  />
                ))}
              </div>
            )}
          </Container>
        </div>
      ))}
    </section>
  );
};

export default EventsAndActivites;
