import { Link } from "react-router-dom";
import { CommonTypes } from "../../../types/common";
import {
  AboutMeIcon,
  BlogsIcon,
  HomeIcon,
  ProjectIcon,
  PublicationsIcon,
} from "../../../assets/images/icons";

const SideNavButton = ({
  buttonName,
  to,
  isSelected,
  onClick,
}: CommonTypes.IconButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const iconMapping: Record<
    CommonTypes.IconButtonProps["buttonName"],
    JSX.Element
  > = {
    Home: <HomeIcon className="w-7 h-7" />,
    About: <AboutMeIcon className="w-7 h-7" />,
    Blogs: <BlogsIcon className="w-7 h-7" />,
    Projects: <ProjectIcon className="w-7 h-7" />,
    Publications: <PublicationsIcon className="w-7 h-7" />,
  };
  const icon = iconMapping[buttonName] || null;

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`text-[#e6e6ea] w-[200px] inline-flex items-center space-x-2 bg-transparent border-2 px-4 py-2 rounded-[20px] mb-1 
      } ${isSelected ? "border-[#26bbff]" : "border-transparent"} ${
        isSelected ? "transform scale-110 transition-transform" : ""
      } ${!isSelected ? "transform hover:scale-110 transition-transform" : ""}`}
    >
      <div className="mr-2">{icon}</div>
      <div className="ml-2 text-lg">{buttonName}</div>
    </Link>
  );
};

export default SideNavButton;
