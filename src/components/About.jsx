import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					option={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>

					<img src={icon} alt={title} className="w-[80px] h-[80px]" />
					<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				As a frontend engineer, I specialize in developing high-quality,
				intuitive user experiences using ReactJS, a popular JavaScript library
				for building user interfaces. With 3 years of experience in web
				development, I have worked on a variety of projects and gained expertise
				in developing and implementing user-friendly, responsive web applications.<br /><br />
				I am constantly learning and adapting to new technologies
				to provide the best user experience possible. Along with ReactJS, my
				skillset includes Nextjs, GraphQL, and Node.js that I use to create engaging and innovative web
				applications. <br /><br />My passion for technology and design drives me to
				collaborate with other professionals to develop cutting-edge solutions
				for complex challenges. I am currently seeking new opportunities in
				frontend development and would be thrilled to connect with individuals
				or organizations interested in leveraging my skills and experience If
				you'd like to connect and learn more about my experience, feel free to
				send me a message!
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
