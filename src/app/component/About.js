"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const aos_1 = __importDefault(require("aos"));
require("aos/dist/aos.css");
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
function About() {
    (0, react_1.useEffect)(() => {
        aos_1.default.init({ duration: 1000 });
    });
    return (<div id="home" className="bg-gradient-to-r from-black to-purple-900">
      <section className="text-yellow-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <image_1.default data-aos="fade-up" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 rounded-md mt-8 transition-all duration-300" alt="hero" src="/picture/anna.jpg" width={150} height={150} style={{
            boxShadow: "none", // No shadow initially
        }} 
    // Add hover effect
    onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(255, 255, 255, 0.2), 0 6px 6px rgba(128, 0, 128, 0.3)";
        }} onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none"; // Remove shadow when not hovering
        }}/>

          <div data-aos="fade-right" className="text-center lg:w-2/3 w-full">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white uppercase transition-all duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-400">
              Quratulain Shah
            </h1>
            <p className="mt-6 border-l-2 pl-6 text-gray-300 leading-relaxed">
              I am Quratulain, a passionate future AI web developer, an
              experienced trader, and a dedicated Montessori directress. My
              journey blends technology with early childhood education, aiming
              to innovate and inspire in both fields.
            </p>
            <div className="flex justify-center mt-6">
              <a href="cv.pdf" target="_blank">
                <button className="font-bold inline-flex text-white bg-purple-700 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-lg items-center gap-2 hover:scale-105 hover:shadow hover:shadow-white transition-all duration-300 font-serif">
                  Download CV
                  <fa_1.FaCloudDownloadAlt className="w-[24px] h-[24px] text-white"/>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>);
}
exports.default = About;
