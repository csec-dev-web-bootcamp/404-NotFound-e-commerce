/** 
 * eslint-disable @next/next/no-img-element 
 * 
* @format 
*/
 /** * eslint-disable @next/next/no-img-element 
*
* @format 
*/
"use client";
import React from "react";
import PageTitle from "@app/client/components/PageTitle";
import { DataTable } from "@app/client/components/DataTable";

const columns = [
  { accessorKey: "category", header: "Category" },
  { accessorKey: "value", header: "Value" },
];
const data = [
  { category: "Account", value: true },
  { category: "Notifications", value: false },
  { category: "Language", value: "English" },
  { category: "Theme", value: "Dark" },
];
export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      {" "}
      <PageTitle title="Settings" /> 
      <DataTable columns={columns} data={data} />{" "}
    </div>
  );
}
