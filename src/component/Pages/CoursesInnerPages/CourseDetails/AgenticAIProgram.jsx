import CoursesInnerPages from "../CoursesInnerPages";
import img1 from "../../../../assets/images/banner/Agents.jpeg";

const AgenticAIProgram = () => {
  const faqData = [
    {
      ques: "What You'll Learn",
      ans: [
        {
          con1: "Fundamentals of Agentic AI",
          con2: "Building AI Agents",
          con3: "Task Automation",
          con4: "Decision-making systems",
          con5: "Multi-step workflows",
          con6: "AI tools & integrations",
          con7: "Real-world applications",
        },
      ],
    },
    {
      ques: "Module 1: Introduction to Agentic AI",
      ans: [
        {
          con1: "What is Agentic AI",
          con2: "Gen-AI vs Agentic AI",
          con3: "Applications",
          con4: "Future scope",
        },
      ],
    },
    {
      ques: "Module 2: Foundations of AI Agents",
      ans: [
        {
          con1: "How agents work",
          con2: "Inputs/Outputs",
          con3: "Decision basics",
          con4: "Workflows",
        },
      ],
    },
    {
      ques: "Module 3: Tools & Frameworks",
      ans: [
        {
          con1: "AI tools",
          con2: "APIs",
          con3: "Integrations",
          con4: "No-code platforms",
        },
      ],
    },
    {
      ques: "Module 4: Build Your First Agent",
      ans: [
        {
          con1: "Agent creation",
          con2: "Task agents",
          con3: "Prompt chaining",
          con4: "Testing",
        },
      ],
    },
    {
      ques: "Module 5: Multi-Step Workflows",
      ans: [
        {
          con1: "Planning systems",
          con2: "Task breakdown",
          con3: "Automation",
          con4: "Optimization",
        },
      ],
    },
    {
      ques: "Module 6: Memory & Intelligence",
      ans: [
        {
          con1: "AI memory",
          con2: "Context handling",
          con3: "Learning systems",
          con4: "Personalization",
        },
      ],
    },
    {
      ques: "Module 7: Real-World Applications",
      ans: [
        {
          con1: "Business agents",
          con2: "Research AI",
          con3: "Content agents",
          con4: "Support systems",
        },
      ],
    },
    {
      ques: "Module 8: Deployment & Monetization",
      ans: [
        {
          con1: "Deployment",
          con2: "Products/services",
          con3: "Freelancing",
          con4: "Scaling",
        },
      ],
    },
  ];

  const jobs = [
    "AI Agent Developer",
    "Agentic AI Engineer",
    "LLM Application Developer",
    "AI Systems Architect",
    "Automation & AI Consultant",
    "Product AI Specialist",
    "Freelance AI Builder",
  ];

  return (
    <section className="pb-5">
      <CoursesInnerPages
        subtitle="Agentic AI Program"
        description="Build AI That Thinks, Decides & Works For You. Agentic AI is the next evolution of artificial intelligence. Instead of just generating content, AI Agents can think, plan, take actions, and complete tasks on their own. This course is designed to help you build these intelligent systems from scratch."
        description1="At Pikazzo Institute, you'll learn how to create AI that doesn't just respond — it acts like a smart assistant, employee, or decision-maker. Don't Just Use AI. Build It. Step into the future with Agentic AI. Enroll Now | Book Free Demo | Scan QR to Start."
        src={img1}
        faqData={faqData}
        jobs={jobs}
      />
    </section>
  );
};

export default AgenticAIProgram;
