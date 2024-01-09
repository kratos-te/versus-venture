/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import Image from "next/image";
import { VerseMobile, VerseText } from "./SVGIcon";

const VerseHero: FC = () => {
    return (
        <div className="flex px-24 max-lg:px-12">
            <div className="flex items-center max-w-[1440px] justify-between mx-auto pt-[200px] mb-[100px] relative ">
                <img
                    src={"./svg/verse.svg"}
                    className="absolute left-0 top-20 pointer-events-none w-full  object-cover opacity-80 lg:opacity-100 "
                    alt="hero"
                />
                <div className="flex items-center justify-between pt-40 max-lg:hidden">
                    <div className="flex flex-col gap-[50px] w-2/3 z-10 max-lg:w-full">
                        {/* <div className="verse-text uppercase ">VERSE</div> */}
                        <div className="flex flex-col gap-[10px] relative">
                            <VerseText className="absolute -top-10" />
                            <div className="text-[58px] font-black hero-text">
                                Empowering Your Data Freedom & Control
                            </div>
                        </div>
                        <div className="text-2xl font-medium text-white">
                            Earn tokens through engagement, discover genuine
                            content with our crypto-reward system, and
                            experience a myriad of features - dating, events,
                            games, shopping, 3D interactions and beyond - all in
                            one secure, intuitive space. Say goodbye to
                            traditional logins: your wallet is your key
                        </div>
                    </div>
                    <div className="flex w-1/2 items-end justify-end max-lg:w-full">
                        {/* <img src="./svg/golden.svg" alt="hero building" ></img> */}
                        <Image
                            src="/img/verse.png"
                            width={372}
                            height={795}
                            alt="vision"
                            className="object-cover z-10"
                        ></Image>
                    </div>
                </div>
                <div className="flex flex-col gap-[100px] lg:hidden ">
                    <div className="flex flex-col gap-[50px]  z-10 w-full justify-center pt-[150px]">
                        <div className="flex flex-col  relative items-center">
                            <VerseMobile className="absolute -top-10" />
                            <div className="text-[50px] font-black hero-text text-center">
                                Empowering Your Data Freedom & Control
                            </div>
                        </div>
                        <div className="text-[20px] font-medium text-white text-center">
                            Earn tokens through engagement, discover genuine
                            content with our crypto-reward system, and
                            experience a myriad of features - dating, events,
                            games, shopping, 3D interactions and beyond - all in
                            one secure, intuitive space. Say goodbye to
                            traditional logins: your wallet is your key
                        </div>
                    </div>
                    <div className="flex  items-end justify-center w-full">
                        {/* <img src="./svg/golden.svg" alt="hero building" ></img> */}
                        <Image
                            src="/img/verse.png"
                            width={372}
                            height={795}
                            alt="vision"
                            className="object-cover z-10"
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerseHero;
