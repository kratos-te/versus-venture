/* eslint-disable @next/next/no-img-element */
import { FC, ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
    children?: ReactNode;
    className?: string;
    bgSrc?: string;
    bgClass?: string;
}

const MainLayout: FC<Props> = ({ children, className, bgSrc, bgClass }) => {
    return (
        <div className="relative overflow-hidden">
            <Header />
            <main className={`min-h-screen bg-dark-300 ${className || ""}`}>
                {children}
            </main>
            <Footer />
            {bgSrc && <img src={bgSrc} className={bgClass} alt="nft" />}
        </div>
    );
};

export default MainLayout;
