"use client";

import { FC } from "react";

interface VersusLogoProps {
    color?: string;
    size?: number;
}

export const VersusLogo: FC<VersusLogoProps> = ({
    color = "#e4fc21",
    size = 24,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 226.9 228.5"
            width={size}
            height={size}
        >
            <path
                className="versus_logo_path"
                fill={color}
                d="M91.2,101.9l11.3-25.4C99.8,70.3,70.9,6.2,68.1,0H0L91.1,203.5l79.3-178h22.5l-90.5,203h22.7L226.9,0h-68s-7.7,17.6-21.3,48.1L115.8.4S103.8,0,93.2,0l33.2,73.8L91.2,152.9C86.5,142.3,38.8,36.3,34,25.5H56.7Z"
            />
        </svg>
    );
};
