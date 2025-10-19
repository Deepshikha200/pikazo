import img from "../../../../assets/images/banner/Digital Marketing.jpg";
import CoursesInnerPages from "../CoursesInnerPages";

const DigitalMarketing = () => {
  const faqData = [
    {
      ques: "Module 1: Introduction to Digital Marketing",
      ans: [
        {
          con1: "Understanding Digital Marketing: Scope and Importance",
          con2: "Overview of Traditional vs. Digital Marketing",
          con3: "Types of Digital Marketing Channels: SEO, SMM, PPC, Email, and Affiliate",
          con4: "Customer Journey in the Digital Space",
          con5: "Creating Buyer Personas: Understanding Your Audience",
          con6: "Introduction to Digital Marketing Tools",
          con7: "Digital Marketing Trends and Innovations",
          con8: "The Role of Branding in Digital Marketing",
          con9: "Setting SMART Goals for Digital Campaigns",
        },
      ],
    },
    {
      ques: "Module 2: Search Engine Optimization (SEO)",
      ans: [
        {
          con1: "What is SEO and Why it Matters?",
          con2: "Types of SEO: On-Page, Off-Page, and Technical",
          con3: "Keyword Research: Tools and Strategies",
          con4: "Optimizing Web Pages for SEO: Titles, Meta Descriptions, and URLs",
          con5: "Content Optimization for Search Engines",
          con6: "Link-Building Strategies: Backlinks and Internal Links",
          con7: "Technical SEO: Site Speed, Mobile Friendliness, and Crawlability",
          con8: "Tools for SEO: Google Search Console, SEMrush, Ahrefs",
          con9: "Measuring SEO Success: Traffic, Ranking, and Conversions",
        },
      ],
    },
    {
      ques: "Module 3: Social Media Marketing (SMM)",
      ans: [
        {
          con1: "Introduction to Social Media Platforms: Facebook, Instagram, LinkedIn, Twitter, etc.",
          con2: "Choosing the Right Platform for Your Audience",
          con3: "Creating Effective Social Media Profiles",
          con4: "Content Planning for Social Media",
          con5: "Leveraging Hashtags and Trends",
          con6: "Scheduling and Automating Posts: Tools like Hootsuite and Buffer",
          con7: "Social Media Ads: Targeting, Budgeting, and Optimization",
          con8: "Measuring Social Media Success: Insights and Engagement Metrics",
          con9: "Case Studies of Successful Social Media Campaigns",
        },
      ],
    },
    {
      ques: "Module 4: Content Marketing",
      ans: [
        {
          con1: "The Role of Content in Digital Marketing",
          con2: "Content Types: Blogs, Videos, Infographics, eBooks, and Podcasts",
          con3: "Planning a Content Marketing Strategy",
          con4: "Writing Engaging Copy for Different Platforms",
          con5: "Storytelling in Marketing: Connecting with Your Audience",
          con6: "Repurposing Content for Multiple Platforms",
          con7: "Tools for Content Creation: Canva, Grammarly, and AI Tools",
          con8: "Content Distribution Channels: Owned, Earned, and Paid Media",
          con9: "Measuring Content Performance: Engagement, Shares, and Traffic",
        },
      ],
    },
    {
      ques: "Module 5: Pay-Per-Click (PPC) Advertising",
      ans: [
        {
          con1: "Introduction to PPC Advertising: What is it and How it Works?",
          con2: "Google Ads: Creating and Managing Campaigns",
          con3: "Keyword Targeting for PPC Campaigns",
          con4: "Writing Effective Ad Copy for Higher CTR",
          con5: "Setting Budgets and Bidding Strategies",
          con6: "Display Ads vs. Search Ads",
          con7: "Retargeting Campaigns: Re-engaging Your Audience",
          con8: "Tracking PPC Performance with Google Ads and Analytics",
          con9: "Avoiding Common Mistakes in PPC Advertising",
        },
      ],
    },
    {
      ques: "Module 6: Email Marketing and Automation",
      ans: [
        {
          con1: "The Importance of Email Marketing in Digital Strategy",
          con2: "Building an Email List: Best Practices",
          con3: "Crafting Effective Emails: Subject Lines, Design, and Content",
          con4: "Email Campaign Types: Newsletters, Promotional, and Transactional",
          con5: "Segmentation and Personalization in Email Marketing",
          con6: "Tools for Email Marketing: Mailchimp, HubSpot, Constant Contact",
          con7: "Email Automation and Drip Campaigns",
          con8: "Avoiding Spam Filters and Ensuring Deliverability",
          con9: "Measuring Email Marketing Success: Open Rates, Click Rates, and Conversions",
        },
      ],
    },
    {
      ques: "Module 7: Analytics and Performance Measurement",
      ans: [
        {
          con1: "Importance of Analytics in Digital Marketing",
          con2: "Introduction to Google Analytics: Setting Up and Using",
          con3: "Understanding Website Metrics: Bounce Rate, Traffic, and Sessions",
          con4: "Tracking Campaigns with UTM Parameters",
          con5: "Measuring Social Media Performance: Insights and Reports",
          con6: "Monitoring PPC Campaigns: ROI and KPIs",
          con7: "Analyzing SEO Data: Organic Traffic and Keyword Rankings",
          con8: "Tools for Analytics: Google Data Studio, SEMrush, and HubSpot",
          con9: "Reporting and Presenting Data Insights",
        },
      ],
    },
    {
      ques: "Module 8: Strategy Development and Final Project",
      ans: [
        {
          con1: "Developing a Digital Marketing Strategy: Goals and Objectives",
          con2: "Budgeting for Digital Campaigns",
          con3: "Creating a Marketing Calendar",
          con4: "Combining SEO, SMM, PPC, and Email for Maximum Impact",
          con5: "Crisis Management in Digital Marketing",
          con6: "Ethical Considerations in Digital Marketing",
          con7: "Presenting a Digital Marketing Campaign Proposal",
          con8: "Final Project: Designing and Executing a Digital Campaign",
          con9: "Review and Feedback",
        },
      ],
    },
  ];

  const jobs = [
    "Digital Marketing Specialist",
    "Social Media Manager",
    "Content Strategist",
    "Search Engine Optimization (SEO) Specialist",
    "Search Engine Marketing (SEM) Expert",
    "Email Marketing Specialist",
    "Marketing Automation Specialist",
    "Digital Marketing Manager",
    "Performance Marketing Analyst",
    "Content Creator (Blogs, Videos)",
    "PPC Campaign Manager",
    "Data Analytics Specialist (Marketing)",
    "Affiliate Marketing Specialist",
    "E-commerce Marketing Manager",
    "Online Reputation Manager",
    "Influencer Marketing Manager",
    "Conversion Rate Optimization (CRO) Specialist",
    "Mobile Marketing Specialist",
    "Marketing Consultant",
    "Freelance Digital Marketer",
  ];

  return (
    <section>
      <CoursesInnerPages
        subtitle="Digital Marketing "
        description="This course equips students with skills to excel in the digital marketing landscape. Topics include SEO, social media marketing, PPC campaigns, email marketing, and analytics. By the end of the course, students will be able to strategize and execute effective digital campaigns across multiple platforms.
"
        src={img}
        faqData={faqData}
        jobs={jobs}
      />
    </section>
  );
};

export default DigitalMarketing;
