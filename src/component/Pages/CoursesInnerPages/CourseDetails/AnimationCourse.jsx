import React from "react";
import img from "../../../../assets/images/banner/Artboard3.png";
import CoursesInnerPages from "../CoursesInnerPages";
const AnimationCourse = () => {
  return (
    <section>
      <CoursesInnerPages
        subtitle="Animation Course"
        description="Pikazo Institute is one of the best animation institutes in Chandigarh, offering a wide range of courses that provide students with the knowledge and skills needed to succeed in the animation industry.
We offer a wide range of courses in animation, including 2D and 3D animation, visual effects, game design, and more. These courses are designed to be hands-on and practical,       allowing students to apply what they learn to real-world projects. The curriculum is also constantly updated to keep pace with the latest industry trends and technologies."
        description1="Our instructors are all experienced industry professionals who provide students with hands-on instruction and guidance. They are dedicated to helping students achieve their goals and are always available to answer questions and provide feedback.
          Students have access to state-of-the-art equipment and software, including the latest animation and visual effects software. This allows students to work on projects with the same tools and technologies that are used in the industry.
          Here students get a wide range of opportunities to gain real-world experience. The Institute has strong ties with the animation industry, and students have the opportunity to work on real-world projects and gain valuable experience. Additionally, the Institute provides internships and job placement assistance to help students get their foot in the door of the animation industry.
          With expert instructors, state-of-the-art facilities, and comprehensive curriculum, we provide students with the knowledge and skills needed to succeed in the animation industry. Whether you’re a beginner or an experienced animator looking to improve your skills, Pikazo Institute is the perfect choice for anyone interested in a career in animation. Sign up now and start your journey to success! "
        src={img}
        faqData={[]} // Passing an empty array for faqData
      />
    </section>
  );
};

export default AnimationCourse;
