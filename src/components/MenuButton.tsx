import { FC } from "react";

interface MenuButtonProps {
    className?: string;
    icon: JSX.Element;
    title: string;
    link: string;
    onClick?: () => void;
}
export const MenuButton: FC<MenuButtonProps> = ({
    className,
    icon,
    title,
    link,
    onClick,
}) => {
    return (
        <div
            className="flex space-x-4 items-center"
            onClick={onClick ? onClick : () => {}}
        >
            <div className={`flex items-center space-x-2 ${className || ""}`}>
                <p className="text-white text-[18px] font-medium font-rubik">
                    {title}
                </p>
                <div className="w-6 h-6 flex items-center justify-between">
                    {icon}
                </div>
            </div>
        </div>
    );
};
