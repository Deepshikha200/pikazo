import React from "react";
import CoursesInnerPages from "../CoursesInnerPages";
import { Col, Container, Row } from "react-bootstrap";
import { Graphics } from "../../../../assets/Student_Work/ArtImages";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../../../../assets/images/banner/AIAutomation.jpeg";

const AIAutomationProgram = () => {
  const faqData = [
    {
      ques: "What You'll Learn",
      ans: [
        {
          con1: "Fundamentals of AI Automation",
          con2: "Workflow Building",
          con3: "Task Automation",
          con4: "AI Tools & Integrations",
          con5: "No-code / Low-code platforms",
          con6: "Business Automation Systems",
          con7: "Real-world use cases",
        },
      ],
    },
    {
      ques: "Module 1: Introduction to AI Automation",
      ans: [
        {
          con1: "What is AI Automation",
          con2: "Why automation matters",
          con3: "Use cases",
          con4: "Industry applications",
        },
      ],
    },
    {
      ques: "Module 2: Automation Foundations",
      ans: [
        {
          con1: "Understanding workflows",
          con2: "Triggers & actions",
          con3: "Logic building",
          con4: "Process mapping",
        },
      ],
    },
    {
      ques: "Module 3: Tools & Platforms",
      ans: [
        {
          con1: "Zapier / Make / AI tools",
          con2: "Integrations",
          con3: "Connecting apps",
          con4: "No-code automation",
        },
      ],
    },
    {
      ques: "Module 4: Content Automation",
      ans: [
        {
          con1: "Auto content generation",
          con2: "Social media automation",
          con3: "Email automation",
          con4: "Scheduling systems",
        },
      ],
    },
    {
      ques: "Module 5: Business Automation",
      ans: [
        {
          con1: "Lead generation systems",
          con2: "CRM automation",
          con3: "Customer support automation",
          con4: "Sales workflows",
        },
      ],
    },
    {
      ques: "Module 6: Advanced Automation",
      ans: [
        {
          con1: "Multi-step workflows",
          con2: "Conditional logic",
          con3: "Error handling",
          con4: "Optimization",
        },
      ],
    },
    {
      ques: "Module 7: AI + Automation Integration",
      ans: [
        {
          con1: "Using AI inside workflows",
          con2: "Smart decision systems",
          con3: "Combining tools",
          con4: "Scaling automation",
        },
      ],
    },
    {
      ques: "Module 8: Deployment & Monetization",
      ans: [
        {
          con1: "Deploying systems",
          con2: "Client projects",
          con3: "Freelancing",
          con4: "Building automation services",
        },
      ],
    },
  ];

  const jobs = [
    "Automation Specialist",
    "Workflow Developer",
    "Business Process Automation Consultant",
    "No-code / Low-code Developer",
    "Integration Engineer",
    "Operations Automation Lead",
    "CRM Automation Expert",
    "Freelance Automation Consultant",
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
        subtitle="AI Automation Program"
        description="Build Smart Systems That Work For You. AI Automation is all about reducing manual work and creating systems that run on their own. In this course, you'll learn how to automate repetitive tasks using AI tools, workflows, and integrations. From content creation to business processes — you'll build systems that save time and increase productivity."
        description1="At Pikazzo Institute, this is not theory-based learning. You'll create real automation systems that work in real-world scenarios. Stop Doing Repetitive Work. Start Building Systems That Work For You. Enroll Now | Book Free Demo | Scan QR to Get Started."
        src={img1}
        faqData={faqData}
        jobs={jobs}
      />
    </section>
  );
};

export default AIAutomationProgram;
