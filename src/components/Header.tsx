"use client";
import Link from "next/link";
import { FC, useState } from "react";
import { ECOSYSTEM_MENU, HEADER_LINK, ABOUT_MENU } from "@/config";
import { MenuButton } from "./MenuButton";
import { HamburgerIcon } from "./SVGIcon";
import { DropDown } from "./Dropdown";
import { VersusLogo } from "./VersusLogo";

const Header: FC = () => {
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const [isEcosystem, setIsEcosystem] = useState(false);
    const [isBuild, setIsBuild] = useState(false);
    const [isCommunity, setIsCommunity] = useState(false);
    const [isAbout, setIsAbout] = useState(false);

    const handleDropdown = () => {
        setIsShowDropdown(!isShowDropdown);
    };

    const handleShowMenu = (title: string) => {
        if (title === "Ecosystem") {
            setIsEcosystem(!isEcosystem);
            setIsAbout(false);
        } else if (title === "Build") {
            setIsBuild(!isBuild);
        } else if (title === "Community") {
            setIsCommunity(!isCommunity);
        } else if (title === "About") {
            setIsAbout(!isAbout);
            setIsEcosystem(false);
        }
    };
    return (
        <header className="py-8 px-24 fixed left-0 top-0 w-full z-50 bg-gradient-to-b from-gray-900 to-black border-b-[1px] border-main max-md:px-[50px]">
            <div className="flex items-center max-w-[1440px] justify-between mx-auto relative ">
                <div className="inline-flex items-center gap-6">
                    <Link href={"/"}>
                        <VersusLogo size={64} />
                    </Link>
                </div>

                <div className="items-center gap-[18px] hidden lg:flex">
                    <nav>
                        <ul className="flex gap-[40px]">
                            {HEADER_LINK.map((item, key) => (
                                <li key={key}>
                                    <MenuButton
                                        key={key}
                                        icon={<item.icon />}
                                        title={item.title}
                                        link={item.link}
                                        onClick={() =>
                                            handleShowMenu(item.title)
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                {isEcosystem && (
                    <div className="w-48 rounded-1xl bg-dark-200 z-10 absolute top-14 right-[420px] max-lg:hidden">
                        <div className="flex flex-col gap-[20px] p-6">
                            {ECOSYSTEM_MENU.map((item, key) => (
                                <Link
                                    key={key}
                                    href={item.link}
                                    className="text-[16px] font-semibold text-white"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                {isAbout && (
                    <div className="w-48 rounded-1xl bg-dark-200 z-10 absolute top-14 right-4 max-lg:hidden ">
                        <div className="flex flex-col gap-[20px] p-6">
                            {ABOUT_MENU.map((item, key) => (
                                <Link
                                    key={key}
                                    href={item.link}
                                    className="text-[16px] font-semibold text-white"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
                <div className="flex lg:hidden gap-7">
                    <div
                        className="text-[12px] md:text-[16px] flex items-center text-left text-white font-bold"
                        onClick={handleDropdown}
                    >
                        <HamburgerIcon className="" />
                    </div>
                </div>
                {isShowDropdown && (
                    <div className="w-64 rounded-2xl bg-dark-200 z-10 absolute top-14 right-0 lg:hidden ">
                        <div className="flex flex-col gap-[20px] p-6">
                            {HEADER_LINK.map((item, key) => (
                                <DropDown
                                    key={key}
                                    icon={<item.icon />}
                                    title={item.title}
                                    link={item.link}
                                />
                            ))}
                            {/* {isEcosystem && (
                                <div className="w-48 rounded-2xl bg-dark-200 z-10  right-[500px] lg:hidden">
                                    <div className="flex flex-col gap-[20px] p-6">
                                        {ECOSYSTEM_MENU.map((item, key) => (
                                            <Link key={key} href={item.link} className="text-[20px] font-semibold text-white">{item.title}</Link>
                                        ))}
                                    </div>
                                </div>
                            )} */}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
