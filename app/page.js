import React from 'react'
import Link from 'next/link'


const HomePage = () => {
  return (
    <section className='h-screen bg-amber-500 flex w-full gap-36'>
      <Link href={'/properties'}>Properties</Link>
      <h1> HomePage </h1> 
    </section>
  )
}

export default HomePage
