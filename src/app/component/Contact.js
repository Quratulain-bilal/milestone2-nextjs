"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Contact = () => {
    return (<div id="contact">
      <section className="text-gray-600 body-font relative bg-gradient-to-r from-black to-purple-900">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115758.70437517508!2d66.87047998858372!3d24.950476087767356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315316d0ef89f%3A0x3373486be2ae62b0!2sBaldia%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1725096256625!5m2!1sen!2s" style={{ filter: "contrast(1.2)  opacity(0.7)" }}/>
            <div className="bg-black bg-opacity-80 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-purple-200">Baldiya Town, Karachi</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-purple-200 leading-relaxed">
                  aimoshah@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-purple-200">03102645309</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-black bg-opacity-80 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-lg shadow-lg">
            <h2 className="text-white text-lg mb-5 font-bold title-font">
              Contact Me
            </h2>
            <form action="https://formspree.io/f/mzzpoldg" method="POST">
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-white font-bold">
                  Name
                </label>
                <input type="text" id="Name" name="Name" className="w-full rounded border border-gray-600 focus:ring-2 focus:ring-white
                   text-base outline-none text-black
                   -100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out bg-white" required/>
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-white font-bold">
                  Email
                </label>
                <input type="email" id="Email" name="Email" className="w-full  rounded border border-gray-600 focus:ring-2 focus:ring-white
                  -400 text-base outline-none text-black
                  -100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out bg-white" required/>
              </div>
              <div className="relative mb-4">
                <label htmlFor="subject" className="leading-7 text-sm text-white font-bold">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" className="w-full  rounded border border-gray-600 focus:ring-2 focus:ring-white
                  -400 text-base outline-none text-black
                  -100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out bg-white" required/>
              </div>
              <div className="relative mb-4 bg-white">
                <label htmlFor="message" className="leading-7 text-sm text-white font-bold">
                  Message
                </label>
                <textarea id="Message" name="Message" className="w-full  rounded border border-gray-600 focus:ring-2 focus:ring-purple-700 h-32 text-base outline-none text-black
                  -100 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out bg-white" required/>
              </div>
              <button className="text-black bg-white
              -400 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg transition-colors duration-200 ease-in-out">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>);
};
exports.default = Contact;
