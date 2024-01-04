import Ability from "@/components/Ability";
import Difference from "@/components/Difference";
import Ecosystem from "@/components/Ecosystem";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import SelectPart from "@/components/SelectPart";
import Value from "@/components/Value";
import Vision from "@/components/Vision";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <SelectPart />
            <Vision />
            <Value />
            <Ability />
            <Difference />
            <Feature />
            <Ecosystem />
        </MainLayout>
    );
}
