// Customize all of your content here.
// This makes it easy to keep components purely presentational.

export const hero = {
  name: 'Hadeem Secka',
  tagline: 'Computer Information Science Student • Data Specialist • Software Developer',
  subtitle: 'Building high-impact digital experiences with clean code and bold ideas.',
  description:
    'Computer Information Science student at University of South Carolina with hands-on experience in data management, technical support, and software development. Currently working as a Data Control Specialist while pursuing my degree in Business Analytics.',
  primaryCta: 'View Projects',
  secondaryCta: 'Get In Touch'
}

export const about = {
  title: 'About Me',
  highlight:
    'Computer Information Science student passionate about data management, software development, and cybersecurity.',
  paragraphs: [
    "I'm Hadeem Secka, a Computer Information Science student at the University of South Carolina, pursuing a Bachelor's degree with a minor in Business Analytics. I'm currently working as a Data Control Specialist at the Richland County Sheriff's Department, where I manage data migration projects, provide technical support, and develop comprehensive documentation.",
    "With hands-on experience in Java, Python, React, and data management, I enjoy building practical solutions that solve real-world problems. I'm also actively involved in campus organizations, serving as Vice President of Minorities in Computing and as a member of the National Society of Black Engineers."
  ]
}

export const skillCategories = [
  {
    label: 'Programming Languages',
    skills: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
  },
  {
    label: 'Software & Tools',
    skills: ['Microsoft Excel', 'Microsoft Word', 'Microsoft Access', 'Microsoft PowerPoint', 'Git', 'GitHub']
  },
  {
    label: 'Operating Systems',
    skills: ['Windows 11', 'UNIX/Linux']
  },
  {
    label: 'Technical Skills',
    skills: ['Data Monitoring', 'Data Reporting', 'Data Migration', 'Hardware Installation', 'Technical Support', 'Strong Communication']
  }
]

// Projects from your GitHub profile - pinned repositories
export const projects = [
  {
    title: 'Game Day',
    description:
      'A React-based web application for tracking and managing game day events, scores, and highlights. Built with Create React App featuring a modern, responsive user interface.',
    techStack: ['React', 'JavaScript', 'CSS', 'HTML'],
    codeUrl: 'https://github.com/HadeemS/game-day',
    liveUrl: null
  },
  {
    title: 'Game Day API',
    description:
      'RESTful API backend for the Game Day application, handling data management and server-side logic for game events and scores.',
    techStack: ['API', 'Backend', 'HTML'],
    codeUrl: 'https://github.com/HadeemS/game-day-api',
    liveUrl: null
  },
  {
    title: 'Gameday Server',
    description:
      'Server-side application for the Game Day platform, managing data persistence, business logic, and API endpoints.',
    techStack: ['Node.js', 'Server', 'Backend'],
    codeUrl: 'https://github.com/HadeemS/Gameday-Server',
    liveUrl: null
  },
  {
    title: 'Official Portfolio',
    description:
      'Official portfolio website built with Vite and React, showcasing projects, skills, and professional experience with a modern, polished design.',
    techStack: ['React', 'Vite', 'JavaScript', 'CSS'],
    codeUrl: 'https://github.com/HadeemS/Hadeem-Secka-Official.github.io',
    liveUrl: null
  },
  {
    title: 'Resume Portfolio Website',
    description:
      'A high-energy, dark-mode portfolio website built with React and Vite that showcases my projects, experience, and personality with smooth animations and responsive design.',
    techStack: ['React', 'Vite', 'CSS', 'JavaScript'],
    codeUrl: 'https://github.com/HadeemS/Hadeem-Secka-Resume-Website',
    liveUrl: null
  },
  {
    title: 'Personal Website',
    description:
      'Personal website and portfolio built with HTML, CSS, and JavaScript, showcasing my work, professional information, and projects with a clean, accessible design.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    codeUrl: 'https://github.com/HadeemS/Hadeem-Secka.github.io',
    liveUrl: 'https://hadeems.github.io/Hadeem-Secka.github.io/'
  },
  {
    title: 'GameDay - React Site',
    description:
      'Full React application built with Vite for the GameDay platform. Features responsive design, modern UI components, and seamless user experience for tracking game events.',
    techStack: ['React', 'Vite', 'JavaScript', 'CSS'],
    codeUrl: 'https://github.com/HadeemS/game-day',
    liveUrl: null
  },
  {
    title: 'GameDay - HTML/CSS Build',
    description:
      'Complete HTML/CSS implementation of all GameDay wireframe pages with responsive layouts, semantic HTML5 elements, and polished styling. Foundation for the React version.',
    techStack: ['HTML', 'CSS', 'Responsive Design'],
    codeUrl: 'https://github.com/HadeemS/Hadeem-Secka.github.io',
    liveUrl: 'https://hadeems.github.io/Hadeem-Secka.github.io/'
  },
  {
    title: 'GameDay - JSON-Powered Teams',
    description:
      'Dynamic teams list generated from a JSON file hosted on GitHub Pages, demonstrating data-driven content generation and JSON integration.',
    techStack: ['JavaScript', 'JSON', 'HTML', 'CSS'],
    codeUrl: 'https://github.com/HadeemS/Hadeem-Secka.github.io',
    liveUrl: 'https://hadeems.github.io/Hadeem-Secka.github.io/'
  },
  {
    title: 'GameDay - Contact Form & Map',
    description:
      'Asynchronous email form with live success/error feedback and responsive embedded map integration. No page redirect, seamless user experience.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    codeUrl: 'https://github.com/HadeemS/Hadeem-Secka.github.io',
    liveUrl: 'https://hadeems.github.io/Hadeem-Secka.github.io/'
  },
  {
    title: 'API Integration Project',
    description:
      'React form with POST requests, client-side validation, and automatic list updates. Features server-side Joi validation for robust data handling and error management.',
    techStack: ['React', 'Node.js', 'Express', 'Joi Validation', 'API'],
    codeUrl: 'https://github.com/HadeemS/Hadeem-Secka.github.io',
    liveUrl: 'https://hadeems.github.io/Hadeem-Secka.github.io/'
  },
  {
    title: 'Hello World - Node + Express',
    description:
      'Simple Express server deployed on Render demonstrating server setup, environment variables, and deployment practices using process.env.PORT.',
    techStack: ['Node.js', 'Express', 'Render'],
    codeUrl: 'https://github.com/HadeemS/Hadeem-Secka.github.io',
    liveUrl: null
  }
]

