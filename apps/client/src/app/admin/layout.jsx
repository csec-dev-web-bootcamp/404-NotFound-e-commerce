import React from "react";
import SideNavbar from "@app/client/components/sideNavbar";
import Nav from "./data";

export default function layout({ children }) {
  return (
    <div className="w-full min-h-screen flex">
      <SideNavbar />
      <div className="p-8 w-full">{children}</div>
    </div>
  );
}
