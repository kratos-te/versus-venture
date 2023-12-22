import Ability from '@/components/Ability'
import Hero from '@/components/Hero'
import SelectPart from '@/components/SelectPart'
import Value from '@/components/Value'
import Vision from '@/components/Vision'
import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <MainLayout >
        <Hero />
        <SelectPart />
        <Vision />
        <Value />
        <Ability />
      </MainLayout>
    </>
  )
}