export const experience = [
  {
    role: 'Data Control Specialist',
    company: 'Richland County Sheriff\'s Department',
    location: 'Columbia, SC',
    date: '11/2024 – Current',
    bullets: [
      'Provided technical support, resolving IT issues to maximize productivity for team members.',
      'Developed comprehensive documentation for data control procedures, facilitating cross-training among team members.',
      'Managed large-scale data migration projects, ensuring seamless transitions with minimal downtime.'
    ]
  },
  {
    role: 'Front Desk Agent',
    company: 'Hertz',
    location: 'Columbia, SC',
    date: '05/2025 – Current',
    bullets: [
      'Managed reservation system, updating bookings and accommodating guest requests.',
      'Handled guest inquiries, resolving issues to enhance satisfaction and loyalty.'
    ]
  }
]

// Contact information
export const socialLinks = {
  email: 'hadeemsecka@gmail.com',
  phone: '839-201-3566',
  address: 'Columbia, SC 29229',
  website: 'https://hadeems.github.io/Hadeem-Secka.github.io/',
  github: 'https://github.com/HadeemS',
  linkedin: 'https://www.linkedin.com/in/hadeem-secka-a7137129b/'
}

// Education
export const education = {
  degree: 'Bachelor of Science, Computer Information Science',
  minor: 'Business Analytics',
  university: 'University of South Carolina',
  location: 'Columbia, SC',
  expectedGraduation: '12/2026',
  gpa: '3.1/4.0',
  honors: ['Life Scholarship', 'Hope Scholarship']
}

// Coursework
export const coursework = [
  'Software Engineering - 247',
  'Advanced Programming - 240',
  'Statistical Methods - 515',
  'Web Applications - 242',
  'UNIX/Linux Fundamentals - 215',
  'Computer Hardware Foundations - 210'
]

// Certifications
export const certifications = [
  {
    name: 'Criminal Justice Information Services Security and Privacy Training (CJIS)',
    issuer: 'CJIS'
  },
  {
    name: 'Digital Studies',
    issuer: 'University of South Carolina'
  },
  {
    name: 'Tools of the Trade: Linux and SQL',
    issuer: 'Google Cybersecurity Certificate'
  },
  {
    name: 'Connect and Protect: Networks and Network Security',
    issuer: 'Google Cybersecurity Certificate'
  },
  {
    name: 'Play it Safe: Manage Security Risks',
    issuer: 'Google Cybersecurity Certificate'
  },
  {
    name: 'Foundations of Cybersecurity',
    issuer: 'Google Cybersecurity Certificate'
  }
]

// Campus Involvement
export const campusInvolvement = [
  {
    organization: 'Minorities in Computing',
    role: 'Vice President'
  },
  {
    organization: 'National Society of Black Engineers',
    role: 'Member'
  }
]

