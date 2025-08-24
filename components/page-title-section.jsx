import React from 'react'
import Image from 'next/image'

export default function PageTitleSection({children}) {
  return (
    <div className='flex flex-row items-center gap-3 '>
        <h2 className='text-primary text-2xl font-bold'>{children}</h2>
        <Image src={"/images/underline.svg"} alt="underline" width={100} height={10} className='mt-4' />
      </div>
  )
}
