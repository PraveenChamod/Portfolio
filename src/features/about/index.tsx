import { UiTexts } from "../../consts/uiTexts";
import { experienceList } from "../../consts/uiLists";

function About() {
  return (
    <div className="flex flex-col justify-start items-left w-full h-full lg:px-60 md:px-20 sm:px-20 px-10">
      <div className="p-8 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] shadow-lg bg-gradient-to-tr from-[#03346E] to-purple-500">
        <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px]">
          IT ALL STARTED WITH CURIOSITY...
        </p>
        <p className="mt-4 text-sm sm:text-xl text-justify">
          {UiTexts.introduction}
        </p>
      </div>
      <div>
        <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] text-center my-8">
          Industrial Experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          {experienceList.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center bg-gradient-to-tr from-[#F5F5F7] to-violet-300 shadow-lg p-6 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] px-10"
            >
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-60 h-20 object-contain mb-4 lg:mb-0 lg:pr-6"
                />
              </a>
              <div className="w-full border-t-2 lg:border-t-0 lg:border-l-2 border-gray-500 pl-0 pt-6 lg:pt-0 lg:pl-6">
                <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] text-black">
                  {experience.company}
                </p>
                <p className="text-lg text-black">{experience.position}</p>
                <p className="text-sm font-bold text-black">
                  {experience.duration}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <div className="text-lg bg-gradient-to-tr from-[#03346E] to-purple-500 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]">
                      <p className="p-2">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] text-center my-8">
          Acedemic Excellence
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="flex flex-col lg:flex-row items-center bg-gradient-to-tr from-[#F5F5F7] to-violet-400 shadow-lg p-6 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] px-10">
            <div className="w-full pl-0 lg:pl-6">
              <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] text-black">
                Faculty of Science
              </p>
              <p className="text-[30px] text-black">
                University of Ruhuna - Sri Lanka
              </p>
              <p className="text-lg text-black">Feb 2020 - Feb 2024</p>
            </div>
            <div className="w-full border-t-2 lg:border-t-0 lg:border-l-2 border-gray-500 pl-0 mt-4 lg:pt-0 lg:pl-6">
              <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] text-black">
                Bachelor Of Computer Science (BCS)
              </p>
              <p className="text-lg text-black">
                Second Class Lower Division Honours
              </p>
              <p className="text-lg text-black">GPA: 3.21 / 4.00</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center bg-gradient-to-tr from-[#F5F5F7] to-violet-400 shadow-lg p-6 rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px] px-10">
            <div className="w-full pl-0 lg:pl-6 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-500 pb-4 lg:pb-0" >
              <p className="text-[30px] sm:text-[40px] md:text-[40px] lg:text-[40px] text-black">
                Bandaranayake Central College
              </p>
              <p className="text-[30px] text-black">Veyangoda - Sri Lanka</p>
              <p className="text-lg text-black">Physical Science Stream</p>
            </div>
            <div className="w-full pl-0 mt-4 lg:pl-6">
              <p className="text-lg text-black">
                GCE Advanced Level Examination (2018)
              </p>
              <p className="text-lg text-black">
              Physics - B | Chemistry - B | Com. Mathematics - B
              </p>
              <p className="text-lg text-black">Z-Score: 1.3689</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
