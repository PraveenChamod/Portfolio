import React from 'react'
import ProfileImage from '../../assets/images/images/profile.png';
import GitHubIcon from '../../assets/images/icons/GitHub.png';
import LinkedInIcon from '../../assets/images/icons/Linkedin.png';
import StackOverflowIcon from '../../assets/images/icons/StackOverflow.png';
import TextButton from '../../common/components/buttons/TextButton';

function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='w-full flex justify-center items-center'>
        <div className='w-48 h-48 overflow-hidden rounded-full mb-4 flex items-center'>
          <img
            src={ProfileImage}
            alt='Profile'
            className='w-full h-full object-cover rounded-full'
          />
        </div>
      </div>
      <div>
        <p className='text-[40px] font-bold'>Praveen Chamod</p>
      </div>
      <div>
        <p className='text-xl'>Associate Software Engineer</p>
      </div>
      <div className='flex flex-row justify-center items-center mt-8'>
        <div className='mr-2'>
          <img src={GitHubIcon} alt="Icon" className="w-10 h-10" />
        </div>
        <div>
          <img src={StackOverflowIcon} alt="Icon" className="w-8 h-8" />
        </div>
        <div className='ml-2'>
          <img src={LinkedInIcon} alt="Icon" className="w-13 h-13" />
        </div>
      </div>
      <div className='mt-8'>
        <TextButton description='Download CV' onClick={() => { }} />
      </div>
    </div>
  )
}

export default Home;