"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa6_1 = require("react-icons/fa6");
const fa_1 = require("react-icons/fa");
const Footer = () => {
    return (<div>
      <footer className="text-white body-font bg-gradient-to-r from-black to-purple-900">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-bold items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl">Quratulain Shah</span>
          </a>
          <p className="text-sm text-purple-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-purple-500 sm:py-2 sm:mt-0 mt-4">
            © 2024 Quratulain —
            <a href="https://x.com/stelalvna" className="text-purple-400 ml-1" rel="noopener noreferrer" target="_blank">
              @shah
            </a>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4 text-white items-center">
            <p className="hidden md:block text-purple-300 font-bold opacity-80">
              Connect with me:
            </p>
            <a href="https://www.facebook.com/profile.php?id=61565211897828" className="transition-all duration-300 hover:scale-110">
              <fa_1.FaFacebookSquare className="w-[28px] h-[28px] text-white hover:text-[#1877F2] hover:-translate-y-1"/>
            </a>
            <a href="https://x.com/stelalvna" className="transition-all duration-300 hover:scale-110">
              <fa6_1.FaSquareXTwitter className="w-[28px] h-[28px] text-white hover:text-gray-100 hover:-translate-y-1"/>
            </a>
            <a href="https://www.instagram.com/muhammadsalah9544/" className="transition-all duration-300 hover:scale-110">
              <fa_1.FaInstagramSquare className="w-[28px] h-[28px] text-white hover:text-[#fa7e1e] hover:-translate-y-1"/>
            </a>
            <a href="https://github.com/Quratulain-bilal" className="transition-all duration-300 hover:scale-110">
              <fa6_1.FaSquareGithub className="w-[28px] h-[28px] text-white hover:text-[#6e5494] hover:-translate-y-1"/>
            </a>
            <a href="https://www.linkedin.com/in/quratulain-shah-7bb869316" className="transition-all duration-300 hover:scale-110">
              <fa_1.FaLinkedin className="w-[28px] h-[28px] text-white hover:text-[#0072b1] hover:-translate-y-1"/>
            </a>
          </span>
        </div>
      </footer>
    </div>);
};
exports.default = Footer;
