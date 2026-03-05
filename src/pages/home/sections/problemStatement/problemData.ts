export interface Resource {
  name: string;
  description: string;
  url: string;
}

export interface EvaluationCriterion {
  name: string;
  description: string;
}

export interface Problem {
  id: number;
  slug: string;
  title: string;
  description: string;
  goal: string;
  tags: string[];
  difficulty: string;
  objectives: string[];
  expectedSolution: string;
  evaluationCriteria: EvaluationCriterion[];
  resources: Resource[];
}

export interface EventSection {
  event: string;
  categorySlug: string;
  problems: Problem[];
}

export const Data: EventSection[] = [
  {
    event: "WEB DEVELOPMENT",
    categorySlug: "web-development",
    problems: [
      {
        id: 1,
        slug: "intelligent-campus-event-recommendation",
        title: "Intelligent Campus Event Recommendation Engine",
        description:
          "Build a centralized intelligent event discovery platform that matches students with relevant events while enabling clubs to manage and promote events effectively.",
        goal: "Centralized, personalized event discovery system",
        tags: ["Recommendation Engine", "Analytics", "Dashboard", "#WebDev"],
        difficulty: "Intermediate",
        objectives: [
          "Real-time event aggregation from multiple campus sources.",
          "Personalized recommendations based on student interests and past attendance.",
          "Club dashboard for event creation, promotion, and analytics.",
        ],
        expectedSolution:
          "A functional web application with a responsive UI featuring an event feed, recommendation engine, and club management dashboard. Integration with at least one external calendar or notification API is required.",
        evaluationCriteria: [
          { name: "Innovation", description: "Novel approach" },
          { name: "Impact", description: "Student engagement" },
          { name: "Technical Depth", description: "System complexity" },
          { name: "Usability", description: "UX/UI Quality" },
        ],
        resources: [
          {
            name: "Google Calendar API",
            description: "Calendar integration reference",
            url: "https://developers.google.com/calendar",
          },
          {
            name: "Recommendation Systems Guide",
            description: "Collaborative filtering techniques",
            url: "https://developers.google.com/machine-learning/recommendation",
          },
        ],
      },
      {
        id: 2,
        slug: "collaborative-timetable-deadline-manager",
        title: "Collaborative Timetable & Deadline Manager",
        description:
          "Build a collaborative academic planning tool that visualizes semester workload using heatmaps and enables shared deadline tracking.",
        goal: "Academic workload visualization & clash detection",
        tags: ["Heatmap", "Calendar Sync", "Clash Detection", "#WebDev"],
        difficulty: "Intermediate",
        objectives: [
          "Interactive heatmap visualization of semester workload.",
          "Real-time shared deadline tracking across study groups.",
          "Automatic clash detection for overlapping schedules and assignments.",
        ],
        expectedSolution:
          "A collaborative web app with drag-and-drop calendar, workload heatmaps, and real-time sync. The interface should support group invitations and deadline conflict alerts.",
        evaluationCriteria: [
          { name: "Innovation", description: "Novel approach" },
          { name: "Impact", description: "Productivity gain" },
          { name: "Technical Depth", description: "Real-time sync" },
          { name: "Usability", description: "UX/UI Quality" },
        ],
        resources: [
          {
            name: "FullCalendar.js",
            description: "Open-source calendar component",
            url: "https://fullcalendar.io/",
          },
          {
            name: "D3.js Heatmap",
            description: "Data visualization for heatmaps",
            url: "https://d3js.org/",
          },
        ],
      },
    ],
  },
  {
    event: "WEB3",
    categorySlug: "web3",
    problems: [
      {
        id: 1,
        slug: "carbon-credit-management-system",
        title: "Carbon Credit Management System",
        description:
          "Build a blockchain-based system that automates carbon credit creation, verification, tracking, trading, and retirement.",
        goal: "Transparent blockchain-based carbon lifecycle",
        tags: ["Smart Contracts", "Marketplace", "DAO", "#Web3"],
        difficulty: "Advanced",
        objectives: [
          "Smart contract-based carbon credit minting and verification.",
          "Peer-to-peer marketplace for trading carbon credits.",
          "DAO governance for policy decisions and credit retirement.",
        ],
        expectedSolution:
          "A functional DApp with smart contracts deployed on a testnet, featuring a trading marketplace, transparent verification process, and DAO voting mechanism.",
        evaluationCriteria: [
          { name: "Innovation", description: "Novel approach" },
          { name: "Impact", description: "Reduction potential" },
          { name: "Technical Depth", description: "Smart contract design" },
          { name: "Usability", description: "UX/UI Quality" },
        ],
        resources: [
          {
            name: "Carbon API Documentation",
            description: "Access emission factor data",
            url: "https://docs.carboninterface.com/",
          },
          {
            name: "OpenZeppelin Contracts",
            description: "Audited smart contract library",
            url: "https://docs.openzeppelin.com/contracts/",
          },
        ],
      },
      {
        id: 2,
        slug: "decentralized-identity-management",
        title: "Decentralized Identity Management (DID)",
        description:
          "Build a decentralized identity system enabling self-sovereign identity and privacy-preserving authentication.",
        goal: "Self-sovereign identity & verifiable credentials",
        tags: ["SSI", "ZKP", "Multi-chain", "#Web3"],
        difficulty: "Advanced",
        objectives: [
          "Self-sovereign identity creation and management.",
          "Zero-knowledge proof based privacy-preserving authentication.",
          "Cross-chain interoperability for identity portability.",
        ],
        expectedSolution:
          "A DApp allowing users to create decentralized identities, issue and verify credentials, and authenticate across platforms without revealing unnecessary personal data.",
        evaluationCriteria: [
          { name: "Innovation", description: "Novel approach" },
          { name: "Impact", description: "Privacy improvement" },
          { name: "Technical Depth", description: "ZKP complexity" },
          { name: "Usability", description: "UX/UI Quality" },
        ],
        resources: [
          {
            name: "W3C DID Specification",
            description: "Decentralized identifier standards",
            url: "https://www.w3.org/TR/did-core/",
          },
          {
            name: "Polygon ID",
            description: "Zero-knowledge identity framework",
            url: "https://polygon.technology/polygon-id",
          },
        ],
      },
    ],
  },
  {
    event: "AI/ML",
    categorySlug: "ai-ml",
    problems: [
      {
        id: 1,
        slug: "intelligent-data-preprocessing-agent",
        title: "Intelligent Data Preprocessing Agent",
        description:
          "Build an AI-powered preprocessing agent that profiles, cleans, transforms, and outputs a model-ready dataset with explainability.",
        goal: "Automated dataset cleaning pipeline",
        tags: ["Data Cleaning", "Explainable AI", "Automation", "#MachineLearning"],
        difficulty: "Intermediate",
        objectives: [
          "Automated data profiling and anomaly detection.",
          "Intelligent missing value imputation and outlier handling.",
          "Explainable transformation pipeline with audit trail.",
        ],
        expectedSolution:
          "A functional web or desktop application with an interactive UI that allows users to upload datasets, visualize data quality issues, apply automated cleaning operations, and export model-ready data with transformation logs.",
        evaluationCriteria: [
          { name: "Innovation", description: "Novel approach" },
          { name: "Impact", description: "Reduction potential" },
          { name: "Technical Depth", description: "Model complexity" },
          { name: "Usability", description: "UX/UI Quality" },
        ],
        resources: [
          {
            name: "Kaggle Training Datasets",
            description: "Kaggle training datasets",
            url: "https://www.kaggle.com/datasets",
          },
          {
            name: "Pandas Profiling",
            description: "Automated exploratory data analysis",
            url: "https://github.com/ydataai/ydata-profiling",
          },
        ],
      },
      {
        id: 2,
        slug: "multimodal-semantic-retrieval-system",
        title: "Multimodal Semantic Retrieval System",
        description:
          "Build a multi-agent multimodal semantic search engine capable of understanding meaning across multiple input formats.",
        goal: "Cross-modal semantic search system",
        tags: ["Transformers", "Vector Search", "Multimodal", "#DataScience"],
        difficulty: "Advanced",
        objectives: [
          "Cross-modal embedding for text, images, and audio inputs.",
          "Vector-based semantic search with high retrieval accuracy.",
          "Multi-agent architecture for distributed query processing.",
        ],
        expectedSolution:
          "A search application supporting text, image, and optionally audio queries that returns semantically relevant results across modalities. Should include a clean search interface and relevance scoring.",
        evaluationCriteria: [
          { name: "Innovation", description: "Novel approach" },
          { name: "Impact", description: "Search quality" },
          { name: "Technical Depth", description: "Model architecture" },
          { name: "Usability", description: "UX/UI Quality" },
        ],
        resources: [
          {
            name: "HuggingFace Transformers",
            description: "Pre-trained model library",
            url: "https://huggingface.co/docs/transformers",
          },
          {
            name: "Pinecone Vector DB",
            description: "Vector database for semantic search",
            url: "https://www.pinecone.io/",
          },
        ],
      },
    ],
  },
];

/** Helper: find a problem by category slug and problem id */
export function findProblem(
  categorySlug: string,
  problemId: number
): { event: EventSection; problem: Problem } | null {
  const section = Data.find((s) => s.categorySlug === categorySlug);
  if (!section) return null;
  const problem = section.problems.find((p) => p.id === problemId);
  if (!problem) return null;
  return { event: section, problem };
}