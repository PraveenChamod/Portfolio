import React from 'react';
import ProfileImage from '../../assets/images/images/profile.png';
import GitHubIcon from '../../assets/images/icons/GitHub.png';
import LinkedInIcon from '../../assets/images/icons/Linkedin.png';
import StackOverflowIcon from '../../assets/images/icons/StackOverflow.png';
import TextButton from '../../common/components/buttons/TextButton';
import { UiTexts } from '../../consts/uiTexts';

function Home() {

  const handleDownloadCV = () => {
    const cvUrl = UiTexts.resume;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = UiTexts.resumeDownloadAs;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <a href={UiTexts.github} target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" className="w-10 h-10" />
          </a>
        </div>
        <div>
          <a href={UiTexts.stackoverflow} target="_blank" rel="noopener noreferrer">
            <img src={StackOverflowIcon} alt="Stack Overflow" className="w-8 h-8" />
          </a>
        </div>
        <div className='ml-2'>
          <a href={UiTexts.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="w-13 h-13" />
          </a>
        </div>
      </div>
      <div className='mt-8'>
        <TextButton description='Download CV' onClick={handleDownloadCV} />
      </div>
    </div>
  )
}

export default Home;
