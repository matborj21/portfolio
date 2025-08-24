import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import ListItem from './ListItem'
import PageTitleSection from './page-title-section'

export default function Experience() {
  return (
    <section id='experience' className='flex flex-col items-start text-left gap-5 py-10 mt-20 md:mx-20 lg:mx-45 xl:mx-55'>
      <PageTitleSection>Experience</PageTitleSection>

      <div className='mt-10 md:mx-10 lg:mx-20 xl:mx-30'>
      <Tabs defaultValue="td" className="w-full">
        <TabsList className="bg-transparent">
            <TabsTrigger
            value="td"
            className="border-0 bg-transparent border-b border-b-secondary rounded-none shadow-none cursor-pointer data-[state=active]:bg-primary data-[state=active]:border-b-4 data-[state=active]:border-b-primary transition-all duration-300"
            style={{ background: "none" }}
            >
            Trade Dynamics Consulting Int&apos;l Inc
            </TabsTrigger>
            <TabsTrigger
            value="eacomm"
            className="border-0 bg-transparent border-b border-b-secondary rounded-none shadow-none cursor-pointer data-[state=active]:bg-primary data-[state=active]:border-b-4 data-[state=active]:border-b-primary transition-all duration-300"
            style={{ background: "none" }}
            >
            EACOMM Corporation
            </TabsTrigger>
        </TabsList>
        <TabsContent
          value="td"
          className="transition-opacity duration-300 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100"
        >
          <Card>
            <CardHeader>
              <CardTitle>Software Developer</CardTitle>
              <CardDescription>Aug 2023 — Present</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <ul className='flex flex-col gap-2'>
                  <ListItem>Led the end-to-end development of an asset management system, leveraging PHP for backend workflows and JavaScript to deliver an intuitive and efficient user experience</ListItem>
                  <ListItem>Rolled out Multi-Factor Authentication (MFA) for system login, significantly strengthening application security</ListItem>
                  <ListItem>Contributed to frontend projects utilizing JavaScript frameworks focusing on UX enhancements for consumerfacing products</ListItem>
                  <ListItem>Independently designed and delivered a full-featured asset management platform, utilizing PHP to build robust backend logic and JavaScript with Material UI to craft a modern, responsive frontend interface</ListItem>
                  <ListItem>Contributed to improving internal automation by debugging and enhancing a Discord bot built with Node.js, ensuring reliable delivery of system notifications to team Discord channels</ListItem>
                </ul>

              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent
          value="eacomm"
          className="transition-opacity duration-300 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100"
        >
          <Card>
            <CardHeader>
              <CardTitle>Web Developer</CardTitle>
              <CardDescription>July 2022 — Aug 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <ul className='flex flex-col gap-2 items-start'>
                  <ListItem>Developed backend functionality for the in-house Salesforce web application designed for fast-moving consumer goods, enhancing task management and identifying solutions to bugs
                  </ListItem>
                  <ListItem>Executed frontend implementations using ReactJS aimed at improving consumer product interfaces</ListItem>
                </ul>

              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      </div>
      
    </section>
  )
}
