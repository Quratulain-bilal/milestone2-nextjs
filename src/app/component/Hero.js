"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const typewriter_effect_1 = __importDefault(require("typewriter-effect"));
const link_1 = __importDefault(require("next/link"));
const io5_1 = require("react-icons/io5");
const Hero = () => {
    return (<>
      <div id="about">
        <section className="text-yellow-500 body-font bg-gradient-to-r from-black via-purple-800 to-black bg-cover bg-center bg-no-repeat">
          <div className="container mx-auto flex px-12 py-24 md:flex-row flex-col items-center justify-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 text-white font-bold">
                I AM
                <br className="hidden lg:inline-block"/>
                <typewriter_effect_1.default options={{
            strings: [
                "Web developer",
                "Trader",
                "Montessori Directress",
            ],
            autoStart: true,
            loop: true,
        }}/>
              </h1>
              <p className="mb-8 leading-relaxed text-gray-300 font-normal">
                As a Montessori Directress, I have dedicated my career to
                fostering creativity and independent thinking in young learners.
                My journey extends beyond the classroom as a successful trader,
                where I apply strategic insights to navigate the financial
                markets. Now, I am poised to merge these experiences with my
                passion for technology, aspiring to become a future AI-driven
                web developer. This unique blend of education, finance, and tech
                empowers me to innovate and create solutions that make a lasting
                impact. Explore my portfolio to see how I bring these worlds
                together.
              </p>
              <div className="flex justify-center">
                <link_1.default href={"https://github.com/Quratulain-bilal"}>
                  <button className="font-bold mt-6 inline-flex text-white bg-purple-600 py-2 px-4 focus:outline-none hover:bg-purple-500 rounded text-lg items-center gap-2 hover:scale-105 hover:shadow hover:shadow-purple-800 transition-all duration-300">
                    Github
                    <io5_1.IoLogoGithub />
                  </button>
                </link_1.default>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex items-center justify-center md:justify-end">
              <img className="w-[350px] h-[350px] outline outline-purple-700 hover:shadow-xl transition-all duration-300 hover:shadow-purple-900 rounded-full" alt="image" src="/picture/anna.jpg"/>
            </div>
          </div>
        </section>
      </div>
    </>);
};
exports.default = Hero;
