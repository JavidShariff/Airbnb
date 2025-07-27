'use client';
import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image
      className='hidden md:block cursor-pointer'
      alt = "logo"
      height= {100}
      width= {100}
      src = "/images/logo.png" 
      />
    </div>
  )
}

export default Logo
