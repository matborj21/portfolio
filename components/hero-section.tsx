import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HerorSection = () => {
  return (
    <section className='mt-20 mb-40 flex flex-col items-start text-left gap-1 md:mx-15 lg:mx-35 xl:mx-55'>
      <div>
        <h5 className='font-roboto-mono mt-4 text-lg text-primary font-light md:text-2xl'>Hi, my name is</h5>
        <h1 className='text-5xl font-bold text-foreground md:text-6xl'>Mathew Borje</h1>
        <h2 className='text-3xl font-bold text-muted-foreground-2 md:text-4xl'>I create web things that matter.</h2>
      </div>

      <div>
        <p className='text-lg mt-10 max-w-2xl text-accent-foreground md:text-2xl'>
          Dynamic Software Developer with years of experience in backend and frontend development specializing in building efficient web applications.
        </p>
      </div>

      <div className='mt-10 flex gap-5'>
        <Link href="https://github.com/matborj21" target="_blank">
        <Image
          src="/images/github.png"
          alt="Github"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </Link>

      <Link href="https://www.linkedin.com/in/jose-mathew-borje-56398b167/" target="_blank">
        <Image
          src="/images/linkedin.png"
          alt="LinkedIn"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </Link>
      </div>

      <div className='mt-15 md:mt-20'>
        <a 
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className=' border border-primary text-accent-foreground px-15 py-3 rounded-md cursor-pointer hover:bg-accent-foreground hover:text-card transition-colors duration-300'>
          Resume
        </a>
      </div>
      
    </section>
  )
}

export default HerorSection