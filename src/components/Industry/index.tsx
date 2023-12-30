"use client"

import { FC } from "react"
import Industies from "./industries"

const Industry: FC = () => {
    return (
        <div className="flex px-24 max-lg:px-12">
            <div className="flex items-center max-w-[1440px] justify-end mx-auto mb-[150px]">
                <div className="flex flex-col gap-[100px]">
                    <div className="flex flex-col gap-[50px] items-center">
                        <div className="text-[40px] hero-text font-extrabold">
                            Revolutionizing Industries
                        </div>
                        <div className="text-[20px] font-bold text-white">
                            Some New MetaVersus Applications
                        </div>
                    </div>
                    <Industies />
                </div>
            </div>
        </div>
    )
}

export default Industry