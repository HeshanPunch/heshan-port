import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>heshanPunch</h1>
      <Link href="/about">About</Link>
      <ProductCard/>
    </main>
  )
}
