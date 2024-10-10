import SideNavButton from './buttons/SideNavButton'
import HomeIcon from '../../assets/images/icons/Home.png';
import AboutMeIcon from '../../assets/images/icons/AboutMe.png';
import BlogsIcon from '../../assets/images/icons/Blogs.png';
import ProjectIcon from '../../assets/images/icons/Project.png';
import PublicationsIcon from '../../assets/images/icons/Publications.png';
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
            <div className='w-full flex flex-col justify-between item-center border-r border-[#545AA7] py-6'>
                <div className='flex items-center justify-center text-bold text-title-24'>
                    Praveen<span style={{ color: '#e55a66' }}>_</span>Chamod
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <SideNavButton iconPath={HomeIcon} buttonName="Home" to="/" isSelected={selectedButton === "Home"} onClick={() => handleButtonClick("Home")}/>
                    <SideNavButton iconPath={AboutMeIcon} buttonName="About" to="/about" isSelected={selectedButton === "About"} onClick={() => handleButtonClick("About")}/>
                    <SideNavButton iconPath={BlogsIcon} buttonName="Blogs" to="/blogs" isSelected={selectedButton === "Blogs"} onClick={() => handleButtonClick("Blogs")}/>
                    <SideNavButton iconPath={ProjectIcon} buttonName="Projects" to="/project" isSelected={selectedButton === "Project"} onClick={() => handleButtonClick("Project")}/>
                    <SideNavButton iconPath={PublicationsIcon} buttonName="Publications" to="/publications" isSelected={selectedButton === "Publications"} onClick={() => handleButtonClick("Publications")}/>
                </div>
                <footer>
                    <div className="flex items-center justify-center">
                        <span className="text-white text-lg">&copy;</span>
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