import { FC, ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
    children?: ReactNode;
    className?: string;
    bgSrc?: string;
    bgClass?: string;
}

const MainLayout: FC<Props> = ({ children, className, bgSrc,
    bgClass, }) => {
    return (
        <div className="relative overflow-hidden w-[1255px]">
            <Header />
            <main
                className={`min-h-screen bg-dark-300 pb-[480px] ${className ? className : ""
                    }`}
                style={{
                    paddingBottom: 480,
                }}
            >
                {children}
            </main>
            <Footer />
            {bgSrc && (
                <img src={bgSrc} className={bgClass} alt="nft image" />
            )}
        </div>
    )
}

export default MainLayout;