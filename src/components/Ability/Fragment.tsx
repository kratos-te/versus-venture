"use client"

import { FC } from "react"
import { Divide } from "../SVGIcon"
import { FRAGMENT } from "@/config"
import FramgmentCard from "./FragmentCard"

const Fragment: FC = () => {
    return (
        <div className="flex flex-col gap-[120px] mx-auto">
            <div className="flex flex-col text-center items-center">
                <div className="vision-text text-[48px] font-bold mb-[50px] max-lg:text-[40px]">PROOF OF FRAGMENT</div>
                <div className="text-[36px] font-bold text-white mb-[35px] max-lg:text-[30px]">Re-imagining Consensus</div>
                <Divide />
                <div className="text-[24px] font-semibold text-white mt-[35px] max-lg:text-[20px]">Our blockchain is powered by PoF, an innovative consensus algorithm we developed. With its versatility, adaptability and state-of-the-art architecture, it provides extreme security and complete decentralization. It is the ideal scalable core technology to support billions of users and facilitate large-scale global adoption, consistently operating at its full potential and functionality even across multiple use cases</div>
            </div>
            <div className="grid w-full gap-[30px] max-lg:hidden" style={{
                gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
            }}>
                {FRAGMENT.map((item, key) => (
                    <FramgmentCard key={key} title={item.title} icon={item.icon} description={item.description} />
                ))}
            </div>
            <div className="flex flex-col gap-[20px] lg:hidden">
                {FRAGMENT.map((item, key) => (
                    <FramgmentCard key={key} title={item.title} icon={item.icon} description={item.description} />
                ))}
            </div>
        </div>
    )
}

export default Fragment;