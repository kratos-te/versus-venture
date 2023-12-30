import Industry from "@/components/Industry";
import MetaCommerce from "@/components/MetaCommerce";
import MetaHero from "@/components/MetaHero";
import MetaPotential from "@/components/MetaPotential";
import MetaPower from "@/components/MetaPower";
import MainLayout from "@/layouts/MainLayout";

export default function MetaVersus() {
    return (
        <>
            <MainLayout >
                <MetaHero />
                <MetaPower />
                <MetaPotential />
                <MetaCommerce />
                <Industry />
            </MainLayout>
        </>
    )
}