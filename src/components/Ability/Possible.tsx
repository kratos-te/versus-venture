"use client"

import { IMPOSSIBLE, POSSIBLE } from "@/config";
import { FC } from "react"
import MakeCard from "./MakeCard";

const Possible: FC = () => {
    return (
        <div className="flex flex-col gap-[82px] max-mv:gap-[50px]">
            <div className="flex items-center justify-center text-center text-[48px] fragment-text font-bold max-mv:text-[32px] max-md:text-[24px]">
                Made Possible
            </div>
            <div className="grid w-full gap-[25px] max-lg:hidden" style={{
                gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
            }}>
                {POSSIBLE.map((item, key) => (
                    <MakeCard key={key} title={item.title} icon={item.icon} description={item.description}></MakeCard>
                ))}
            </div>
            <div className="flex flex-col gap-[31px] lg:hidden">
                {POSSIBLE.map((item, key) => (
                    <MakeCard key={key} title={item.title} icon={item.icon} description={item.description}></MakeCard>
                ))}
            </div>
        </div>
    )
}

export default Possible;