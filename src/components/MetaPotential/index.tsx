"use client"

import { FC } from "react"
import Slider from "./Sliders";

const MetaPotential: FC = () => {
    return (
        <div className="flex px-24 max-lg:px-12">
            <div className="flex items-center max-w-[1440px] justify-end mx-auto mb-[150px]">
                <div className="flex flex-col gap-[50px]">
                    <div className="flex flex-col gap-[50px] items-center">
                        <div className="text-[40px] hero-text font-extrabold">
                            Discover the Potential
                        </div>
                        <div className="text-[20px] font-bold text-white">
                            A Versatile Metaverse Architecture
                        </div>
                        <div className="text-[20px] font-bold text-white">
                            The foundation of the MetaVersus lies in its architecture. We have meticulously crafted a modular structure that adapts to different use cases and scenarios
                        </div>
                    </div>
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default MetaPotential; 