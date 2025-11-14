import { Col, Container, Row } from "react-bootstrap";
import img from "../../../../assets/images/banner/Film Making Banner.png";
import CoursesInnerPages from "../CoursesInnerPages";
import { AnimatePresence, motion } from "framer-motion";

const FlimMaking = () => {
  const faqData = [
    {
      ques: "Module 1: Introduction to Filmmaking and Film Theory",
      ans: [
        {
          con1: "Overview of the Filmmaking Process: Pre-Production, Production, Post-Production",
          con2: "Film Genres and Their Conventions: Drama, Comedy, Action, Documentary, etc.",
          con3: "The Role of a Filmmaker: Director, Producer, Cinematographer, Editor, etc.",
          con4: "Film Theory: Narrative Structure, Character Development, and Storytelling",
          con5: "Analyzing Great Films: Cinematic Techniques and Styles",
          con6: "The Language of Film: Shots, Angles, and Composition",
          con7: "Film History: Evolution from Silent Films to Modern Digital Cinema",
          con8: "The Importance of Visual Storytelling",
          con9: "Developing a Filmmaking Style: Influence of Directors and Cinematographers",
        },
      ],
    },
    {
      ques: "Module 2: Pre-Production: Planning and Preparing for the Shoot",
      ans: [
        {
          con1: "Scriptwriting: Creating a Compelling Story and Dialogue",
          con2: "Understanding the Script: Breakdowns and Shot Lists",
          con3: "Storyboarding: Visualizing the Scenes",
          con4: "Casting: Finding and Directing Actors",
          con5: "Location Scouting: Choosing the Right Setting for Your Film",
          con6: "Scheduling: Creating a Production Timeline",
          con7: "Budgeting: Allocating Resources and Managing Costs",
          con8: "Assembling Your Crew: Roles and Responsibilities",
          con9: "Preparing the Equipment: Cameras, Lenses, Lighting, and Sound",
        },
      ],
    },
    {
      ques: "Module 3: Camera and Cinematography Techniques",
      ans: [
        {
          con1: "Camera Basics: Understanding Different Types of Cameras and Lenses",
          con2: "Frame Rates and Shutter Speed: Controlling Motion and Visual Style",
          con3: "Depth of Field: Using Aperture and Focal Length Creatively",
          con4: "Composition: Rule of Thirds, Leading Lines, Symmetry, and Balance",
          con5: "Camera Movement: Pan, Tilt, Dolly, Tracking, Crane, and Steadicam",
          con6: "Types of Shots: Wide Shot, Close-Up, Medium Shot, Over-the-Shoulder Shot, etc.",
          con7: "The 180-Degree Rule and Screen Direction",
          con8: "Using Light and Shadow to Create Mood and Atmosphere",
          con9: "Shot Matching: Ensuring Visual Consistency Across Different Takes",
        },
      ],
    },
    {
      ques: "Module 4: Lighting for Film and Video Production",
      ans: [
        {
          con1: "Introduction to Lighting: Natural vs. Artificial Light",
          con2: "Three-Point Lighting: Key Light, Fill Light, and Back Light",
          con3: "Controlling Light: Using Flags, Diffusers, and Reflectors",
          con4: "Lighting for Different Moods: Creating Tension, Romance, or Drama",
          con5: "Using Color in Lighting: Practical Tips for Color Temperature and Gels",
          con6: "Lighting for Daytime vs. Nighttime Scenes",
          con7: "Understanding the Impact of Shadows on Film",
          con8: "Lighting Equipment: Softboxes, LED Panels, Fresnels, etc.",
          con9: "Working with Lighting Gels, Filters, and Practical Lights",
        },
      ],
    },
    {
      ques: "Module 5: Sound Design and Recording Techniques",
      ans: [
        {
          con1: "Importance of Sound in Film: Dialogue, Music, and Sound Effects",
          con2: "Types of Sound: Diegetic vs. Non-Diegetic Sound",
          con3: "Microphone Basics: Boom Mics, Lavalier Mics, and Shotgun Mics",
          con4: "Recording Clean Audio: Best Practices on Set",
          con5: "Using Foley to Create Sound Effects in Post-Production",
          con6: "Understanding ADR (Automated Dialogue Replacement) and Its Process",
          con7: "The Role of Music in Film: Creating Atmosphere and Emotion",
          con8: "Mixing Sound: Balancing Dialogue, Music, and Effects",
          con9: "Audio Editing in Film: Syncing, Enhancing, and Finalizing Sound",
        },
      ],
    },
    {
      ques: "Module 6: Directing Actors and Action",
      ans: [
        {
          con1: "The Director's Role in Storytelling and Visual Composition",
          con2: "Working with Actors: Building Trust and Establishing Communication",
          con3: "Directing Performances: Blocking and Staging Action",
          con4: "Creating Emotional Impact Through Acting and Dialogue",
          con5: "Working with Non-Actors: Directing Naturalistic Performances",
          con6: "Directing Action Scenes: Choreography and Safety on Set",
          con7: "Working with Extras: Coordinating Background Action",
          con8: "Rehearsals: Preparing Actors for a Scene",
          con9: "Adjusting for Different Acting Styles: Comedy, Drama, and Action",
        },
      ],
    },
    {
      ques: "Module 7: Post-Production: Editing and Visual Effects",
      ans: [
        {
          con1: "Introduction to Editing: The Role of an Editor in the Filmmaking Process",
          con2: "Working with Editing Software: Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve",
          con3: "Editing Techniques: Cutting on Action, Jump Cuts, Cross-Cutting, and Continuity Editing",
          con4: "Building a Film’s Rhythm and Pacing Through Editing",
          con5: "Color Grading: Enhancing Visual Style and Consistency",
          con6: "Introduction to Visual Effects: Compositing, Green Screen, and Motion Graphics",
          con7: "Audio Post-Production: Mixing Dialogue, Music, and Sound Effects",
          con8: "Titling and Credit Sequences: Creating Professional Text Graphics",
          con9: "Final Output: Rendering and Exporting Your Film for Distribution",
        },
      ],
    },
    {
      ques: "Module 8: Final Project & Review",
      ans: [
        {
          con1: "Planning Your Final Film Project: Concept, Script, and Theme",
          con2: "Shooting the Final Film: Applying Everything You’ve Learned",
          con3: "Collaborating with Your Crew: Teamwork on Set",
          con4: "Post-Production Work: Editing, Sound Design, and Visual Effects",
          con5: "Reviewing and Refining Your Work: Getting Feedback from Peers",
          con6: "Finalizing Your Film: Color Grading, Audio, and Exporting",
          con7: "Presenting Your Film to the Class: Screening and Discussion",
          con8: "Evaluating Your Filmmaking Journey: What Worked and What Could Be Improved",
          con9: "Career in Filmmaking: Marketing Your Work and Finding Opportunities",
        },
      ],
    },
  ];

  const jobs = [
    "Film Director",
    "Assistant Director",
    "Screenwriter",
    "Cinematographer",
    "Film Producer",
    "Production Designer",
    "Film Editor",
    "Sound Designer",
    "Casting Director",
    "Gaffer (Lighting Technician)",
    "Script Supervisor",
    "Line Producer",
    "Location Manager",
    "Set Designer",
    "Film Critic",
    "Art Director (Filmmaking)",
    "Documentary Filmmaker",
    "Short Film Maker",
    "Film Distributor",
    "Production Coordinator",
  ];


  const filmMakingLinks = [
    "https://www.youtube.com/embed/u3aHRERKUOc",
    "https://www.youtube.com/embed/2TyM9zIwg8U",
    "https://www.youtube.com/embed/yMmDZ5MnLdg",
    "https://www.youtube.com/embed/_c8geY5osyM",
    "https://www.youtube.com/embed/DR0gSWMvBYA",
    "https://www.youtube.com/embed/7Zc5jL5pe40"
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the appearance of children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section>
      <CoursesInnerPages
        subtitle="Film Making "
        description="This course explores the entire filmmaking process, from pre-production to post-production. Students will learn scriptwriting, directing, cinematography, sound design, and editing. The course is ideal for aspiring filmmakers, providing hands-on experience in creating short films and documentaries."
        src={img}
        faqData={faqData}
        jobs={jobs}
      />
      <Container>
        <div className="text-center py-5">
          <h2 className="text-center  graphic_heading">Student Work</h2>
          <Row className="mt-lg-5 mt-3">
            <AnimatePresence mode="wait">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="row"
              >
                {filmMakingLinks.map((image, index) => (
                  <Col lg={3} md={4} sm={6} xs={6}>
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className=" student_work_image mb-20"
                    >
                      <iframe
                        width="100%"
                        height="100%"
                        src={image}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </motion.div>
                  </Col>
                ))}
              </motion.div>
            </AnimatePresence>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FlimMaking;
