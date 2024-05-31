import React from "react";
import SideNavbar from "@app/client/components/sideNavbar";
import Nav from "./data";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function layout({ children }) {
  const cookieStore = cookies();
  const role = cookieStore.get("userRole")?.value;
  if (role !== "ADMIN") {
    redirect("/");
  }
  return (
    <div className="w-full min-h-screen flex">
      <SideNavbar />
      <div className="p-8 w-full">{children}</div>
    </div>
  );
}
