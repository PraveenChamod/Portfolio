import { UiTexts } from "../../consts/uiTexts";
import { experienceList } from "../../consts/uiLists";

function About() {
  return (
    <div className="flex flex-col justify-start items-left w-full h-full lg:px-80 md:px-20 sm:px-10 px-10">
      <div className="p-8 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] shadow-lg bg-gradient-to-tr from-[#03346E] to-purple-500">
        <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px]">
          WHO AM I ?
        </p>
        <p className="mt-4 text-sm sm:text-xl text-justify">
          {UiTexts.introduction}
        </p>
      </div>
      <div className="">
        <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] text-center my-8">
          Industrial Experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {experienceList.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-[#F5F5F7] shadow-lg p-6 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
            >
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-60 h-20 object-contain mb-4 md:mb-0 md:mr-6"
                />
              </a>
              <div className="border-t-2 md:border-t-0 md:border-l-2 border-gray-300 pl-6 pt-6 sm:pt-0">
                <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] text-black">
                  {experience.company}
                </p>
                <p className="text-lg text-black">{experience.position}</p>
                <p className="text-sm font-bold text-black">
                  {experience.duration}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <div className="text-lg bg-gradient-to-tr from-[#03346E] to-purple-500 border rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                      <p className="p-2">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
