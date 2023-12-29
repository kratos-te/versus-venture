"use client"
import { FC } from "react"
import Link from "next/link";

interface SocialProps {
    icon: JSX.Element;
    link: string
}

const SocialLink: FC<SocialProps> = ({ icon, link }) => {
    return (
        <>
            <Link href={link} passHref>
                <div>{icon}</div>
            </Link>
        </>
    )
}

export default SocialLink;