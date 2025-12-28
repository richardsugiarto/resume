const base = process.env.PUBLIC_URL || ""

const experienceData = [
  {
    id: "bmgse",
    companyNamePortfolio: "Beyond Media Global",
    jobTitle: "Software Engineer",
    description: "Worked as Software Engineer who experienced in building and optimizing CMS and eCommerce platforms with a focus on performance, SEO, and security. Skilled in system architecture, API integration, and React/Python development, including internal tools and AI-powered automation to streamline workflows and improve user engagement.",
    logo: base + "/experience-md/bmgse/image1.png",
    mdFile: base + "/experience-md/bmgse.md",
    title: "Software Engineer",
    company: "Beyond Media Global (柏媒網絡科技有限公司), Taipei, Taiwan 03/2023 – 03/2025",
    skills: "PHP, JS, ReactJS, HTML, CSS, Python, Networking, Linux",
    jobs: [

      "Automated lead qualification by developing an AI-powered backend service in Python that connected NVIDIA LLaMA with Zapier, reducing manual processing time",
      "Developed an internal back-office application using React for managing insertion orders, integrating it with backend APIs to streamline data operations and administrative workflows",
      "Built and deployed API-based applications using React and Python, integrating third-party services such as Zoho Books and Google OAuth for seamless automation",
      "Collaborated with cross-functional teams, including designers, PMs, SEO specialists, and clients, to deliver scalable CMS and eCommerce platforms with long-term maintenance support",
      "Defined and implemented system architecture, aligning development strategy with business objectives and performance requirements",
      "Engineered and optimized CMS and eCommerce systems on WordPress, Shopify, and Magento2, focusing on performance, SEO, security, and reliability to improve user engagement and conversion rates"
    ],
    isShownInResume: true
  },
  {
    id: "funpodiumfe",
    companyNamePortfolio: "Funpodium",
    jobTitle: "React Developer",
    description: "Worked as a CMS React Frontend Developer responsible for maintaining and developing new UI features within a Drupal-integrated React system.",
    logo: base + "/experience-md/funpodiumfe/image0.webp",
    mdFile: base + "/experience-md/funpodiumfe.md",
    title: "CMS React Developer",
    company: "Funpodium (奕兆有限公司), Taipei, Taiwan 08/2022 – 02/2023",
    skills: "ReactJS, JavaScript, TypeScript, HTML, CSS, PHP, Drupal, Linux",
    jobs: [
      "Collaborated closely with product managers and backend engineers to define API requirements and deliver maintainable, high-performance CMS interfaces",
      "Engineered reusable React component libraries to ensure consistency, scalability, and efficient integration with backend data systems",
      "Researched and adopted emerging frontend technologies to improve performance, reliability, and developer workflow"
    ],
    isShownInResume: true
  },
  {
    id: "euidl",
    companyNamePortfolio: "Eastern Union Interactive",
    jobTitle: "Deep Learning Developer (Project-Based)",
    description: "Developed a lightweight validation module that ensures high-quality ARC photo submissions through glare detection and face–ARC position checking.",
    logo: base + "/experience-md/euidl/image0.png",
    mdFile: base + "/experience-md/euidl.md",
    title: "Freelance Deep Learning Developer (Project-Based)",
    company: "Eastern Union Interactive (東聯互動股份有限公司), Taipei, Taiwan 06/2020 – 01/2021 ",
    skills: "Python, Machine Learning, Computer Vision, Android Native, IOS",
    jobs: [
      "Developed glare-detection using OpenCV to apply pre-processing steps of Taiwan’s Alien Resident Certificate (ARC)’s validation. ",
      "Designed a light-weight recognition module to validate the position ARC card by perform ARC card recognition given an RGB image using tiny-yolo.",
      "Implemented the glare- and landmark-detection modules using Android Studio and IOS swift. "
    ],
    isShownInResume: true
  },
  {
    id: "existmatefd",
    companyNamePortfolio: "CV Irawan Jaya Utama",
    jobTitle: "Full Stack Developer (Internship)",
    description: "Developed a Django-based web application for restaurant operations that centralizes menu presentation, booking management, and image uploads.",
    logo: base + "/experience-md/existmatefd/image0.png",
    mdFile: base + "/experience-md/existmatefd.md",
    title: "Full Stack Developer (Internship)",
    company: "CV Irawan Jaya Utama, Surabaya, Indonesia 02/2018 – 07/2018 ",
    skills: "Python, Django HTML, CSS, JavaScript, MySQL",
    jobs: [
      "Designed backend models and views using Django  ",
      "Implemented frontend templates and JavaScript interactions  ",
      "Integrated third-party UI libraries  ",
      "Managed database migrations and static/media asset handling  "
    ],
    isShownInResume: false
  }
];

export default experienceData;
