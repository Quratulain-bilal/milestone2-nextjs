import Link from "next/link";

const ProjectSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "static resume",
      imgUrl:
        "https://img.freepik.com/free-photo/resume-apply-work-form-concept_53876-132737.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid",
      gitUrl: "https://github.com/Quratulain-bilal/static-resume-new.git",
      previewUrl: "https://new-hakaton-1-five.vercel.app/",
    },
    {
      id: 2,
      title: "EditAble Resume Builder",
      imgUrl:
        "https://img.freepik.com/free-photo/resume-apply-work-form-concept_53876-148017.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid",
      gitUrl: "https://github.com/Quratulain-bilal/new-hakaton-4e.git",
      previewUrl: "https://new-hakaton-4e.vercel.app/",
    },
    {
      id: 3,
      title: "Dynamic Resume Builder",
      imgUrl:
        "https://img.freepik.com/free-photo/resumes-desk_144627-43367.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid",
      gitUrl: "https://github.com/Quratulain-bilal/hakaton-3-dynamic.git",
      previewUrl: "https://hakaton-3-dynamic.vercel.app/",
    },
    {
      id: 4,
      title: "Cofee website",
      imgUrl:
        "https://img.freepik.com/free-photo/cookies-coffee-crumbling-tabletop_23-2147772152.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid",
      gitUrl: "/project4",
      previewUrl: "https://cofee-website-nextjs.vercel.app/",
    },
    {
      id: 5,
      title: "Calculator",
      imgUrl:
        "https://img.freepik.com/premium-photo/items-doing-business-bright-colored-background_200402-13553.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid",
      gitUrl: "/project5",
      previewUrl: "https://calculator-next-ruddy.vercel.app/",
    },
    {
      id: 6,
      title: "Furniture Website",
      imgUrl:
        "https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695915.jpg?ga=GA1.1.682219552.1730314102&semt=ais_hybrid",
      gitUrl: "https://github.com/Quratulain-bilal/Furniture-custom-css.git",
      previewUrl: "https://furniture-custom-css-zu9r.vercel.app/",
    },
  ];

  return (
    <section className="py-10 bg-gray-900">
      <h2 className="text-4xl text-white text-center mb-8">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-80 bg-gray-800 text-white rounded-lg shadow-lg transform transition-all hover:translate-y-[-5px] hover:z-10"
          >
            <div className="relative h-96 overflow-hidden">
              <img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Link href={project.gitUrl}>
                  <div className="bg-gray-200 px-3 py-2 mx-2 rounded-full cursor-pointer transition-all hover:bg-white z-10">
                    <span className="text-gray-800">Git</span>
                  </div>
                </Link>
                <Link href={project.previewUrl}>
                  <div className="bg-gray-200 px-3 py-2 mx-2 rounded-full cursor-pointer transition-all hover:bg-white z-10">
                    <span className="text-gray-800">Preview</span>
                  </div>
                </Link>
              </div>
            </div>
            <h3 className="text-center py-4 text-lg font-medium">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
