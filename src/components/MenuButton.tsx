import { FC } from "react";
import Link from "next/link";

interface MenuButtonProps {
    className?: string;
    icon: JSX.Element;
    title: string;
    link: string;
}
export const MenuButton: FC<MenuButtonProps> = ({
    className,
    icon,
    title,
    link,
}) => {
    return (
        <Link href={link} className="flex space-x-4 items-center ">
            <div className={`flex items-center space-x-2 ${className ? className : ""}`}>
                <p className="text-white text-2xl font-medium font-rubik">{title}</p>
                <div className="w-6 h-6 flex items-center justify-between">{icon}</div>
            </div>
        </Link>
    );
};
