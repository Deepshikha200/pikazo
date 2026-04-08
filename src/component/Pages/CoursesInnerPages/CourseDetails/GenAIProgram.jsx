import React from "react";
import CoursesInnerPages from "../CoursesInnerPages";
import { Col, Container, Row } from "react-bootstrap";
import { Graphics } from "../../../../assets/Student_Work/ArtImages";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../../../../assets/images/banner/GenAI.jpeg";
const GenAIProgram = () => {
  const faqData = [
    {
      ques: "What You'll Learn",
      ans: [
        {
          con1: "AI Content Creation (Text, Images, Video)",
          con2: "Prompt Engineering",
          con3: "AI Tools Mastery",
          con4: "Creative Thinking with AI",
          con5: "Social Media & Ad Content Creation",
          con6: "Branding & Design using AI",
          con7: "Portfolio Building",
        },
      ],
    },
    {
      ques: "Module 1: Introduction to Generative AI",
      ans: [
        {
          con1: "What is Generative AI",
          con2: "AI in industries",
          con3: "Tools ecosystem",
          con4: "Use cases",
        },
      ],
    },
    {
      ques: "Module 2: Prompt Engineering",
      ans: [
        {
          con1: "Writing prompts",
          con2: "CORE Framework",
          con3: "Output control",
          con4: "Advanced techniques",
        },
      ],
    },
    {
      ques: "Module 3: AI Image Generation",
      ans: [
        {
          con1: "Midjourney / DALL·E",
          con2: "Visual styles",
          con3: "Ad creatives",
          con4: "Social media design",
        },
      ],
    },
    {
      ques: "Module 4: AI Video Creation",
      ans: [
        {
          con1: "AI video tools",
          con2: "Script to video",
          con3: "Reels & ads",
          con4: "Storytelling",
        },
      ],
    },
    {
      ques: "Module 5: AI Content Writing",
      ans: [
        {
          con1: "Blogs & captions",
          con2: "Copywriting",
          con3: "Content strategy",
          con4: "Personal branding",
        },
      ],
    },
    {
      ques: "Module 6: Design & Branding",
      ans: [
        {
          con1: "Logo creation",
          con2: "Graphic design",
          con3: "Campaign design",
          con4: "Creative direction",
        },
      ],
    },
    {
      ques: "Module 7: Workflow Integration",
      ans: [
        {
          con1: "Tool combination",
          con2: "Efficient workflows",
          con3: "Speed optimization",
          con4: "Project execution",
        },
      ],
    },
    {
      ques: "Module 8: Portfolio & Monetization",
      ans: [
        {
          con1: "Portfolio building",
          con2: "Freelancing",
          con3: "Client projects",
          con4: "Earning methods",
        },
      ],
    },
  ];

  const jobs = [
    "Generative AI Creator",
    "AI Content Strategist",
    "Prompt Engineer",
    "AI Visual Designer",
    "Social Media AI Specialist",
    "Freelance Gen-AI Artist",
    "Brand & Creative AI Consultant",
  ];

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="pb-5">
      <CoursesInnerPages
        subtitle="Gen-AI (Generative AI) Program"
        description="Create Anything You Imagine — With AI. Generative AI is changing how the world creates — and this course puts you at the center of it. At Pikazzo Institute, this program is designed to help you turn ideas into real content using AI tools. Whether it's images, videos, designs, text, or branding — you'll learn how to create faster, smarter, and more creatively."
        description1="This is not theory-heavy. This is hands-on, tool-based, and industry-focused learning. You won't just use AI — you'll learn how to control it, guide it, and create powerful outputs with it."
        src={img1}
        faqData={faqData}
        jobs={jobs}
      />

    </section>
  );
};

export default GenAIProgram;
