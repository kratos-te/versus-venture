/* eslint-disable @next/next/no-img-element */
"use client"

import { ECOSYSTEM } from "@/config"
import { FC } from "react"
import SystemCard from "./SystemCard"

const Ecosystem: FC = () => {
    return (
        <div className="flex px-[135px] max-mv:px-[142px] max-md:px-[50px]">
            <img src={"./svg/grid.svg"} className="absolute left-0  pointer-events-none w-full  object-cover opacity-80 lg:opacity-100" alt="grid" />
            <div className="flex items-center justify-end mx-auto py-[150px] relative max-md:py-[70px]">
                <div className="flex flex-col gap-[150px] max-md:gap-[50px]">
                    <div className="flex flex-col  gap-[25px] justify-center uppercase">
                        <div className="fragment-text text-[48px] text-center  font-extrabold max-mv:text-[36px] max-md:text-[24px]">VERSUS ECOSYSTEM</div>
                        <div className="text-[40px] font-extrabold text-center tracking-widest text-white max-mv:text-[32px] max-md:text-[20px]">we bring the future</div>
                    </div>
                    <div className="grid w-full gap-[50px] max-mv:hidden" style={{
                        gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
                    }}>
                        {ECOSYSTEM.map((item, key) => (
                            <SystemCard key={key} title={item.title} description={item.description} link={item.link} />
                        ))}
                    </div>
                    <div className="flex flex-col w-full gap-[35px] mv:hidden" >
                        {ECOSYSTEM.map((item, key) => (
                            <SystemCard key={key} title={item.title} description={item.description} link={item.link} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecosystem