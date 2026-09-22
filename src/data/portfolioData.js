// ---------------------------------------------------------------------------
// portfolioData.js — single source of truth, built from the resume.
// Fields marked PLACEHOLDER weren't in the resume — swap in your real
// links/assets before deploying.
// ---------------------------------------------------------------------------

export const personalInfo = {
  name: 'Madanapalli Narasimha',
  firstName: 'Narasimha',
  lastName: 'Madanapalli',
  title: 'Full Stack Developer & AI Enthusiast',
  taglineLines: [
    'B.Tech CSBS Student | Web Developer | React.js Enthusiast',
    'SIH 2025 Finalist | Java & Python Learner',
    'Passionate about building innovative digital solutions.',
  ],
  email: 'narasimha146a@gmail.com',
  phone: '+91 7981366751',
  location: 'Andhra Pradesh, India',
  age: '21', // PLACEHOLDER
  educationShort: 'B.Tech CSBS',
  interests: 'Web Dev, AI/ML, Photography, Travel', // PLACEHOLDER
  hobbies: 'Traveling, Movies, Coding', // PLACEHOLDER
  github: 'https://github.com/', // PLACEHOLDER
  linkedin: 'https://linkedin.com/', // PLACEHOLDER
  instagram: 'https://instagram.com/', // PLACEHOLDER
  resumeFile: '/resume/Narasimha_Resume.pdf', // drop your resume PDF into public/resume/
  avatar: '/assets/avatar-placeholder.jpg', // PLACEHOLDER — replace with a real headshot
  aboutMedia: {
    type: 'image', // 'image' | 'video'
    src: 'https://picsum.photos/seed/narasimha-about/900/650', // PLACEHOLDER
  },
};

export const socialLinks = [
  { name: 'GitHub', url: personalInfo.github, icon: 'FiGithub' },
  { name: 'LinkedIn', url: personalInfo.linkedin, icon: 'FiLinkedin' },
  { name: 'Instagram', url: personalInfo.instagram, icon: 'FiInstagram' },
  { name: 'Email', url: `mailto:${personalInfo.email}`, icon: 'FiMail' },
];

export const about = {
  summary:
    "I'm a B.Tech Computer Science & Business Systems student with a strong interest in full-stack web development. I enjoy building user-friendly web applications using React.js, Java, FastAPI, MongoDB, HTML, CSS and JavaScript. Through internships and personal projects, I've gained practical experience developing full-stack and AI-based applications.",
  objective:
    'Eager to learn new technologies, solve real-world problems, and contribute to building impactful software solutions as a software engineer at a product-based company.',
  meta: [
    { label: 'From', value: personalInfo.location, icon: 'FiMapPin' },
    { label: 'Age', value: personalInfo.age, icon: 'FiUser' },
    { label: 'Education', value: personalInfo.educationShort, icon: 'FiBriefcase' },
    { label: 'Interests', value: personalInfo.interests, icon: 'FiHeart' },
    { label: 'Hobbies', value: personalInfo.hobbies, icon: 'FiCoffee' },
  ],
  stats: [
    { label: 'Years Learning', value: 3, suffix: '+' },
    { label: 'Projects Built', value: 3, suffix: '+' },
    { label: 'Internships', value: 3, suffix: '' },
    { label: 'CGPA', value: 7.2, suffix: '/10' },
  ],
};

export const techStack = [
  { name: 'React', icon: 'SiReact' },
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'Java', icon: 'SiOpenjdk' },
  { name: 'Python', icon: 'SiPython' },
  { name: 'FastAPI', icon: 'SiFastapi' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'Git', icon: 'SiGit' },
  { name: 'HTML/CSS', icon: 'SiHtml5' },
];

