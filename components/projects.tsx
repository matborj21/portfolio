import React from 'react'
import PageTitleSection from './page-title-section'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import ListItem from './ListItem'

const ProjectItems = [
  {
    title: 'AssetTrakker',
    description:
      'is a software solution that helps organizations track, monitor, and manage their physical and digital assets throughout their lifecycle, from acquisition to disposal. It improves efficiency, reduces costs, and ensures accountability by providing real-time visibility into asset location, usage, condition, and value.',
    techStacks: [
      ['CakePHP', 'JavaScript'],
      ['ReactJS', 'Material UI'],
    ],
  },
  {
    title: 'Engagia Admin System (EAS)',
    description:
      'The most complete, easiest to use and end to end integrated sales force automation system designed for consumer goods.',
    techStacks: [
      ['CakePHP', 'jQuery', 'MySQL'],
      ['JavaScript', 'Bootstrap'],
    ],
  },
  {
    title: 'Boxtrakker',
    description:
      'The easiest to use, end-to-end integrated, and real-time shareable logistics management system for consumer goods.',
    techStacks: [
      ['CakePHP', 'jQuery', 'MySQL'],
      ['JavaScript', 'Bootstrap'],
    ],
  },
  {
    title: 'Discord Alert and & Alert System',
    description:
      'A Discord webhook integration system that sends real-time alerts for server errors, bugs, and task status updates from Doovop to Discord channels. Designed for remote work teams to maintain seamless communication and immediate notification of critical system events.',
    techStacks: [
      ['NodeJS', 'MySQL',],
      [ 'Discord Webhook', 'Discord Bot'],
    ],
  },
  // Add more project objects here as needed
]

export default function Projects() {
  return (
    <section id='projects' className='mt-20'>
      <PageTitleSection>Projects</PageTitleSection>
      <div className='flex flex-col items-center gap-5 mt-10'>
        {ProjectItems.map((project, idx) => (
          <Card className='max-w-3xl p-5' key={idx}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className='text-muted-foreground text-lg'>{project.description}</p>
              </div>
              <div className='grid grid-cols-2 gap-20 max-w-2xl mt-10'>
                {project.techStacks.map((stack, i) => (
                  <ul className='space-y-1' key={i}>
                    {stack.map((tech) => (
                      <ListItem key={tech}>{tech}</ListItem>
                    ))}
                  </ul>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
