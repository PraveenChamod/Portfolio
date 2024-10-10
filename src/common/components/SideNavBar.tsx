import SideNavButton from './buttons/SideNavButton'
import { useEffect, useState } from 'react';

function SideNavBar() {
    const [selectedButton, setSelectedButton] = useState(() => {
        return localStorage.getItem("selectedButton") || "Home";
    });

    const handleButtonClick = (buttonName : string) => {
        setSelectedButton(buttonName);
        localStorage.setItem("selectedButton", buttonName);
    };

    useEffect(() => {
        const savedButton = localStorage.getItem("selectedButton");
        if (savedButton) {
            setSelectedButton(savedButton);
        }
    }, []);
    return (
        <div className='flex justify-center item-center py-2 h-full'>
            <div className='w-full flex flex-col justify-between item-center border-r border-[#75757a] py-6'>
                <div className='flex items-center justify-center text-bold text-title-24'>
                    Praveen<span style={{ color: '#26bbff' }}>_</span>Chamod
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SideNavButton buttonName="Home" to="/" isSelected={selectedButton === "Home"} onClick={() => handleButtonClick("Home")}/>
                    <SideNavButton buttonName="About" to="/about" isSelected={selectedButton === "About"} onClick={() => handleButtonClick("About")}/>
                    <SideNavButton buttonName="Blogs" to="/blogs" isSelected={selectedButton === "Blogs"} onClick={() => handleButtonClick("Blogs")}/>
                    <SideNavButton buttonName="Projects" to="/project" isSelected={selectedButton === "Project"} onClick={() => handleButtonClick("Project")}/>
                    <SideNavButton buttonName="Publications" to="/publications" isSelected={selectedButton === "Publications"} onClick={() => handleButtonClick("Publications")}/>
                </div>
                <footer className='text-[#75757a]'>
                    <div className="flex items-center justify-center">
                        <span className="text-lg">&copy;</span>
                        <span className="pl-2">2024 Praveen Chamod</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="pl-1">All rights reserved.</span>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default SideNavBar