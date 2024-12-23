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
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Full Stack Developer',
    icon: frontend,
  },
  {
    title: 'Entreprenuer',
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
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
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
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Owner or CEO',
    company_name: 'W World Company Limited',
    icon: wlogo,
    iconBg: '#383E56',
    date: 'March 2019 - April 2021',
    points: [
      'Developing and executing the overall business strategy for the poultry farm and transportation business. ',
      'Overseeing the management, maintenance, and scheduling of the truck fleet to ensure the safe and timely transportation of goods while minimizing downtime and maximizing operational efficiency.',
      'Overseeing the procurement of feed, equipment, vaccines, and other necessary resources for the farms operations.',
      'Monitoring industry trends, consumer preferences, and market demands to adapt the company offerings accordingly. This includes identifying potential opportunities for growth.',
      'Overseeing day-to-day operations of the farm, including production, breeding, feed management, health monitoring, and biosecurity measures to ensure the well-being of the poultry.',
    ],
  },
  {
    title: 'Desk Adjuster',
    company_name: 'Katy Rose Group',
    icon: KRG,
    iconBg: '#E6DEDD',
    date: 'May 2022 - Jan 2023',
    points: [
      'Evaluated and processed property damage insurance claims using Xactimate software, accurately estimating costs for repairs and replacements. ',
      'Utilized Xactimate to create detailed digital sketches and floor plans, capturing the scope of work and dimensions of damaged areas.',
      'Entered line items for various repair tasks in Xactimate, considering material quantities and labor costs to generate comprehensive estimates. ',
      'Demonstrated proficiency in navigating the Xactimate database, selecting appropriate materials, and incorporating current market rates into estimates. ',
      'Collaborated 	with 	insurance 	adjusters, 	contractors, 	and policyholders to ensure accurate and fair assessments of house damage. ',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Brainnest Consulting',
    icon: brainnest,
    iconBg: '#383E56',
    date: 'Sept 2022 - Jan 2023',
    points: [
      'Collaborated with a team of developers to create and maintain user-friendly and responsive web applications.  ',
      'Implemented frontend code using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and responsiveness.  ',
      'Participated in code reviews, providing, and receiving constructive feedback to enhance coding skills and adherence to best practices. ',
      'Actively learned and implement the latest frontend development trends, technologies, and best practices.  ',
      'Utilized version control systems (e.g., Git) to manage code repositories and collaborate effectively with team members. ',
      'Assisted in troubleshooting and resolving frontend-related issues encountered during development or in production.  ',
    ],
  },
  {
    title: 'Software Engineering Virtual Experience',
    company_name: 'J.P. Morgan',
    icon: jpmorgan,
    iconBg: '#E6DEDD',
    date: 'Oct 2023 - Nov 2023',
    points: [
      'Used JP Morgan Chase’s open-source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor. ',
      'Set up a local dev environment by downloading the necessary files, tools and dependencies.',
      'Fixed broken files in the repository to make web application output correctly. ',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Olawale proved me wrong.',
    name: 'Marsaun Cook',
    designation: 'CEO',
    company: 'Cooks Corner',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQG767vyQ7yW6Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706229493138?e=1739404800&v=beta&t=4bhXWHFuADG1bDF7rQn3JmLw8LPxgpR5tk7VQxK0Y5I',
  },
  {
    testimonial:
      "After Olawale optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'AI Body Measurement Generator',
    description:
      'An AI-powered platform that uses computer vision to generate accurate body measurements from images. The system helps fashion designers, retailers, and e-commerce platforms by providing reliable and automated body measurements for custom clothing.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'tensorflow',
        color: 'yellow-text-gradient',
      },
    ],
    image: '/path/to/ai-body-measurement.jpg',
    source_code_link: 'https://github.com/your-username/ai-body-measurement-generator',
  },
  {
    name: 'Metaverse',
    description:
      'Web article that talks about importance of metaverse and it usefullness. It shows the imaginary of how the metaverse operate aswell .',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: metaverse,
    source_code_link: 'https://github.com/walex4242/metaverse',
  },
  {
    name: 'Dalle-Project',
    description:
      'A web application that allow users to generate image through the help of Ai and also share with the community.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'vite',
        color: 'yellow-text-gradient',
      },
    ],
    image: dalle,
    source_code_link: 'https://github.com/walex4242/Dall-Eproject',
  },
];


export { services, technologies, experiences, testimonials, projects };
