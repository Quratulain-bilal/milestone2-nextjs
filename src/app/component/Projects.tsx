


import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "CALCULATOR",
    description:
      " A CLI-based calculator is a text-based tool for performing arithmetic operations directly in the terminal. ",
    imageUrl: "/projects/calculator.jpg",
    link: "https://github.com/Quratulain-bilal/simple-calculator.git",
  },
  {
    title: "ATM-MACHINE",
    description:
      "CLI-based ATM machine project enabling cash withdrawals, balance checks, and secure PIN authentication.",
    imageUrl: "/projects/atm.jpg",
    link: " https://github.com/Quratulain-bilal/My_Atm_machine.git",
  },

  {
    title: "TO-DO-LIST",
    description:
      "CLI-based to-do list project that allows users to manage tasks via terminal commands for an efficient task management experience.",
    imageUrl: "/projects/todo.jpg",
    link: "https://github.com/Quratulain-bilal/simple_todo_list.git",
  },
  {
    title: "STUDENT MANAGEMENT SYSTEM",
    description:
      "CLI-based student management system for efficient terminal-based management of student records, including adding",
    imageUrl: "/projects/student.jpg",
    link: "https://github.com/Quratulain-bilal/student-manangement-sysytem.git ",
  },
  {
    title: "BANK MANAGEMENT SYSTEM",
    description:
      "This is a basic CLI-based bank management system program made with TypeScript. You can run it using NPM.",
    imageUrl: "/projects/bank.jpg",
    link: "https://github.com/Quratulain-bilal/Oop_My_Bank_Project.git ",
  },
  {
    title: "COUNTDOWN TIMER",
    description:
      "CLI-based countdown timer for precise time tracking and alert notifications directly from the terminal.",
    imageUrl: "/projects/countdown.jpg",
    link: "https://github.com/Quratulain-bilal/countdown_timer.git ",
  },
  {
    title: "NUMBER GUESSING GAME",
    description:
      "CLI-based number guessing game that challenges users to guess a randomly generated number within a set number of attempts from the terminal.",
    imageUrl: "/projects/number.jpg",
    link: "https://github.com/Quratulain-bilal/CLI-Number-Guessing-Game.git ",
  },
  {
    title: "QUIZ-GAME",
    description:
      "CLI-based quiz game that tests knowledge with interactive questions and provides immediate feedback directly from the terminal.",
    imageUrl: "/projects/quiz game.jpg",
    link: "https://github.com/Quratulain-bilal/Quiz_game.git ",
  },
  {
    title: "ADVENTURE GAME",
    description:
      "CLI-based adventure game where two competitors face off in a strategic fighter battle directly from the terminal",
    imageUrl: "/projects/adventure game.jpg",
    link: "https://github.com/Quratulain-bilal/Adventure-Game.git ",
  },
];

export default function Projects() {
  return (
    <div id="project">
      <section className="bg-gradient-to-r from-black via-purple-900 to-black text-white">
        <div className="container px-16 py-48 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto mt-3 leading-relaxed text-slate-200">
              Explore my collection of innovative and impactful projects that
              showcase my skills in web development, TypeScript, and AI.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative shadow-purple-800 shadow-md hover:scale-105 transition-all duration-300 italic font-semibold font-serif">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
                    src={project.imageUrl}
                    width={500}
                    height={500}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-700 bg-white bg-opacity-80 opacity-0 hover:opacity-100 text-black rounded-md">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="font-bold underline"
                    >
                      <h2 className="mt-4 text-purple-800">View Project</h2>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