export const skillCategories = [
  {
    category: 'Languages',
    icon: 'FiCode',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'FiLayout',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: 'FiServer',
    skills: [
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 82 },
    ],
  },
  {
    category: 'Database & Tools',
    icon: 'FiDatabase',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'Git / GitHub', level: 82 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Experience — from resume, most recent first
// ---------------------------------------------------------------------------
export const experience = [
  {
    company: 'Aroganam Technologies',
    role: 'Full Stack Developer Trainee',
    duration: 'Sep 2025 – Apr 2026',
    location: 'India',
    icon: 'FiCode',
    responsibilities: [
      'Developed responsive and interactive user interfaces using HTML, CSS, JavaScript and React.js on real-world web applications.',
      'Assisted in backend development, REST API integration and server-side application development.',
      'Worked with MongoDB for data management and CRUD operations.',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'MongoDB'],
  },
  {
    company: 'RV TechLearn',
    role: 'Project Intern — AI Powered Future',
    duration: 'Jun 2025 – Jul 2025',
    location: 'Remote',
    icon: 'FiCpu',
    responsibilities: [
      'Completed a project internship focused on AI-based project development and emerging technologies.',
      'Strengthened analytical thinking through guided project work.',
    ],
    technologies: ['AI/ML', 'Python'],
  },
  {
    company: 'Oasis Infobyte',
    role: 'Web Development & Designing Intern',
    duration: 'May 2026 – Jun 2026',
    location: 'Remote',
    icon: 'FiAward',
    responsibilities: [
      'Completed a 1-month AICTE OIB-SIP internship in Web Development & Designing.',
      'Gained hands-on experience building responsive web applications.',
      'Strengthened frontend development and problem-solving skills.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

// ---------------------------------------------------------------------------
// Projects — from resume
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: 'DermAI',
    tag: 'Full Stack · AI',
    subtitle: 'AI-Powered Skin Disease Detection Web App',
    description:
      'A full-stack web app that uses deep learning to classify skin diseases from dermoscopic images, returning predictions, confidence scores and downloadable medical reports.',
    technologies: ['React.js', 'FastAPI', 'Python', 'TensorFlow', 'MongoDB'],
    image: '/assets/projects/dermai-placeholder.jpg', // PLACEHOLDER — add a real screenshot
    github: '#',
    demo: '#',
  },
  {
    title: 'PizzaDelight',
    tag: 'Full Stack',
    subtitle: 'Pizza Delivery Web Application',
    description:
      'A full-stack pizza delivery app with customer and admin modules — auth, email verification, cart, live order tracking, and a Material UI admin dashboard.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/assets/projects/pizzadelight-placeholder.jpg', // PLACEHOLDER
    github: '#',
    demo: '#',
  },
  {
    title: 'Akshaya Thulir Startup Dashboard',
    tag: 'Full Stack',
    subtitle: 'Internal Management Platform for a Non-Profit',
    description:
      'An internal management platform for a Section 8 non-profit — team management, client tracking, milestone planning, legal compliance, fundraising and an opportunities portal.',
    technologies: ['React', 'FastAPI', 'MongoDB', 'Material UI'],
    image: '/assets/projects/akshaya-placeholder.jpg', // PLACEHOLDER
    github: '#',
    demo: '#',
  },
];

// ---------------------------------------------------------------------------
// Education — from resume
// ---------------------------------------------------------------------------
export const education = [
  {
    degree: 'B.Tech, Computer Science and Business Systems',
    institution: 'Akshaya College of Engineering and Technology',
    duration: '2023 – 2027',
    score: 'CGPA: 7.20 / 10',
  },
  {
    degree: 'HSC (Intermediate)',
    institution: 'AP Model School & Jr. College',
    duration: '2021 – 2023',
    score: '78%',
  },
  {
    degree: 'SSC (Class X)',
    institution: 'AP Model School & Jr. College',
    duration: '2020 – 2021',
    score: '98%',
  },
];

// ---------------------------------------------------------------------------
// Certifications — from resume
// ---------------------------------------------------------------------------
export const certifications = [
  { name: 'Oracle Certified Foundations Associate — Oracle Cloud Infrastructure 2025', issuer: 'Oracle University', date: 'Apr 2025' },
  { name: 'AICTE OIB-SIP Web Development & Designing Internship', issuer: 'Oasis Infobyte', date: '2026' },
  { name: 'AI Powered Future — Project Internship', issuer: 'RV TechLearn', date: '2025' },
];

// ---------------------------------------------------------------------------
// Achievements — from resume "Honors & Achievements"
// ---------------------------------------------------------------------------
export const achievements = [
  {
    title: 'SIH 2025 Finalist',
    description: 'National Finalist — Smart India Hackathon 2025. Developed an AI solution for a real-world problem.',
    icon: 'FiAward',
  },
  {
    title: 'Learnathon 2024 Participant',
    description: 'Organized by ICT Academy — completed multiple industry-oriented technical courses.',
    icon: 'FiTarget',
  },
  {
    title: 'Oracle Certified Associate (OCA)',
    description: 'Gained hands-on experience in Oracle SQL and PL/SQL.',
    icon: 'FiBookOpen',
  },
];

// ---------------------------------------------------------------------------
// Photography — PLACEHOLDER images; swap `src` for your real shots (4:5 works best)
// ---------------------------------------------------------------------------
export const photography = [
  { title: 'Mountain Sunrise', location: 'Kodaikanal', src: 'https://picsum.photos/seed/photo-mountain/500/650' },
  { title: 'Forest Waterfall', location: 'Coimbatore', src: 'https://picsum.photos/seed/photo-waterfall/500/650' },
  { title: 'Open Road', location: 'Western Ghats', src: 'https://picsum.photos/seed/photo-road/500/650' },
  { title: 'Palm Sunset', location: 'Rameswaram', src: 'https://picsum.photos/seed/photo-palm/500/650' },
  { title: 'Shoreline', location: 'Rameswaram', src: 'https://picsum.photos/seed/photo-shore/500/650' },
];

// ---------------------------------------------------------------------------
// Languages — PLACEHOLDER proficiency levels; adjust to match your actual fluency
// ---------------------------------------------------------------------------
export const languages = [
  { name: 'English', proficiency: 'Professional Working Proficiency', level: 85 },
  { name: 'Telugu', proficiency: 'Native / Bilingual', level: 100 },
  { name: 'Tamil', proficiency: 'Conversational', level: 60 },
];

export const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Photography', to: 'photography' },
  { label: 'Languages', to: 'languages' },
  { label: 'Contact', to: 'contact' },
];