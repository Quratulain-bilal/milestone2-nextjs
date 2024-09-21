"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const About_1 = __importDefault(require("./component/About"));
const Contact_1 = __importDefault(require("./component/Contact"));
const Hero_1 = __importDefault(require("./component/Hero"));
const Projects_1 = __importDefault(require("./component/Projects"));
const Skills_1 = __importDefault(require("./component/Skills"));
function Home() {
    return (<div className="bg-black">
      <About_1.default />
      <div className="h-[2px] w-[80%] bg-gray-500 rounded-lg mx-auto"></div>
      <Hero_1.default />
      <div className="h-[2px] w-[80%] bg-gray-500 rounded-lg mx-auto"></div>
      <Projects_1.default />
      <div className="h-[2px] w-[80%] bg-gray-500 rounded-lg mx-auto"></div>
      <Skills_1.default />
      <div className="h-[2px] w-[80%] bg-gray-500 rounded-lg mx-auto"></div>
      <Contact_1.default />
    </div>);
}
exports.default = Home;
