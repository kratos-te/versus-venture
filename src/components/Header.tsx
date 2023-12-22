"use client";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react"
import { HEADER_LINK } from "@/config";
import Typography from "./Typography";
import { MenuButton } from "./MenuButton";

const Header: FC = () => {
    return (
        <header className="py-12 px-24 absolute left-0 top-0 w-full z-50 bg-gradient-to-b from-gray-900 to-black border-b-[1px] border-main">
            <div className="flex items-center max-w-[1440px] justify-between mx-auto">
                <div className="inline-flex items-center gap-6">
                    <Link href={"/"}>
                        <Image src="/logo/logo.png" width={76} height={74} alt=""></Image>
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
                                    />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;