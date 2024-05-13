/*eslint-disable @next/next/no-img-element*/
import React from 'react'

export default function SalesCard({name,email,saleAmount}) {
  return (
    <div className='flex flex-wrap justify-between gap-3'>
        <section className='flex justify-between gap-3'>
            <div className='h-12 w-12 rounded-full bg-gray-100 p-1'>
                <img width={200} height={200} src={`https://api.dicebear.com/8.x/open-peeps/svg?seed=${name}&face=angryWithFang,awe,blank,calm,cheeky,concerned,concernedFear,contempt,cute,driven,cyclops,eatingHappy,explaining,eyesClosed,fear,hectic,lovingGrin1,lovingGrin2,old,monster,rage,serious,smile,smileBig,smileLOL,smileTeethGap,solemn,suspicious,tired,veryAngry`} alt=''/>
            </div>
            <div>
                <p  className='text-sm'>{name}</p>
                <div className='truncate w-[120px] sm:w-auto text-gray-400'>
                    {email}
                </div>
            </div>
        </section>
            <p className=''>{saleAmount}</p>
    </div>
  )
}
