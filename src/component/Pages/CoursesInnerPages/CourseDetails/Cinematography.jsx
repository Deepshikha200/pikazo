import React from "react";
import img from "../../../../assets/Student_Work/Graphics/Artboard1.png";
import CoursesInnerPages from "../CoursesInnerPages";

const Cinematography = () => {
  return (
    <section>
      <CoursesInnerPages
        subtitle="Cinematography"
        description={
          <>
            Acquire skills in Cinematography from the
            <strong> best institute in Chandigarh. </strong> Pikazo Institute
            provides practical classes to the students so that they get
            knowledge about
            <strong> filmmaking, what goes into filmmaking. </strong> The thing
            is required in students is Passion; students have a passion for the
            visual presentation of life by Photography & Film. We always learn
            new things from the others that’s why Pikazo Institute provides best
            cinematographers so that students learn something new from their
            experiences which help the students in
            <strong> career making.</strong>
          </>
        }
        description1={
          <>
            Our course curriculum is designed by best
            <strong> skilled trainers from the industry, </strong> so that it
            prepares the students for upcoming challenges which students will
            face in professional life.
            <br />
            In Pikazo Institute students <strong>
              
              get 100% placement
            </strong>
            assistance after the completion of a course.
          </>
        }
        imageSrc={img}
        faqData={[]}
      />
    </section>
  );
};

export default Cinematography;
