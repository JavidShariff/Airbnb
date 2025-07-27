'use client';
import Image from 'next/image'

const Avator = () => {
  return (
    <div>
      <Image alt='Avator' src= "/images/avatar.png" 
      className="rounded-full"
      width={30} height={30}/>
    </div>
  )
}

export default Avator
