import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.White;

  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-black text-white pt-24 md:h-screen"
          : "bg-gray-100 text-black pt-24 md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch">
          <div className="w-full md:w-1/2 md:pr-8">
            <h4 className="text-3xl font-semibold text-blue-500 mb-6">
              Connect with me
            </h4>
            <p className="text-xl mb-6">
              If you want to know more about me or my work, or if you would just
              like to say hello, send me a message. I'd love to hear from you.
            </p>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block mb-2 text-lg font-medium ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block mb-2 text-lg font-medium ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block mb-2 text-lg font-medium ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="mailto:vijaybharvad0097@gmail.com"
                  className="underline text-blue-500"
                >
                  Send me email directly
                </a>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-8">
            <div className="mb-12">
              <h4 className="text-3xl font-bold">Email</h4>
              <a
                href="mailto:Vbharvad@hawk.iit.edu"
                className="mt-4 font-semibold text-blue-700 block"
              >
                Vbharvad@hawk.iit.edu
              </a>
            </div>
            <div className="mb-12">
              <h4 className="text-3xl font-bold">Address</h4>
              <p className="mt-4 font-semibold text-blue-700">
                2951 S, King Drive Unit 1308 <br />
                Chicago, Illinois, USA
              </p>
              <div className="relative h-64 w-full">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225848119627!2d-122.41941508468177!3d37.774929779758095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a29f10115%3A0x614d97b0f49c5a7e!2s2951%20S%20King%20Dr%20Unit%201308%2C%20Chicago%2C%20IL%2060632%2C%20USA!5e0!3m2!1sen!2sin!4v1624881334141!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div>
              <h4 className="text-3xl font-bold">Social</h4>
              <ul className="flex mt-4">
                {contactLinks.map((el, index) => (
                  <li key={index} className="md:ml-6 mr-6 cursor-pointer">
                    <a href={el.link} className="hover:scale-125">
                      <img alt={el.name} src={el.url} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer
        className={`w-full py-3 mt-20 flex justify-center ${
          darkMode ? "bg-white text-black" : "bg-gray-900 text-white"
        }`}
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Vijay Bharvad
      </footer>
    </div>
  );
};

export default Contact;
