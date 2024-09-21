"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ti_1 = require("react-icons/ti");
const Skills = () => {
    let Skills = [
        {
            name: "HTML",
            percentage: "95",
            divWidth: "w-[95%]",
        },
        {
            name: "CSS",
            percentage: "90",
            divWidth: "w-[90%]",
        },
        {
            name: "Tailwind CSS",
            percentage: "70",
            divWidth: "w-[70%]",
        },
        {
            name: "TypeScript",
            percentage: "80",
            divWidth: "w-[80%]",
        },
        {
            name: "Designing",
            percentage: "60",
            divWidth: "w-[60%]",
        },
    ];
    return (<div id="skills">
      <div className="relative bg-gradient-to-r from-black to-purple-900 text-white py-24">
        {/* Decorative Background Circles */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-black opacity-20 blur-xl rounded-full w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white drop-shadow-lg">
              My Skills
            </h1>
            <p className="lg:w-2/3 mx-auto mt-3 leading-relaxed text-purple-200">
              A versatile set of technical and creative abilities that drive my
              passion for innovation and excellence.
            </p>
          </div>

          <div className="flex flex-wrap px-6 -m-4">
            {Skills.map((skill, i) => (<div key={i} className="p-4 md:w-1/3 w-full">
                <div className="flex rounded-lg h-full text-white p-6 flex-col gap-2 bg-gradient-to-b from-purple-800 to-black shadow-xl transform hover:translate-y-[-10px] transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-white text-black flex-shrink-0 shadow-lg">
                        <ti_1.TiTick className="w-6 h-6"/>
                      </div>
                      <h2 className="uppercase text-lg title-font font-semibold text-white">
                        {skill.name}
                      </h2>
                    </span>
                    <span>
                      <p className="text-lg title-font font-bold text-right text-white">
                        {skill.percentage}%
                      </p>
                    </span>
                  </div>
                  <div className="bg-slate-700 h-4 w-full rounded-full overflow-hidden shadow-inner mt-3">
                    <div className={`bg-gradient-to-r from-white
                        /  to-white
                         h-full ${skill.divWidth} rounded-full shadow-lg`}></div>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </div>);
};
exports.default = Skills;
