import { Link } from 'react-router-dom';
import { CommonTypes } from '../../../types/common';

const SideNavButton = ({ iconPath, buttonName, to, isSelected, onClick }: CommonTypes.IconButtonProps) => {
    
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
return (
    <Link to={to} onClick={handleClick} className={`w-[200px] inline-flex items-center space-x-2 bg-transparent border-2 text-white px-4 py-2 rounded-[20px] mb-1 ${isSelected ? 'border-[#e55a66]' : 'border-transparent'} ${isSelected ? 'transform scale-110 transition-transform' : ''} ${!isSelected ? 'transform hover:scale-110 transition-transform' : ''}`}>
        <div className='mr-2'>
            <img src={iconPath} alt="Icon" className="w-6 h-6" />
        </div>
        <div className='ml-2 text-lg'>{buttonName}</div>
    </Link>
);
};

export default SideNavButton;
