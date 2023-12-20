import Hero from '@/components/Hero'
import SelectPart from '@/components/SelectPart'
import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <MainLayout >
        <Hero />
        <SelectPart />
      </MainLayout>
    </>
  )
}
