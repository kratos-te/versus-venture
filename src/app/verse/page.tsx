import VerseFeature from "@/components/VerseFeature";
import VerseHero from "@/components/VerseHero";
import VersePillars from "@/components/VersePillars";
import MainLayout from "@/layouts/MainLayout";

export default function VersepPage() {
    return (
        <>
            <MainLayout >
                <VerseHero />
                <VersePillars />
                <VerseFeature />
            </MainLayout>
        </>
    )
}