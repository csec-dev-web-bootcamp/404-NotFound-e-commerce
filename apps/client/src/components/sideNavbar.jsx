"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
  LayoutDashboard,
  Settings,
  ShoppingCart,
  ChevronRight,
  UsersRound,
} from "lucide-react";
import { Button } from "./ui/button";
import { LineChart } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <div className="absolute right-[-20px] top-7">
        <Button
          onClick={toggleSidebar}
          variant="secondary">
          <ChevronRight />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/admin",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "User",
            href: "/admin/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/admin/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/admin/top-products",
            icon: LineChart,
            variant: "ghost",
          },
          {
            title: "Products",
            href: "/admin/products",
            icon: ShoppingCartIcon,
            variant: "ghost",
          },
          {
            title: "Setting",
            href: "/admin/setting",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
