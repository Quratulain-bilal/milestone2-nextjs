import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

export default function Home() {
  return (
    <div className="bg-black">
      <About />
      <div className="h-[2px] w-[80%] bg-gray-500 rounded-lg mx-auto"></div>
      <Hero />
      <div className="h-[2px] w-[80%] bg-gray-500 rounded-lg mx-auto"></div>
      <Projects />
      <div className="h-[2px] w-[80%] bg-gray-500 rounded-lg mx-auto"></div>
      <Skills />
      <div className="h-[2px] w-[80%] bg-gray-500 rounded-lg mx-auto"></div>
      <Contact />
    </div>
  );
}
