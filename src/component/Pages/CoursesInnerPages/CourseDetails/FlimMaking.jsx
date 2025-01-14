import React from "react";
import img from "../../../../assets/images/banner/Artboard5.png";
import CoursesInnerPages from "../CoursesInnerPages";
const FlimMaking = () => {
  return (
    <section>
      <CoursesInnerPages
        subtitle="Film Making Course"
        description="The best film making institute in Chandigarh offers a comprehensive curriculum that covers all aspects of film making, including directing, editing, and cinematography. The faculty at our institute is highly experienced and includes industry professionals who have worked on numerous projects. Our institute provides state-of-the-art equipment and facilities to the students, including high-definition cameras, editing suites, and sound recording studios. This allows students to get hands-on experience and learn the technical aspects of film making in a real-world setting."
        description1="In addition to the technical training, we also place a strong emphasis on the creative side of film making. Students are encouraged to develop their own ideas and projects, and receive guidance and feedback from their instructors. This approach helps students to develop their own unique voice and style as filmmakers.
Pikazo Institute offers several different programs, including a diploma program in film making, a bachelor’s degree in film studies, and a master’s degree in film production. Program durations range from 6 to 2 years.
We also provide students with opportunities to showcase their work and network with industry professionals.
With a comprehensive curriculum, experienced faculty, state-of-the-art equipment, and opportunities for networking, Pikazo Institute is one of the best filmmaking institutes in Chandigarh. It is the perfect place for anyone looking to pursue a career in film making."
        src={img}
        faqData={[]}
      />
    </section>
  );
};

export default FlimMaking;
