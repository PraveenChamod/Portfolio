import './App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
import BackgroundAnimation from './common/components/BackgroundAnimation';
import SideNavBar from './common/components/SideNavBar';

function App() {
  return (
    <React.Fragment>
      <div className='h-[100vh] text-[#c3c3c6]'>
        <BackgroundAnimation />
        <div className='relative z-10 flex flex-row h-full'>
          <div className='w-[400px] flex justify-center items-center hidden md:block overflow-y-auto'>
            <SideNavBar />
          </div>
          <div className='w-full flex justify-center items-center overflow-y-auto flex-col'>
            <Outlet />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
