import {
  mobile,
  backend,
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
  docker,
  quantum,
  trilliant,
  vanta,
  tripguide,
  threejs,
  djtech,
  projectTracker,
  myMusic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Javascript Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Nextjs Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "DjTech",
    icon: djtech,
    iconBg: "#383E56",
    date: "March 2020 - April 2020",
    points: [
      "Designed and developed frotend platfrom utilizing Javascript, Ajax, and custom CSS3 classes for clients to view and admiinister music playlists and song requests",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create a high-quality product",
      "Integrated Spotipy API making use of traditional REST methodology in order to display, play, and delete songs from playlists",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Trilliant",
    icon: trilliant,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Dec 2020",
    points: [
      "Redesigned and developed a responsive multi-page website using Reactjs, improving scalability by 50% and user retention by 50%, while increasing page load speed by 90% and site traffic by 28%",
      "Created 4 reusable components to efficiently retrieve, search, and filter JSON data, enhancing the display of product list in a visually appealing and user-friendly manner",
    ],
  },
  {
    title: "Quantum Society",
    company_name: "Frontend Engineer",
    icon: quantum,
    iconBg: "#ffffff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Built a secure and scalable NFT marketplace using Nextjs, Solidity, and Firebase, facilitating over 1,000 smooth NFT transactions on the platform",
      "Deployed a frontend platform with React components and Material-UI, increasing user engagement by 35% through improved user experience",
      "Crafte the Quantum Society brand identity, designing visual assets and collaborating with the design team to create a seamless, professional branding with intuitive user experience reflecting the brand's values",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Vanta Leagues",
    icon: vanta,
    iconBg: "#383E56",
    date: "Apr 2022 - July 2022",
    points: [
      "Implemented a modern frontend platform utilizing Next.js, Typescript, Tailwind CSS, and GraphQL resulting in a 60% improvement in page load speed and 45% increase in data retrieval efficiency",
      "Integrated close to 10 open-source libraries, including Cloudinary, Auth0, SheerID, Cognito, Twilio, and GetStream, resulting in a 40% increase in user participation and a 30% improvement in overall functionality and usability",
      "Collaborated closely with 2 backend engineers to optimize the exchange of information between the frontend and backend, achieving a 30% reduction in query response time and a 20% increase in data accuracy by refining arguments for queries and mutation and ensuring proper data display on the client side",
      "Designed a comprehensive landing page using Figma for the conceptualization, wireframing, and illustration of the Vanta League brand identity, including the creation of 4 unique wireframes for 5 pages",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shaan proved me wrong.",
    name: "Youssef Sawaris",
    designation: "Server Engineer",
    company: "Strava",
    image:
      "https://media.licdn.com/dms/image/C5603AQErAEy2-YqPYg/profile-displayphoto-shrink_800_800/0/1622613600944?e=1687996800&v=beta&t=RVoN-5Jt6qBGVqttIhmUSc1adjTuKnYNLsdbPcIuenY",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shaan does.",
    name: "Razi Raza",
    designation: "Staff Engineer",
    company: "Apple",
    image:
      "https://media.licdn.com/dms/image/D5603AQGEFGCM1kYtsA/profile-displayphoto-shrink_800_800/0/1682499392699?e=1687996800&v=beta&t=1ABV-2s8q1eAEDcakSP4JfIGpQCi7B3Ha0nqmutfNTw",
  },
  {
    testimonial:
      "After Shaan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Hasan Alsabonchi",
    designation: "Fullstack Engineer",
    company: "Vanta Leagues",
    image:
      "https://media.licdn.com/dms/image/D5603AQHk8ySyOjG8Mw/profile-displayphoto-shrink_800_800/0/1680489584333?e=1687996800&v=beta&t=EM1TWQCgSyiIX9nMkbbXFiDr51e4lJvHvZxz2dpvFa4",
  },
];

const projects = [
  {
    name: "Project Tracker",
    description:
      "The Project Tracker is a web application designed to streamline project and task management. It provides essential features for creating, updating, and deleting projects and tasks, along with user authentication.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: projectTracker,
    source_code_link: "https://github.com/shaannessy25/project-tracker",
    live_code_link: "https://project-tracker-one.vercel.app/signin",
  },
  {
    name: "My Music",
    description:
      "A professional-grade Spotify clone that provides users with a seamless and immersive music streaming experience. With a user-friendly interface and robust features, My Music is the perfect platform for music lovers to discover new music and artists.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "chackra-ui",
        color: "pink-text-gradient",
      },
    ],
    image: myMusic,
    source_code_link: "https://github.com/shaannessy25/my_music",
    live_code_link: "https://my-music-gold.vercel.app/signin",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    live_code_link: "https://project-tracker-one.vercel.app/signin",
  },
];

export { services, technologies, experiences, testimonials, projects };
