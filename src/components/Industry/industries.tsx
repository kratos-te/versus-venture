"use client"

import { FC } from "react"
import RealEstate from "./RealEstate"
import Marketing from "./Marketing"
import Automotive from "./Automotive"

const Industies: FC = () => {
    return (
        <>
            <div className="grid w-full gap-[50px] max-lg:hidden" style={{
                gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
            }}>
                <RealEstate />
                <Marketing />
                <Automotive />
            </div>
            <div className="flex flex-col gap-[50px] lg:hidden" >
                <RealEstate />
                <Marketing />
                <Automotive />
            </div>
        </>
    )
}

export default Industies