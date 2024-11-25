import { projectList } from "../../consts/uiLists";

function Project() {
  return (
    <div className="sm:px-20 px-10 mb-8">
      <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] text-center my-8">
        Project Experience
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-left bg-gradient-to-tr from-[#F5F5F7] to-violet-300 shadow-lg p-6 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] px-10"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.logo}
                alt={`${project.projectName} logo`}
                className="w-60 h-20 object-contain mb-4 lg:mb-0"
              />
            </a>
            <div className="w-full">
              <p className="text-[30px] lg:text-[40px] text-black">
                {project.projectName}
              </p>
              <p className="text-lg text-black">
                {project.projectDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology, idx) => (
                  <div className="text-lg bg-gradient-to-tr from-[#03346E] to-purple-500 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                    <p className="p-2">{technology}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
