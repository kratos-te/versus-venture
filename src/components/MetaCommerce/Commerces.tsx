"use client"

import { METACOMMERCE } from "@/config"
import { FC } from "react"
import Commerce from "./Commerce"

const Commerces: FC = () => {
    return (
        <div className="flex px-24 py-[150px] max-lg:px-12">
            <div className="flex items-center max-w-[1440px] mx-auto">
                <div className="flex gap-[120px] items-center max-lg:flex max-lg:flex-col max-lg:gap-[100px]">
                    {METACOMMERCE.map((item, key) => (
                        <Commerce key={key} title={item.title} icon={<item.icon />} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Commerces