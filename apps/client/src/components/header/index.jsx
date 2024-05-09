"use client"
import React, { useState } from 'react'

const Header = () => {
  return (
    <header className='my-8 min-h-60 w-full flex justify-center '>
      <div className=" rounded-md w-11/12 shadow-2xl dark:bg-slate-700 dark:text-white border-[1px] border-slate-400">
        <div className="flex h-full flex-col justify-evenly items-center">
          <h1 className='text-3xl font-semibold'>This is Header text main</h1>
          <div className="flex w-2/5">
            <input type="text" name="" id="" className='w-full p-2 text-slate-700 rounded-lg outline-none border-2 border-slate-200' />
          </div>
          <div className="categories">
            <ul className="flex gap-4">
              <li className="">Category 1</li>
              <li className="">Category 2</li>
              <li className="">Category 3</li>
              <li className="">Category 4</li>
              <li className="">
              </li>
            </ul>
          </div>
          

        </div>
      </div>
    </header>
  )
}

export default Header
