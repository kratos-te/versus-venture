/* eslint-disable @next/next/no-img-element */
"use client"

import { FC } from "react"
import { VERSEPILLARS } from "@/config"
import Pillar from "./Pillar"

const VersePillars: FC = () => {
    return (
        <div className="flex px-24 max-lg:px-12">
            <div className="flex items-center max-w-[1440px] justify-between mx-auto mb-[100px] relative">
                <img src={"./svg/pillar.svg"} className="absolute left-0 bottom-0 pointer-events-none w-full  object-cover opacity-80 lg:opacity-100" alt="hero" />
                <div className="flex flex-col gap-[150px]">
                    <div className="text-center text-[40px] font-semibold text-white max-lg:text-[20px]">We believe in a free, democratic, advanced world, where your voice is heard and you can express yourself, and you are a founding part of a new global system</div>
                    <div className="flex flex-col gap-[100px]">
                        <div className=" text-center text-[40px] fragment-text font-bold uppercase">VERSE Pillars</div>
                        <div className="grid w-full gap-[70px] max-lg:hidden" style={{
                            gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
                        }}>
                            {VERSEPILLARS.map((item, key) => (
                                <Pillar key={key} title={item.title} description={item.description} icon={<item.icon />} />
                            ))}
                        </div>
                        <div className="grid w-full gap-[19px] max-md:hidden lg:hidden" style={{
                            gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
                        }}>
                            {VERSEPILLARS.map((item, key) => (
                                <Pillar key={key} title={item.title} description={item.description} icon={<item.icon />} />
                            ))}
                        </div>
                        <div className="flex flex-col w-full gap-[19px]  lg:hidden" >
                            {VERSEPILLARS.map((item, key) => (
                                <Pillar key={key} title={item.title} description={item.description} icon={<item.icon />} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VersePillars