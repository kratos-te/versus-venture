/* eslint-disable @next/next/no-img-element */
"use client"

import { ECOSYSTEM } from "@/config"
import { FC } from "react"
import SystemCard from "./SystemCard"

const Ecosystem: FC = () => {
    return (
        <div className="flex px-[135px] max-lg:px-12">
            <img src={"./svg/grid.svg"} className="absolute left-0  pointer-events-none w-full  object-cover opacity-80 lg:opacity-100" alt="grid" />
            <div className="flex items-center max-w-[1440px] justify-end mx-auto py-[150px] relative ">
                <div className="flex flex-col gap-[150px]">
                    <div className="flex flex-col  gap-[25px] justify-center uppercase">
                        <div className="fragment-text text-[48px] text-center  font-extrabold">VERSUS ECOSYSTEM</div>
                        <div className="text-[40px] font-extrabold text-center tracking-widest text-white">we bring the future</div>
                    </div>
                    <div className="grid w-full gap-[50px] max-lg:hidden" style={{
                        gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
                    }}>
                        {ECOSYSTEM.map((item, key) => (
                            <SystemCard key={key} title={item.title} description={item.description} link={item.link} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-[50px] lg:hidden" >
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