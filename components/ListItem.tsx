import { Play } from 'lucide-react';
import React from 'react'

interface ListItemProps {
  children: React.ReactNode;
}
export default function ListItem({children}: ListItemProps) {
  return (
    <li className="flex items-start text-muted-foreground">
      <span className='text-destructive mr-3 mt-2'>
        <Play className="fill-current text-destructive" size={12}/>
      </span>
      {children}
    </li>
  )
}
