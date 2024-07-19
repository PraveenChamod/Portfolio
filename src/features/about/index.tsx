import React from "react";
import { UiTexts } from "../../consts/uiTexts";
import TextButton from "../../common/components/buttons/TextButton";
import { uiLists } from "../../consts/uiLists";

function About() {
  return (
    <div className="flex flex-col justify-center items-left w-full p-8 h-full">
      <div className="mb-6">
        <div>
          <p className="text-[30px] font-bold">Intro</p>
        </div>
        <div>
          <p className="text-xl text-justify">{UiTexts.introduction}</p>
        </div>
      </div>
      <div className="mb-6 flex flex-col gap-6">
        <div>
          <p className="text-[30px] font-bold">Technical Skills</p>
        </div>
        <div className="mt-3 flex flex-row gap-4">
          <div>
            <p className="text-xl font-semibold">Language Exposure:</p>
          </div>
          <div className="flex flex-wrap gap-3 ">
            {uiLists.languageExposure.map((skill, index) => (
              <TextButton key={index} description={skill} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-row gap-4">
          <div>
            <p className="text-xl font-semibold">Framework And Technologies:</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {uiLists.frameworks.map((skill, index) => (
              <TextButton key={index} description={skill} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-row gap-4">
          <div>
            <p className="text-xl font-semibold">Frontend Technologies:</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {uiLists.frontend.map((skill, index) => (
              <TextButton key={index} description={skill} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-row gap-4">
          <div>
            <p className="text-xl font-semibold">Database Management:</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {uiLists.dbManagement.map((skill, index) => (
              <TextButton key={index} description={skill} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-row gap-4">
          <div>
            <p className="text-xl font-semibold">Dev Tools And Practice:</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {uiLists.toolsAndPractices.map((skill, index) => (
              <TextButton key={index} description={skill} />
            ))}
          </div>
        </div>
        <div className="mt-3 flex flex-row gap-4">
          <div>
            <p className="text-xl font-semibold">Software Design:</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {uiLists.softwareDesign.map((skill, index) => (
              <TextButton key={index} description={skill} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="text-[30px] font-semibold">Other Skills</p>
        </div>
        <div className="mt-3 flex flex-row gap-4">
          <div>
            <p className="text-xl font-semibold">Soft Skills:</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {uiLists.otherSkills.map((skill, index) => (
              <TextButton key={index} description={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
