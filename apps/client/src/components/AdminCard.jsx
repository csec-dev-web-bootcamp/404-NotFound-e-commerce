import React from 'react'
import { cn } from './utils/cn'

export default function AdminCard(props) {
  return (
    <CardContent>
        <section className='flex justify-between gap-2'>
            <p className='text-sm'>{props.label}</p>
            <props.icon className="h-4 w-4 text-gray-400"></props.icon>
        </section>
        <section className='flex flex-col gap-1'>
            <h2 className='text-2xl font-semibold'>{props.amount}</h2>
            <p className='text-xs text-gray-500'>{props.description}</p>
        </section>
    </CardContent>
  )
}
export function CardContent(props){
    return(
        <div 
            {...props} 
            className={cn('flex flex-col w-fullgap-3 rounded-xl border p-5 shadow ',props.className ?? "")}/>
    
        )
}                                                                   