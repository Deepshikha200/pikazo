import CoursesInnerPages from "../CoursesInnerPages";
import img from "../../../../assets/images/banner/Video Editing Banner.png";
import { Col, Container, Row } from "react-bootstrap";

const VideoEditing = () => {
  const videoEditingLinks = [
    "https://www.youtube.com/embed/xHskODr8pIw",
    "https://www.youtube.com/embed/xoF6s2GC9fM",
    "https://www.youtube.com/embed/MsjkeYfPWKY",
    "https://www.youtube.com/embed/ncTcIGtAb4M",
    "https://www.youtube.com/embed/AKFDelPXVsI",
    "https://www.youtube.com/embed/RqRXKwdALyQ",
  ];
  const faqData = [
    {
      ques: "Module 1: Introduction to Video Editing and Basic Editing Tools",
      ans: [
        {
          con1: "Introduction to Video Editing",
          con2: "Types of Video Editing",
          con3: "Basic Concepts of Video Editing",
          con4: "Types of Video Formats and Codecs",
          con5: "Video Editing Workflow: Importing, Organizing, and Managing Media",
          con6: "Editing Software Overview: Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve",
          con7: "Basic Editing Tools",
          con8: "Working with the Timeline",
          con9: "Exporting and Rendering Video Projects",
        },
      ],
    },
    {
      ques: "Module 2: Working with Adobe Premiere Pro: Interface and Basic Functions",
      ans: [
        {
          con1: "Introduction to Adobe Premiere Pro Interface",
          con2: "Project Setup: Creating New Projects and Sequences",
          con3: "Understanding the Timeline, Program Panel, and Source Monitor",
          con4: "Importing and Organizing Media",
          con5: "Basic Editing Tools in Premiere Pro",
          con6: "Working with Audio and Video Tracks in Premiere Pro",
          con7: "Adding Basic Transitions between Clips",
          con8: "Applying Effects",
          con9: "Exporting and Rendering Projects in Premiere Pro",
        },
      ],
    },
    {
      ques: "Module 3: Advanced Editing Techniques and Transitions",
      ans: [
        {
          con1: "Understanding the Concept of J and L Cuts",
          con2: "Advanced Cutting Techniques",
          con3: "Working with Multi-Camera Editing",
          con4: "Advanced Transitions",
          con5: "Using Adjustment Layers for Global Effects",
          con6: "Keyframing in Premiere Pro for Animation and Motion Effects",
          con7: "Creating Picture-in-Picture and Split-Screen Effects",
          con8: "Working with Nested Sequences",
          con9: "Understanding the Role of Visual Storytelling in Editing",
        },
      ],
    },
    {
      ques: "Module 4: Color Correction and Grading",
      ans: [
        {
          con1: "Introduction to Color Correction: Why It Matters",
          con2: "Basic Color Correction Techniques in Premiere Pro",
          con3: "Using Lumetri Color Panel for Basic Corrections",
          con4: "Advanced Color Grading: Color Wheels, Curves, and Saturation",
          con5: "Applying LUTs (Look-Up Tables) for Stylized Color Effects",
          con6: "Creating Cinematic Looks with Color Grading",
          con7: "Working with Skin Tones and Matching Color Between Clips",
          con8: "Using Vectorscope and Waveform for Color Monitoring",
          con9: "Exporting Graded Video for Different Platforms",
        },
      ],
    },
    {
      ques: "Module 5: Audio Editing and Sound Design",
      ans: [
        {
          con1: "Understanding Sound in Video",
          con2: "Audio Basics: Levels, Channels, and EQ",
          con3: "Working with the Audio Mixer in Premiere Pro",
          con4: "Syncing Audio and Video: Auto-Sync and Manual Sync",
          con5: "Using Audio Transitions: Fade In/Out, Crossfade",
          con6: "Audio Effects: Reverb, Echo, Equalizer",
          con7: "Sound Design for Video: Foley, Sound Effects, and Ambient Sound",
          con8: "Creating Music Scores and Integrating Sound Effects",
          con9: "Mastering Audio: Volume, Compression, and Normalization",
        },
      ],
    },
    {
      ques: "Module 6: Final Project & Review",
      ans: [
        {
          con1: "Planning the Final Video Editing Project",
          con2: "Creating a Storyboard or Script for Your Final Project",
          con3: "Assembling Raw Footage into a Rough Cut",
          con4: "Adding Transitions, Titles, and Graphics",
          con5: "Color Grading and Final Adjustments",
          con6: "Fine-tuning Audio: Background Music, Voiceovers, and Sound Effects",
          con7: "Exporting Final Projects for Various Platforms (YouTube, Social Media, etc.)",
          con8: "Final Project Presentation and Peer Review",
          con9: "Portfolio Development and Showcasing Your Work",
        },
      ],
    },
  ];

  const jobs = [
    "Video Editor",
    "Film Editor",
    "TV Production Editor",
    "Content Creator (YouTube, Social Media)",
    "Post-Production Supervisor",
    "Trailer Editor",
    "Music Video Editor",
    "Colorist",
    "Assistant Video Editor",
    "Documentary Film Editor",
    "Wedding/Event Video Editor",
    "Visual Effects Editor",
    "Editor for Marketing Videos",
    "Motion Graphics Editor",
    "Corporate Video Specialist",
    "Multimedia Editor",
    "Animation Post-Production Editor",
    "Commercial Video Editor",
    "Freelance Video Editor",
    "Online Media Editor",
  ];

  return (
    <section>
      <CoursesInnerPages
        subtitle="Video Editing"
        description="This course is designed to teach the art of storytelling through video editing. Students will learn video cutting, transitions, color grading, and sound editing using software like Adobe Premiere Pro and DaVinci Resolve. The course includes editing techniques for films, documentaries, social media, and promotional videos."
        src={img}
        faqData={faqData}
        jobs={jobs}
      />
      <Container>
        <div className="text-center py-5">
          <h2 className="text-center  graphic_heading">Student Work</h2>
          <Row>
            {videoEditingLinks.map((item, index) => (
              <Col lg={3} sm={6} xs={12} className="mb-4">
                <div key={index} className="py-3">
                  <iframe
                    width="100%"
                    height="200"
                    src={item}
                    title={`Video ${index + 1}`}
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default VideoEditing;
