"use client";
import AdminCard, { CardContent } from '@app/client/components/AdminCard'
import BarChart from '@app/client/components/BarChart'
import { DataTable } from '@app/client/components/DataTable'
import PageTitle from '@app/client/components/PageTitle'
import PieChart from '@app/client/components/PieChart'
import { ColumnDef } from "@tanstack/react-table";
import { cn } from "@app/client/components/utils/cn";
import React from 'react'

const columns = [
    {accessorKey: "color",header: "Color",
    cell: ({row}) =>{return <div className={`w-4 h-4 border p-2 rounded-full ${'bg-['+ row.getValue("color")}] `}></div>}, 
      },
    {accessorKey: "name",header: "Name",},
    { accessorKey: "price", header: "Price" },
    { accessorKey: "quantity", header: "Quantity" },
    { accessorKey: "value", header: "Amount" },
  ];
  const data = [
    {
      name: "iPad Air",
      color: "blue",
      price:599,
      quantity:135,
      value: 80865
    },
    {
        color: "blue",

      name: "iPhone SE",
      price:499,
      quantity:127,
      value: 63373
    },
    {
        color: "blue",

      name: "Nexus 3",
      price:349,
      quantity:98,
      value: 34202
    },
    {
        color: "blue",

      name: "Apple watch series-6",
      price:599,
      quantity:214,
      value: 34202
    },
    {
        color: "blue",

      name: "Others",
      price:599,
      quantity:214,
      value: 34202
    },
    
  ];
export default function TopProducts() {
 
 
  return (
    <div className='flex flex-col gap-5 w-full'>
        <PageTitle title={"Top Selling Products"}/>
        <section className='grid grid-cols-1 gap-4 transition-all lg:grid-cols-2'>
                <CardContent>
                    <p className='font-semibold p-4'>Overwiew</p>
                    <PieChart data={data}/>
                </CardContent>
                <CardContent className="flex  gap-4">
                    <section>
                        <p className='font-semibold'>Top Selling Products</p>
                        <p className='px-4 text-sm text-gray-400'>Top Selling Products in this month.</p>
                    </section>
                    <DataTable columns={columns} data={data} />
                </CardContent>
        </section>
    </div>
  )
}
