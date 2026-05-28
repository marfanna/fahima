export const profile = {
  name: "Fahima Sultana",
  tagline: "Sociologist · Researcher · PhD Candidate",
  location: "Bronx, NY",
  email: "fsltana1@memphis.edu",
  linkedin: "https://www.linkedin.com/in/fsltana",
  summary:
    "Fully-funded PhD student in the Community Research & Action Doctoral Program at Binghamton University. MA in Sociology from the University of Memphis with expertise in quantitative and qualitative research, health inequities, and social determinants of health. Experienced in research, procurement operations, and international student services with a proven ability to manage cross-cultural interactions and deliver inclusive service in academic and professional settings.",
  headshot: "/images/headshot.jpg",
};

export const navLinks = [
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Skills", href: "/skills" },
  { label: "Affiliations", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

export type ResearchType = "Paper" | "Poster" | "Exhibition";

export interface ResearchProject {
  slug: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  type: ResearchType;
  shortDescription: string;
  bullets: string[];
  tools: string[];
}

export const researchProjects: ResearchProject[] = [
  {
    slug: "medical-debt-health-costs",
    title: "Understanding the Physical and Mental Health Costs of Medical Debt",
    venue: "Southern Sociological Society Annual Meeting",
    location: "Charlotte, NC",
    date: "April 2025",
    type: "Paper",
    shortDescription:
      "Quantitative study on how medical debt drives psychological distress and physical health decline using NHIS data.",
    bullets: [
      "Investigated the impact of medical debt on psychological distress and physical health decline using National Health Interview Survey (NHIS) data.",
      "Applied the Health Belief Model and Social Determinants of Health (SDOH) framework to guide hypothesis development and model construction.",
      "Conducted linear regression analyses in RStudio to identify significant predictors of health outcomes.",
      "Presented early findings at the SSS Annual Meeting and refined research design based on interdisciplinary feedback and peer critique.",
    ],
    tools: ["RStudio", "NHIS Data", "Linear Regression", "Health Belief Model", "SDOH Framework"],
  },
  {
    slug: "medical-debt-homelessness",
    title: "Medical Debt and the Quest for Stability",
    venue: "Southern Demographic Association Annual Meeting",
    location: "Savannah, GA",
    date: "October 2024",
    type: "Poster",
    shortDescription:
      "Faculty-advised quantitative study on the relationship between medical debt and homelessness using NHIS data.",
    bullets: [
      "Conducted a faculty-advised quantitative study using National Health Interview Survey (NHIS) data focused on the relationship between medical debt and homelessness.",
      "Cleaned and analyzed data in RStudio, using descriptive statistics and logistic regression to examine socioeconomic patterns and public health disparities.",
      "Designed a professional conference poster using Canva and Excel visuals; presented findings to academic audiences and received constructive feedback.",
      "Incorporated reviewer input to strengthen policy implications and explore extended research directions for publication.",
    ],
    tools: ["RStudio", "NHIS Data", "Logistic Regression", "Descriptive Statistics", "Canva", "Excel"],
  },
  {
    slug: "women-household-economy-sylhet",
    title: "Role of Women from Lower Income Groups in Household Economy in Sylhet, Bangladesh",
    venue: "Photo Exhibition — Shahjalal University of Science and Technology",
    location: "Sylhet, Bangladesh",
    date: "April 2016",
    type: "Exhibition",
    shortDescription:
      "Visual ethnographic exhibition examining the economic contributions of lower-income women in Sylhet's household economy.",
    bullets: [
      "Documented through photography the daily economic contributions of women from lower-income groups in Sylhet households.",
      "Explored intersections of gender, class, and labor within domestic and informal economic spheres.",
      "Presented as a public exhibition at Shahjalal University of Science and Technology, engaging interdisciplinary academic and community audiences.",
    ],
    tools: ["Ethnographic Photography", "Visual Sociology", "Field Research"],
  },
];

export interface WorkRole {
  title: string;
  type: "Research" | "Teaching" | "Administrative" | "Compliance" | "NGO" | "Survey";
  bullets: string[];
}

export interface WorkExperience {
  organization: string;
  location: string;
  dateRange: string;
  roles: WorkRole[];
}

export const workExperience: WorkExperience[] = [
  {
    organization: "Department of Sociology, University of Memphis",
    location: "Memphis, TN",
    dateRange: "Aug 2023 – Aug 2025",
    roles: [
      {
        title: "Research Assistant",
        type: "Research",
        bullets: [
          "Synthesized findings from 50+ peer-reviewed studies and field notes into annotated bibliographies, briefs, and abstracts to support faculty publications and academic conference submissions.",
          "Transcribed and thematically coded over 30 hours of qualitative interviews using NVivo, contributing to ongoing research on racial health inequities and healthcare access.",
          "Conducted targeted literature reviews on topics including religion, morality, disability, and health; evaluated and categorized scholarly sources by theoretical framework, region, and study design.",
          "Identified relevant interdisciplinary scholarship and supported the development of an autoethnographic study on spirituality and pilgrimage by locating sociological and religious studies literature.",
        ],
      },
      {
        title: "Teaching Assistant",
        type: "Teaching",
        bullets: [
          "Facilitated weekly discussion sections for undergraduate courses in sociology, guiding student engagement with sociological theory, research methods, and applied analysis.",
          "Provided detailed written feedback and graded essays, quizzes, and exams, helping students strengthen analytical thinking and academic writing skills.",
          "Maintained digital attendance logs and gradebooks; supported course preparation by uploading readings, managing assignments, and developing instructional materials on the learning platform.",
          "Delivered ongoing virtual academic support for students beyond scheduled office hours, guiding them on research proposals and course content to foster inclusive learning environments.",
        ],
      },
    ],
  },
  {
    organization: "Procurement & Contract Services, University of Memphis",
    location: "Memphis, TN",
    dateRange: "Apr 2023 – Aug 2023",
    roles: [
      {
        title: "Administrative Assistant",
        type: "Administrative",
        bullets: [
          "Processed and coded 25–30 P Card transactions daily in Tigerbuy and Banner, ensuring accurate FOAPAL coding and adherence to procurement policies.",
          "Uploaded vendor tax documentation (W-9/W-8BEN) and supporting documents into the system, meeting strict audit protocols and record retention standards.",
          "Tracked contract workflows by updating approval statuses, routing signed documents across departments, and flagging delays to supervisors.",
          "Maintained organized digital records and Excel spreadsheets for audit readiness, while coordinating training emails and reminders to staff.",
          "Hand-delivered signed contract packets to financial directors and administrative offices to obtain formal approvals and finalize documentation.",
          "Provided front-desk support by answering departmental inquiries, assisting walk-ins, and managing phone and email communication.",
        ],
      },
    ],
  },
  {
    organization: "Center for International Education Services, University of Memphis",
    location: "Memphis, TN",
    dateRange: "Jan 2023 – Apr 2023",
    roles: [
      {
        title: "Graduate Assistant",
        type: "Administrative",
        bullets: [
          "Supported international student services by assisting with orientation sessions, immigration advising, and onboarding communications for newly admitted students.",
          "Prepared and reviewed visa-related documentation and academic enrollment forms to ensure compliance with federal regulations and university requirements.",
          "Responded to daily student inquiries, provided guidance on campus resources, and helped foster a welcoming and inclusive environment for students from diverse backgrounds.",
          "Contributed to the planning and execution of cross-cultural programming and campus events, promoting global awareness and community engagement among students.",
        ],
      },
    ],
  },
  {
    organization: "Department of Anthropology, University of Memphis",
    location: "Memphis, TN",
    dateRange: "Aug 2022 – Dec 2022",
    roles: [
      {
        title: "Graduate Assistant",
        type: "Teaching",
        bullets: [
          "Graded quizzes and short written assignments and provided feedback to support student learning in anthropology courses.",
          "Conducted literature reviews and transcribed qualitative interviews to assist with faculty research in cultural anthropology and health practices.",
          "Supported student engagement by responding to course-related questions and helping facilitate effective communication between students and faculty.",
        ],
      },
    ],
  },
  {
    organization: "AIMS Education Limited",
    location: "Sylhet, Bangladesh",
    dateRange: "Jul 2021 – Jul 2022",
    roles: [
      {
        title: "Compliance Officer",
        type: "Compliance",
        bullets: [
          "Reviewed and verified documentation for study abroad applicants, ensuring compliance with international admission and visa requirements.",
          "Acted as a liaison between students, embassies, and international universities to streamline application and enrollment processes.",
          "Advised students on academic program selection, visa procedures, and interview preparation, improving acceptance and approval outcomes.",
          "Maintained detailed records of applicant progress, deadlines, and submission statuses to support data accuracy and smooth processing.",
        ],
      },
    ],
  },
  {
    organization: "Shahjalal University Research Centre",
    location: "Sylhet, Bangladesh",
    dateRange: "Aug 2020 – Jul 2021",
    roles: [
      {
        title: "Research Assistant",
        type: "Research",
        bullets: [
          "Conducted in-depth interviews and field observations in urban and rural settings for two public health research projects on self-medication and health communication.",
          "Supported questionnaire development and managed data entry for qualitative fieldwork using structured and semi-structured interview formats.",
          "Reviewed literature and synthesized relevant findings to inform research design and support reporting.",
          "Drafted research summaries and contributed to background sections for internal reports and academic writing.",
        ],
      },
    ],
  },
  {
    organization: "Rangpur Dinajpur Rural Service (RDRS)",
    location: "Sylhet, Bangladesh",
    dateRange: "Mar 2018 – Aug 2019",
    roles: [
      {
        title: "Learning Facilitator",
        type: "NGO",
        bullets: [
          "Facilitated early childhood education initiatives in underserved rural communities, promoting foundational literacy and numeracy among children.",
          "Designed and implemented culturally relevant, interactive learning activities tailored to local needs and language contexts.",
          "Conducted regular home visits to engage parents on key issues such as child development, nutrition, and hygiene, strengthening family involvement in education.",
          "Collaborated with local educators and health workers to identify barriers to learning and support school attendance through integrated education-health outreach.",
        ],
      },
    ],
  },
  {
    organization: "World Vision Bangladesh",
    location: "Sylhet, Bangladesh",
    dateRange: "Dec 2018 – Jan 2019",
    roles: [
      {
        title: "Survey Enumerator",
        type: "Survey",
        bullets: [
          "Conducted household-level surveys as part of a public health data collection initiative focused on sanitation and hygiene practices in rural communities.",
          "Ensured accuracy, completeness, and confidentiality of responses during face-to-face interviews; maintained field notes and submitted daily reports to project supervisors.",
          "Built rapport with participants and obtained informed consent, upholding ethical research standards in diverse community settings.",
          "Collaborated with team members to resolve logistical challenges and complete assigned survey zones on schedule.",
        ],
      },
    ],
  },
  {
    organization: "Memphis Area Prevention Coalition",
    location: "Memphis, TN",
    dateRange: "Apr 2023",
    roles: [
      {
        title: "Volunteer Intern",
        type: "NGO",
        bullets: [
          "Supported logistics and attendee coordination at the Shelby County Alcohol, Tobacco & Other Drug Summit, helping raise public awareness about substance use prevention.",
          "Assisted in event setup, registration, and distribution of educational materials to diverse community stakeholders including students, educators, and health professionals.",
          "Engaged with participants to promote healthy choices and community-based prevention strategies, contributing to outreach and evaluation efforts.",
        ],
      },
    ],
  },
];

export interface Degree {
  degree: string;
  field: string;
  institution: string;
  location: string;
  dateRange: string;
  note?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  bullets?: string[];
}

export const education: Degree[] = [
  {
    degree: "Doctor of Philosophy",
    field: "Community Research & Action",
    institution: "Binghamton University",
    location: "Binghamton, NY",
    dateRange: "2026 – Present",
    note: "Fully Funded Doctoral Fellowship · Advisor: L. Mason-Williams, PhD — Director, Community Research & Action Doctoral Program · Associate Professor, Dept. of Teaching, Learning & Educational Leadership · College of Community & Public Affairs",
  },
  {
    degree: "Master of Arts",
    field: "Sociology",
    institution: "University of Memphis",
    location: "Memphis, TN",
    dateRange: "December 2025",
  },
  {
    degree: "Master of Arts",
    field: "Anthropology",
    institution: "University of Memphis",
    location: "Memphis, TN",
    dateRange: "Aug 2022 – May 2023",
  },
  {
    degree: "Master of Social Science",
    field: "Anthropology",
    institution: "Shahjalal University of Science and Technology",
    location: "Sylhet, Bangladesh",
    dateRange: "Jan 2017 – Jan 2018",
  },
  {
    degree: "Bachelor of Social Science",
    field: "Anthropology",
    institution: "Shahjalal University of Science and Technology",
    location: "Sylhet, Bangladesh",
    dateRange: "Jan 2012 – Dec 2016",
  },
];

export const certificates: Certificate[] = [
  {
    name: "IRB Process Workshop",
    issuer: "Division of Research & Innovation, University of Memphis",
    date: "March 2025",
    bullets: [
      "Completed training on ethical research practices and Institutional Review Board (IRB) protocols, including human subjects protection and informed consent procedures.",
    ],
  },
  {
    name: "Research Methodology: Basic to Advanced",
    issuer: "Research Help Bangladesh",
    date: "Aug 2023 – Oct 2023",
  },
];

export const skillGroups = [
  {
    category: "Research & Analysis",
    skills: [
      "NVivo",
      "RStudio / R",
      "SPSS",
      "KoBo Toolbox",
    ],
  },
  {
    category: "Reference & Writing",
    skills: ["Zotero", "Mendeley", "LaTeX"],
  },
  {
    category: "Productivity & Documentation",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
  },
];

export const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Proficient" },
  { name: "Hindi", level: "Fluent" },
  { name: "Urdu", level: "Fluent" },
];

export const volunteerActivities = [
  {
    role: "Graduate Program Representative",
    organization: "Southern Sociological Society Annual Meeting",
    location: "Charlotte, NC",
    date: "Apr 2025",
  },
  {
    role: "Sociology Representative",
    organization: "Discover Your Major Information Fair, University of Memphis",
    location: "Memphis, TN",
    date: "Oct 2024",
  },
  {
    role: "Member",
    organization: "Bangladeshi Students Association, University of Memphis",
    location: "Memphis, TN",
    date: "Aug 2023 – Present",
  },
  {
    role: "Volunteer",
    organization: "Shelby County Alcohol, Tobacco & Other Drug Summit",
    location: "Memphis, TN",
    date: "Apr 2023",
  },
  {
    role: "Volunteer",
    organization: "UNICEF Bangladesh",
    location: "Dhaka, Bangladesh",
    date: "Jan 2015",
  },
  {
    role: "Co-Organizer",
    organization: "International Conference, Dept. of Anthropology, SUST",
    location: "Sylhet, Bangladesh",
    date: "Feb 2016",
  },
  {
    role: "Volunteer",
    organization: "JAAGO Foundation",
    location: "Sylhet, Bangladesh",
    date: "Mar 2012",
  },
];

export const affiliations = [
  "Alpha Kappa Delta — International Honor Society of Sociology",
  "Southern Demographic Association",
  "Southern Sociological Association",
  "American Sociological Association",
  "Bangladesh Student Association, University of Memphis",
  "American Anthropological Association",
  "Anthropublic, SUST Research Center",
];
