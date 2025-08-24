import { Play } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import ListItem from './ListItem';

const About = () => {
  return (
    <section id='#about' className='flex flex-col items-start text-left gap-5 py-10'>
      <div className='flex flex-row items-center gap-3'>
        <h2 className='text-primary text-2xl font-bold'>Aboute me</h2>
        <Image src={"/images/underline.svg"} alt="underline" width={100} height={10} className='mt-4' />
      </div>

      <div>
          <div className='flex flex-col gap-5 mt-10 max-w-3xl text-muted-foreground text-lg md:text-xl'>
            <p>My full name is <span className='text-destructive font-medium'>Jose Mathew Borje</span>, a passionate Software Developer with 3+ years of experience building efficient web applications and leading development teams. I specialize in full-stack development with expertise in <span className='text-destructive font-medium'>PHP</span>, <span className='text-destructive'>ReactJS</span>, and modern <span className='text-destructive font-medium'>JavaScript</span>.</p>

            <p>Currently working at <span className='text-destructive font-medium'>Trade Dynamics Consulting Int'l Inc</span>, I've successfully led the end-to-end development of an asset management system and implemented Multi-Factor Authentication to enhance application security.</p>

            <p>My technical toolkit includes PHP (<span className='text-destructive font-medium'>Laravel</span>, <span className='text-destructive font-medium'>CakePHP</span>), JavaScript (Node.js, ReactJS, Vue.js), and modern UI frameworks like Material UI and Tailwind CSS. I'm committed to writing clean, maintainable code and continuously enhancing system stability through innovative solutions.</p>
          </div>

          <div className='grid grid-cols-2 gap-20 max-w-2xl mt-10'>
            <ul className='space-y-1'>
              <ListItem>Javascript (ES6+)</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>ReactJS</ListItem>
              <ListItem>NodeJS</ListItem>
              <ListItem>Material UI</ListItem>
              <ListItem>Shadcn</ListItem>
            </ul>

            <ul className='space-y-1'>
              <ListItem>PHP</ListItem>
              <ListItem>Laravel</ListItem>
              <ListItem>CakePHP</ListItem>
              <ListItem>Tailwind CSS</ListItem>
              <ListItem>MySQL</ListItem>
              <ListItem>PostgreSQL</ListItem>
            </ul>
          </div>
      </div>

      <div className='hidden md:block'>
        <Image src={"/images/about-illustration.png"} alt="about-illustration" width={400} height={400} className='mt-10' />
      </div>
      
      
    </section>
  )
}

export default About