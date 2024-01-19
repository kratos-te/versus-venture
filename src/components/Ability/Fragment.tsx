"use client"

import { FC } from "react"
import { Divide } from "../SVGIcon"
import { FRAGMENT } from "@/config"
import FramgmentCard from "./FragmentCard"

const Fragment: FC = () => {
    return (
        <div className="flex flex-col w-full gap-[120px] mx-auto max-md:gap-[50px]">
            <div className="flex flex-col text-center items-center max-mv:px-[154px] max-md:px-[50px]">
                <div className="vision-text text-[48px] font-bold mb-[50px] max-mv:text-[32px] max-md:text-[24px]">PROOF OF FRAGMENT</div>
                <div className="text-[36px] font-bold text-white mb-[35px] max-mv:text-[24px] max-md:text-[16px]">Re-imagining Consensus</div>
                <Divide />
                <div className="text-[24px] font-semibold text-white mt-[35px] max-mv:text-[16px] max-md:text-[12px]">Our blockchain is powered by PoF, an innovative consensus algorithm we developed. With its versatility, adaptability and state-of-the-art architecture, it provides extreme security and complete decentralization. It is the ideal scalable core technology to support billions of users and facilitate large-scale global adoption, consistently operating at its full potential and functionality even across multiple use cases</div>
            </div>
            <div className="grid w-full gap-[30px] max-mv:hidden" style={{
                gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
            }}>
                {FRAGMENT.map((item, key) => (
                    <FramgmentCard key={key} title={item.title} icon={item.icon} description={item.description} />
                ))}
            </div>
            <div className="flex py-[10px] overflow-x-auto mv:hidden">
                <div className="flex gap-[25px] min-w-[1600px] o mv:hidden max-mv:px-[100px] max-md:px-[50px]">
                    {FRAGMENT.map((item, key) => (
                        <FramgmentCard key={key} title={item.title} icon={item.icon} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Fragment;