import { Play } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import ListItem from './ListItem';
import PageTitleSection from './page-title-section';



const About = () => {

  const techStacks = [
    ['Javascript (ES6+)', 'TypeScript', 'ReactJS','NodeJS', 'Material UI', 'Shadcn'],
    [ 'PHP', 'Laravel', 'CakePHP', 'Tailwind CSS', 'MySQL', 'PostgreSQL'],
  ];

  return (
    <section id='about' className='flex flex-col items-start text-left gap-5 py-10 md:mx-20 lg:mx-35 xl:mx-55'>
      <PageTitleSection>About me</PageTitleSection>

    <div className='flex-col flex md:flex-row md:justify-between md:items-start md:gap-10 w-full'>
      <div>
          <div className='flex flex-col gap-5 mt-10 max-w-3xl text-muted-foreground text-lg md:text-lg'>
            <p>My full name is <span className='text-destructive font-medium'>Jose Mathew Borje</span>, a passionate Software Developer with 3+ years of experience building efficient web applications and leading development teams. I specialize in full-stack development with expertise in <span className='text-destructive font-medium'>PHP</span>, <span className='text-destructive'>ReactJS</span>, and modern <span className='text-destructive font-medium'>JavaScript</span>.</p>

            <p>Currently working at <span className='text-destructive font-medium'>Trade Dynamics Consulting Int'l Inc</span>, I've successfully led the end-to-end development of an asset management system and implemented Multi-Factor Authentication to enhance application security.</p>

            <p>My technical toolkit includes PHP (<span className='text-destructive font-medium'>Laravel</span>, <span className='text-destructive font-medium'>CakePHP</span>), JavaScript (Node.js, ReactJS, Vue.js), and modern UI frameworks like Material UI and Tailwind CSS. I'm committed to writing clean, maintainable code and continuously enhancing system stability through innovative solutions.</p>
          </div>

          <div className='grid grid-cols-2 gap-20 max-w-2xl mt-10'>
            {techStacks.map((stack, i) => (
              <ul className='space-y-1' key={i}>
                {stack.map((tech) => (
                  <ListItem key={tech}>{tech}</ListItem>
                ))}
              </ul>
            ))}
          </div>
      </div>

      <div className='hidden md:block md:m-auto relative w-[300px] h-[300px] group'>
        {/* Background border box, offset for shadow effect */}
        <div className="absolute top-3 left-3 w-[300px] h-[300px] border-2 border-[#6b5c4d] bg-secondary pointer-events-none z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 rounded"></div>
        {/* Foreground image with border, shadow, and mask */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] border border-[#2b3a3a] z-10 shadow-lg overflow-hidden rounded transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
          <Image
            src={"/images/about-illustration.png"}
            alt="about-illustration"
            width={300}
            height={300}
            className="w-full h-full object-cover"
            priority
          />
          {/* Mask overlay */}
          <div className="absolute inset-0 bg-[#e7d7cb]/80 transition-opacity duration-300 pointer-events-none group-hover:opacity-0"></div>
        </div>
      </div>
    </div>
      
    </section>
  )
}

export default About