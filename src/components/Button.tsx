"use client"
import { FC, ReactNode } from "react"

interface ButtonProps {
    className?: string
    children: ReactNode
    // onClick: () => void;
}
const Button: FC<ButtonProps> = ({ className, children }) => {
    return (
        <button className={`rounded-[100px] ${className}`}>
            {children}
        </button>
    )
}

export default Button;