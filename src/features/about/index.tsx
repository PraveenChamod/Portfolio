import React from 'react'
import { UiTexts } from '../../consts/uiTexts';
import TextButton from '../../common/components/buttons/TextButton';
import { uiLists } from '../../consts/uiLists';

function About() {
  return (
    <div className='flex flex-col justify-center items-left w-full p-8 h-full'>
      <div className='mb-6'>
        <div>
          <p className='text-[30px] font-bold'>Intro</p>
        </div>
        <div>
          <p className='text-xl text-justify'>
            {UiTexts.introduction}
          </p>
        </div>
      </div>
      <div className='mb-6'>
        <div>
          <p className='text-[30px] font-bold'>Technical Skills</p>
        </div>
        <div className='mt-3'>
          <div>
            <p className='text-xl font-semibold'>Frontend</p>
          </div>
          <div className='flex flex-wrap gap-3 my-4'>
            {uiLists.frontendSkills.map((skill, index) => (
              <TextButton key={index} description={skill} />
            ))}
          </div>
        </div>
        <div>
          <div>
            <p className='text-xl font-semibold'>Backend</p>
          </div>
          <div className='flex flex-wrap gap-3 my-4'>
            {uiLists.backendSkills.map((skill, index) => (
              <TextButton key={index} description={skill} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className='text-[30px] font-semibold'>Other Skills</p>
        </div>
        <div className='flex flex-wrap gap-3 my-4'>
          {uiLists.otherSkills.map((skill, index) => (
            <TextButton key={index} description={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About;