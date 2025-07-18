import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  brainnest,
  wlogo,
  jpmorgan,
  KRG,
  threejs,
  frontend,
  dashboard,
  threejs1,
  godheranca,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'services',
    title: 'Services',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Software Developer',
    icon: mobile,
  },
  {
    title: 'Machine Learning Specialist',
    icon: frontend,
  },
  {
    title: 'Graphics Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Python',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next.js',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: threejs,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Express.js',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Lead Software Engineer',
    company_name: 'JACKISA.COM',
    icon: wlogo,
    iconBg: '#383E56',
    date: 'May 2024 - Present',
    points: [
      'Engineered and deployed full-stack applications for logistics and transport sectors.',
      'Oversaw scalable architecture for web/mobile platforms.',
      'Led development teams in delivering high-performance solutions.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'OZ WEARS',
    icon: KRG,
    iconBg: '#E6DEDD',
    date: 'Oct 2017 - Present',
    points: [
      'Launched accounting and inventory tools, improving efficiency by 97%.',
      'Modernized the company\'s web and database infrastructure.',
      'Led technology adoption and mentored junior team members.',
      'Delivered scalable solutions for business operations.',
    ],
  },
  {
    title: 'Technical Official',
    company_name: 'Ibedmore Resources',
    icon: brainnest,
    iconBg: '#383E56',
    date: 'June 2014 - May 2016',
    points: [
      'Managed IT operations and built software tools as the sole IT staff.',
      'Implemented technical solutions to improve operational efficiency.',
      'Provided technical support and system maintenance.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Royalline Tech',
    icon: jpmorgan,
    iconBg: '#E6DEDD',
    date: 'Oct 2010 - Dec 2014',
    points: [
      'Delivered scalable internal platforms and handled technical troubleshooting.',
      'Developed software solutions for various business requirements.',
      'Collaborated with teams to implement technical best practices.',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but David proved me wrong.',
    name: 'Marsaun Cook',
    designation: 'CEO',
    company: 'Cooks Corner',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQG767vyQ7yW6Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706229493138?e=1739404800&v=beta&t=4bhXWHFuADG1bDF7rQn3JmLw8LPxgpR5tk7VQxK0Y5I',
  },
  {
    testimonial: "After David optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'OZ WEARS Inventory System',
    description:
      'Built comprehensive accounting and inventory management system that improved operational efficiency by 97%. Features real-time tracking and automated reporting.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'inventory',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    source_code_link: 'https://github.com/davitacols/oz-wears-inventory',
  },
  {
    name: 'JACKISA Logistics Platform',
    description:
      'Engineered full-stack web application for logistics and transport management. Handles route optimization, fleet tracking, and customer management.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'yellow-text-gradient',
      },
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop',
    source_code_link: 'https://github.com/davitacols/jackisa-logistics',
  },
  {
    name: 'Assurance Furniture Website',
    description:
      'Created responsive furniture showcase website with CMS integration. Trained staff on content management and SEO best practices.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'cms',
        color: 'pink-text-gradient',
      },
    ],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
    source_code_link: 'https://github.com/davitacols/assurance-furniture',
  },
  {
    name: 'Royalline Tech Internal Platform',
    description:
      'Developed scalable internal platform for project management and team collaboration. Implemented automated workflows and reporting systems.',
    tags: [
      {
        name: 'php',
        color: 'purple-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'workflow',
        color: 'blue-text-gradient',
      },
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    source_code_link: 'https://github.com/davitacols/royalline-platform',
  },
  {
    name: 'Ibedmore IT Management System',
    description:
      'Built comprehensive IT operations management system as sole IT staff. Automated system maintenance, user management, and technical support workflows.',
    tags: [
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'automation',
        color: 'blue-text-gradient',
      },
      {
        name: 'system-admin',
        color: 'red-text-gradient',
      },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    source_code_link: 'https://github.com/davitacols/ibedmore-it-system',
  },
  {
    name: 'YouTube Coding Tutorials',
    description:
      'Created educational content series teaching HTML, CSS, and JavaScript fundamentals. Mentored aspiring developers through live coding sessions.',
    tags: [
      {
        name: 'education',
        color: 'blue-text-gradient',
      },
      {
        name: 'mentoring',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    source_code_link: 'https://youtube.com/@davidansa-coding',
  },
];

const education = [
  {
    degree: 'BSc in Computer Science',
    school: 'University of the People, USA',
    date: '2021 - 2025 (In Progress)',
    description: 'Pursuing Bachelor of Science in Computer Science with focus on software engineering and data structures.',
  },
];

const achievements = [
  '99% Performance Gain: Refactored architecture and code for speed',
  '89% UX Boost: Released features that increased engagement and retention',
  '67% Fewer Bugs: Maintained high-quality code and quick patches',
  'Open Source Authority: Contributed to large-scale repos across teams',
  '87% Client Satisfaction: Delivered timely, high-value digital solutions',
  'Mentorship Impact: Coached junior developers into team leads',
];

const volunteer = [
  {
    role: 'Web Developer',
    organization: 'Assurance Furniture',
    date: '2019 - Present',
    description: 'Created responsive website and trained staff on CMS best practices.',
  },
  {
    role: 'Coding Mentor',
    organization: 'YouTube',
    date: 'Ongoing',
    description: 'Mentored aspiring devs in HTML/CSS/JS through live streams and workshops.',
  },
  {
    role: 'Open Source Contributor',
    organization: 'GitHub',
    date: 'Ongoing',
    description: 'Pushed 230+ PRs, led discussions, fixed bugs, and co-authored feature branches.',
  },
];

const personalInfo = {
  name: 'David Ansa',
  title: 'Web Developer | Software Developer | Machine Learning Specialist | Graphics Designer',
  location: 'Safe Court Apartments, Ojulari Street, Lekki Peninsula II, Lagos',
  phone: '+(234) 8108209953',
  email: 'davitacols@gmail.com',
  languages: ['English', 'Efik'],
  objective: 'Creative and performance-driven Web and Software Developer with 8+ years of hands-on experience delivering scalable solutions, clean UI/UX, and robust backend systems. Known for solving complex challenges, mentoring dev teams, and launching high-impact applications.',
};

export { services, technologies, experiences, testimonials, projects, education, achievements, volunteer, personalInfo };