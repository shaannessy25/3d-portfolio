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
	meta,
	starbucks,
	tesla,
	quantum,
	shopify,
	trilliant,
	vanta,
	carrent,
	jobit,
	tripguide,
	threejs,
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
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
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
		icon: starbucks,
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
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Youssef Sawaris",
		designation: "Server Engineer",
		company: "Strava",
		image:
			"https://media.licdn.com/dms/image/C5603AQErAEy2-YqPYg/profile-displayphoto-shrink_800_800/0/1622613600944?e=1687996800&v=beta&t=RVoN-5Jt6qBGVqttIhmUSc1adjTuKnYNLsdbPcIuenY",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Razi Raza",
		designation: "Principal Engineer",
		company: "Apple",
		image:
			"https://media.licdn.com/dms/image/D5603AQGEFGCM1kYtsA/profile-displayphoto-shrink_800_800/0/1682499392699?e=1687996800&v=beta&t=1ABV-2s8q1eAEDcakSP4JfIGpQCi7B3Ha0nqmutfNTw",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image:
			"https://media.licdn.com/dms/image/D5603AQHk8ySyOjG8Mw/profile-displayphoto-shrink_800_800/0/1680489584333?e=1687996800&v=beta&t=EM1TWQCgSyiIX9nMkbbXFiDr51e4lJvHvZxz2dpvFa4",
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
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
	},
];

export { services, technologies, experiences, testimonials, projects };
