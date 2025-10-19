import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const useAnimation = (containerRef) => {
  useGSAP(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".form_col_img.first", {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".form_col_img.first",
          start: "top 85%",
        },
      });

      gsap.from(".form_col_img.second", {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".form_col_img.second",
          start: "top 85%",
        },
      });

      // gsap.from(".fade-up", {
      //   y: 50,
      //   opacity: 0,
      //   duration: 1.5,
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     trigger: ".fade-up",
      //     start: "top 85%",
      //   },
      // });

      // gsap.from(".scale-in", {
      //   scale: 0.9,
      //   opacity: 0,
      //   duration: 1,
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     trigger: ".scale-in",
      //     start: "top 85%",
      //   },
      // });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};


export const affilationAnimation = (containerRef) => {
  useGSAP(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".award-box", {
        opacity: 0,
        y: -100,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      gsap.to(".award-box", {
        scale: 1.07,
        transformOrigin: "center center",
        paused: true,
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};


export const usePlacementsAnimation = (containerRef) => {
  useGSAP(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
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

      // Initial reveal + scatter animation
      gsap.to(".box", {
        opacity: 1,
        duration: 0.55,
        x: (index) => positions[index]?.x,
        y: (index) => positions[index]?.y,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 41%",
        },
        onComplete: () => {
          // Floating animation (infinite)
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
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};

export const useStudent = ({ containerRef, trackRef }) => {
  useGSAP(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    // ✅ Only run if images are rendered
    const images = track.querySelectorAll("img");
    if (images.length === 0) return;

    // ✅ Duplicate the content once images exist
    track.innerHTML += track.innerHTML;

    // ✅ Set width to fit all images
    track.style.width = `${track.scrollWidth}px`;

    const animation = gsap.to(track, {
      x: `-${track.scrollWidth / 2}px`, // move half the width
      ease: "none",
      duration: 10,
      repeat: -1,
    });

    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      animation.kill();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, trackRef]);
};