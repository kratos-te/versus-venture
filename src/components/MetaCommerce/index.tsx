/* eslint-disable @next/next/no-img-element */
"use client"

import { FC } from "react";
import Commerces from "./Commerces";

const MetaCommerce: FC = () => {
    return (
        <>
            <div className="flex px-24 max-lg:px-12">
                <div className="flex flex-col items-end max-w-[1440px] justify-end mx-auto mb-[100px]  relative max-lg:items-center max-lg:justify-center ">
                    <div className="flex flex-col gap-[50px] w-2/3 pl-[100px]  max-lg:w-full max-lg:items-center max-lg:pl-[0px]">
                        <div className="text-[40px] hero-text font-bold">MetaCommerce</div>
                        <div className="text-[24px] font-semibold text-white">
                            The e-commerce industry is evolving, and MetaCommerce is at the forefront of this transformation. Explore 3D interactive shops, where you can interact with products as if you were in a physical store
                        </div>
                    </div>
                    <img src={"./img/bucket.png"} className="absolute left-0 top-10 max-lg:hidden" alt="meta bucket" />
                </div>
            </div>
            <div className="flex py-[75px] px-24 bg-gradient-to-b from-white to-[#E4FC22] ">
                <div className="flex flex-col max-w-[1440px] w-2/3 mx-auto relative items-end  max-lg:w-full max-lg:items-center">
                    <div className="flex flex-col ">
                        <div className="text-[32px] font-semibold max-lg:text-[20px]">
                            Revolutionize Your Shopping Experience
                        </div>
                    </div>
                </div>
            </div>
            <Commerces />
        </>

    )
}

export default MetaCommerce