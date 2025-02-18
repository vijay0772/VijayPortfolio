import React, { useContext } from "react";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import resume from "../assets/Vijay_resume.pdf";
import Snowfall from "./Snowfall"; // Import the custom Snowfall component
import backgroundVideoLight from "../assets/light-mode-video.mp4"; // Your light mode video
import backgroundVideoDark from "../assets/light-mode-video.mp4"; // Your dark mode video

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src={darkMode ? backgroundVideoDark : backgroundVideoLight}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

        {/* Snowfall Effect */}
        <Snowfall />

        {/* Main Content */}
        <main className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen px-6 lg:px-12">
          <div className="sm:text-center lg:text-left text-white">
            {/* Animated Heading */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I am{" "}
              <span className="text-blue-500 drop-shadow-lg">Vijay Bharvad</span>
            </motion.h1>

            {/* Animated Subheading with Typing Effect */}
            <motion.div
              className="text-3xl sm:text-4xl mt-3 font-bold drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <Typical
                steps={[
                  "Software Engineer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Tech Enthusiast",
                  1000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="mt-5 text-lg sm:text-xl text-gray-200 max-w-2xl drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              I am a passionate Software Engineer and Full-Stack Developer.
              Currently pursuing my Master's in Computer Science at{" "}
              <span className="text-blue-400 font-semibold">
                Illinois Institute of Technology
              </span>
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex space-x-5 mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer transform hover:scale-125 transition duration-300"
                >
                  <img alt={el.name} src={el.url} className="w-8 h-8" />
                </a>
              ))}
            </motion.div>

            {/* Resume Button */}
            <motion.div
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <a
                href={resume}
                className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md shadow-lg transition-all duration-300 hover:bg-blue-400 hover:scale-105 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
