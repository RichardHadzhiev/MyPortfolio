import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  console.log(projectTitle);

  return (
    <motion.div variants={projectVariant} className="relative h-full">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">TEXT</p>
      </div>
      <img
        className="w-full h-full "
        src={`src/assets/${projectTitle}.jpg `}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="p-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          My Projects are a mix of personal projects. I have worked on projects
          that range from simple static websites to full stack applications.
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <a
            href="https://richardhadzhiev.github.io/flappy-bird/"
            target="_blank"
          >
            <Project title="Flappy Bird" />
          </a>
          <a href="https://f1-news-project.netlify.app/" target="_blank">
            <Project title="F1 News" />
          </a>
          <a href="https://aboutshe.netlify.app/" target="_blank">
            <Project title="E-Commerce Website" />
          </a>
          <a href="https://egymproject.netlify.app/" target="_blank">
            <Project title="EvoGym" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
