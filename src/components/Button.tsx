"use client"
import { FC, ReactNode } from "react"

interface ButtonProps {
    className?: string
    children: ReactNode
    onClick?: () => void;
}
const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <div className={`rounded-[100px] ${className}`} onClick={onClick ? onClick : () => { }}>
            {children}
        </div>
    )
}

export default Button;