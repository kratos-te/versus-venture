"use client";

import { FC } from "react";
import Fragment from "./Fragment";
import Impossible from "./Impossible";
import Possible from "./Possible";

const Ability: FC = () => {
    return (
        <div className="flex py-[150px] px-24 bg-[#060606] max-lg:px-12">
            <div className="flex flex-col gap-[160px] max-w-[1440px] mx-auto">
                <Fragment />
                <Impossible />
                <Possible />
            </div>
        </div>
    );
};

export default Ability;
