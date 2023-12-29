/* eslint-disable @next/next/no-img-element */
"use client"

import { FC } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation";
import { DarkArrow } from "../SVGIcon"
import Button from "../Button"

const Vision: FC = () => {

    const router = useRouter();

    const handleToVision = () => {
        router.push("/vision");
    }


    return (
        <div className="flex px-24 max-lg:px-12">
            <div className="flex py-[150px] max-w-[1440px] justify-between mx-auto">
                <div className="flex ">
                    {/* <img src="./img/vision.png" alt="vision" ></img> */}
                    <Image src="/img/vision.png" width={685} height={1070} alt="vision" className="object-cover max-xl:hidden"></Image>

                </div>
                <div className="flex flex-col mt-[150px] gap-[40px] rounded-[25px] border-[1px] border-main py-[70px] px-[60px] w-[630px] bg-gradient-to-t from-[#090808] to-gray-800 shadow-md shadow-main h-fit max-xl:w-full">
                    <div className="text-[45px] font-rubik font-semibold vision-text max-lg:text-[35px]">Our Vision</div>
                    <div className="text-white text-[27px] font-medium max-lg:text-[20px]">
                        Welcome to Versus, the epitome of passion, innovation, and boundless ambition. Brace yourself for an exhilarating journey into a future that will redefine the very fabric of our existence. Prepare to be captivated, inspired, and empowered as we embark on a transformative mission that knows no limits.
                    </div>
                    <Button className="flex gap-[20px] items-center build-button px-[36px] py-[18px] font-rubik font-semibold text-[27px] w-fit max-lg:text-[20px]" onClick={handleToVision}>Read more <DarkArrow /></Button>
                </div>
            </div >
        </div>
    )
}

export default Vision;