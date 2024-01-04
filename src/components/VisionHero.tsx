/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import Image from "next/image";
import { ScrollDown } from "./SVGIcon";
import Button from "./Button";

const VisionHero: FC = () => {
    return (
        <div className="flex px-24 border-b-[1px] border-main bg-[#060606] max-lg:px-12">
            <div className="flex items-center max-w-[1440px] justify-between mx-auto pt-[200px] mb-[100px] relative">
                <img
                    src={"./svg/planet.svg"}
                    className="absolute left-0 top-40 pointer-events-none w-full  object-cover opacity-80 lg:opacity-100"
                    alt="hero"
                />
                <div className="flex flex-col gap-[50px] w-1/2 z-10 max-lg:w-full">
                    <div className="text-[58px] font-black planet-text">
                        Vision
                    </div>
                    <div className="text-2xl font-medium text-white">
                        Welcome to Versus, the epitome of passion, innovation,
                        and boundless ambition. Brace yourself for an
                        exhilarating journey into a future that will redefine
                        the very fabric of our existence. Prepare to be
                        captivated, inspired, and empowered as we embark on a
                        transformative mission that knows no limits
                    </div>
                    <Button className=" flex gap-[15px] items-center text-2xl  bg-[#060606] text-white">
                        Scroll for more <ScrollDown />
                    </Button>
                </div>
                <div className="flex w-1/2 items-end justify-end">
                    {/* <img src="./svg/golden.svg" alt="hero building" ></img> */}
                    <Image
                        src="/img/vision.png"
                        width={372}
                        height={795}
                        alt="vision"
                        className="object-cover z-10 max-lg:hidden"
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default VisionHero;
