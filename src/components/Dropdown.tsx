"use client"
import { FC, useState } from "react";
import Link from "next/link";
import { ECOSYSTEM_MENU, ABOUT_MENU } from "@/config";


interface DropdownProps {
  className?: string;
  icon: JSX.Element;
  title: string;
  link: string;
  onClick?: () => void;
}
export const DropDown: FC<DropdownProps> = ({
  className,
  icon,
  title,
  link,
  onClick,
}) => {

  const [isEcosystem, setIsEcosystem] = useState(false)
  const [isBuild, setIsBuild] = useState(false)
  const [isCommunity, setIsCommunity] = useState(false)
  const [isAbout, setIsAbout] = useState(false)

  const handleShowMenu = (title: string) => {
    if (title === "Ecosystem") {
      setIsEcosystem(!isEcosystem)
      setIsAbout(false)

    } else if (title === "Build") {
      setIsBuild(!isBuild)
    } else if (title === "Community") {
      setIsCommunity(!isCommunity)
    } else if (title === "About") {
      setIsAbout(!isAbout)
      setIsEcosystem(false)
    }
  }
  return (
    <div
      className="flex flex-col items-center"
      onClick={() => handleShowMenu(title)}
    >
      <div
        className={`flex items-center w-full justify-between ${className ? className : ""}`}
      >
        <p className="text-white text-2xl font-medium font-rubik">{title}</p>
        <div className="w-6 h-6 flex items-center justify-between">{icon}</div>
      </div>
      {isEcosystem && (
        <div className="w-48 rounded-2xl bg-dark-200 z-10   lg:hidden">
          <div className="flex flex-col gap-[20px] p-6">
            {ECOSYSTEM_MENU.map((item, key) => (
              <Link key={key} href={item.link} className="text-[20px] font-semibold text-white">{item.title}</Link>
            ))}
          </div>
        </div>
      )}
      {isAbout && (
        <div className="w-48 rounded-2xl bg-dark-200 z-10  lg:hidden ">
          <div className="flex flex-col gap-[20px] p-6">
            {ABOUT_MENU.map((item, key) => (
              <Link key={key} href={item.link} className="text-[20px] font-semibold text-white">{item.title}</Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
