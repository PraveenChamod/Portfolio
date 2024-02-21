export namespace CommonTypes {
    export interface IconButtonProps {
        iconPath: string;
        buttonName: string;
        to: string;
        isSelected: boolean;
        onClick: () => void;
    }
    
    export interface TextButtonProps {
        description: string,
        onClick?: () => void;
    }
}