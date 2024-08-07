import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "QuickServe (Food Delivery App)",
    description: "Developed the Quick-Serve Food Delivery app, integrating features for customers to register, browse menus, place orders, track deliveries, and provide feedback while enabling restaurants to manage menus, process orders, and update statuses. The app also provides tools for delivery personnel to handle tasks and update statuses, with system administrators overseeing operations and customer support resolving issues and collecting feedback.",
    imageUrl: "https://i.ibb.co/XY64DDH/Quickservee.png",
    readMoreLink: "#",
    liveDemoLink: "https://404v.netlify.app/"
  },
  {
    id: 2,
    title: "School Blogging Platform",
    description: "Developed an advanced blogging platform designed for academic communities, incorporating dynamic navigation and role-based access to enhance engagement among students, faculty, and staff, with features for creating, responding to, and moderating posts, along with administrative account management. Leveraged APIs such as OpenAI, SerpApi, and OpenWeatherMap for a smart chatbot, automated post responses, and live weather insights, while employing Elasticsearch and MongoDB for efficient content handling and secure access, and offering a subscription feature for personalized content alerts.",
    imageUrl: "https://cdn.elearningindustry.com/wp-content/uploads/2013/09/how-to-use-blogs-in-the-classroom.jpg",
    readMoreLink: "#",
    liveDemoLink: "https://404v.netlify.app/"
  },
  {
    id: 3,
    title: "Sarjani Industries (E-Commerce Website)",
    description: "I developed the front-end of Sarjani Industries' e-commerce website using HTML, CSS, and JavaScript. The site offers a variety of transformer-related products and services. Key offerings include precision cutting, professional slitting, and comprehensive handling and processing of materials to ensure high-quality transformer components.    ",
    imageUrl: "https://i.ibb.co/C0hNGDc/sar2.png",
    readMoreLink: "https://github.com/vijay0772/SarjaniIndustries",
    liveDemoLink: "https://sarjaniindustries.netlify.app/"
  },
  {
    id: 4,
    title: "Marwiz (E-Commerce Website)",
    description: "I developed the e-commerce website for Marwiz, a digital advertising company. This site streamlines their services, allowing clients to easily access and purchase a wide range of digital advertising solutions, enhancing their online marketing efforts efficiently and effectively.    ",
    imageUrl: "https://i.ibb.co/c18PC3b/ma2.png",
    readMoreLink: "https://github.com/vijay0772/Marwiz",
    liveDemoLink: "https://marwiz.netlify.app/"
  },
  {
    id: 5,
    title: "DigiMap (E-Commerce Website)",
    description: "I developed the e-commerce website for DigiMap, a digital marketing company. This site offers a variety of marketing services, enabling clients to efficiently access and utilize comprehensive digital marketing solutions to enhance their online presence and achieve their business goals.    ",
    imageUrl: "https://i.ibb.co/yfLTtsy/Digimappp.png",
    readMoreLink: "https://github.com/vijay0772/Digimap",
    liveDemoLink: "https://digimapp.netlify.app/whal.droitlab.com/html/index.html"
  },
  {
    id: 6,
    title: "SmartHomes",
    description: "Steered development of a Smart Homes E-commerce Website incorporating a diverse product range and a robust review system. Crafted a User Role Management system and Analytics Dashboard to empower retailers, enabling data-driven decisions and enhancing overall efficiency and user experience for customers, salespeople, and retailers.",
    imageUrl: "https://i.ibb.co/rbQKMwp/smartt.png",
    readMoreLink: "https://github.com/vijay0772/SmartHomes",
    liveDemoLink: "https://404v.netlify.app/"
  },
  {
    id: 7,
    title: "CraftsMan (Homehub)",
    description: "Created Home Hub website for tool purchase, home maintenance scheduling, and reviews, featuring a location-based service finder. Established a three-tier user system (customer, employee, retailer) with retailer privileges, including customer and employee management, and a comprehensive inventory reporting system for streamlined operations.",
    imageUrl: "https://i.ibb.co/yyf4TFH/Homehub.png",
    readMoreLink: "https://github.com/vijay0772/Craftsman",
    liveDemoLink: "https://404v.netlify.app/"
  },
  {
    id: 8,
    title: "Quickquizz (Next.js project)",
    description: "I developed Quickquizz, a quiz website built with Next.js. This platform allows users to take quiz tests by selecting from a variety of categories. The quiz questions are dynamically fetched using a REST API, providing a seamless and engaging user experience for quiz enthusiasts.    .",
    imageUrl: "https://i.ibb.co/FqxBsBD/logo-1.webp",
    readMoreLink: "#",
    liveDemoLink: "https://quickquiz-for-you.netlify.app/"
  },
  {
    id: 9,
    title: "Orbit-Guardinas",
    description: "Developed an intuitive crisis management platform using React.js and Supabase, inspired by the solar system. The app features real-time data integration for maps, news, and resources, ensuring up-to-date information during crises. Overcame challenges with Supabase limitations and complex map integration, creating a user-friendly and visually engaging platform. Enhanced skills in API integration, backend tools, and collaboration.",
    imageUrl: "https://i.ibb.co/Mf3gDQz/orbit.png",
    readMoreLink: "https://github.com/jaygohel109/Orbit_Guardians",
    liveDemoLink: "https://orbit-guardians.netlify.app/"
  },
  {
    id: 10,
    title: "PAST-PORT(MobileApp)",
    description: "PastPort is an AI-powered chatbot app that revolutionizes history education by enabling users to converse with historical figures and explore significant events. Built with Flutter and the OpenAI API, it offers an interactive and personalized learning experience. Users can track their progress with a notebook feature and enjoy a seamless interface",
    imageUrl: "https://i.ibb.co/h8gXFWK/pastportt.png",
    readMoreLink: "https://github.com/jaygohel109/TaskFormer",
    liveDemoLink: "https://www.youtube.com/watch?v=cB5GCnFQf-o"
  },
  
];

const Card = ({ title, description, imageUrl, readMoreLink, liveDemoLink }) => (
  <motion.div
    initial={"hidden"}
    whileInView={"visible"}
    variants={{
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    }}
    className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
  >
    <a href={readMoreLink}>
      <img
        className="rounded-t-lg"
        src={imageUrl}
        alt={title}
        style={{ width: "690px", height: "300px" }} // Set the width and height here
      />
    </a>
    <div className="p-3">
      <a href={readMoreLink}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div className="flex space-x-4">
        <a
          href={readMoreLink}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href={liveDemoLink}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300"
        >
          Live Demo
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <div className="container mx-auto py-12">
    <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          readMoreLink={project.readMoreLink}
          liveDemoLink={project.liveDemoLink}
        />
      ))}
    </div>
  </div>
);

export default ProjectsSection;
