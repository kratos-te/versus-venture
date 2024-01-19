"use client";

import { FC } from "react";
import Fragment from "./Fragment";
import Impossible from "./Impossible";
import Possible from "./Possible";

const Ability: FC = () => {
    return (
        <div className="flex py-[150px] px-24 bg-[#060606] max-mv:px-0 max-md:py-[60px]">
            <div className="flex flex-col gap-[160px] w-full mx-auto max-md:gap-[60px]">
                <Fragment />
                <Impossible />
                <Possible />
            </div>
        </div>
    );
};

export default Ability;
