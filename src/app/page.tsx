import Hero from '@/components/Hero'
import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <MainLayout >
        <Hero />
      </MainLayout>
    </>
  )
}
