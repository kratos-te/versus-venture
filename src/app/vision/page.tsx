import VisionFeature from "@/components/VisionFeature";
import VisionHero from "@/components/VisionHero";
import MainLayout from "@/layouts/MainLayout";

export default function VisionPage() {
    return (
        <>
            <MainLayout >
                <VisionHero />
                <VisionFeature />
            </MainLayout>
        </>
    )
}

