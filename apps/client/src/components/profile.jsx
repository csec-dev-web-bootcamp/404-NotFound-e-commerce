"use client";
import { useEffect, useState } from "react";
import { logout } from "@app/client/data/auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@app/client/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import getCookie from "./getUserRole";

export default function Profile() {
  const [userRole, setUserRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchRole() {
      const role = await getCookie();
      setUserRole(role);
    }
    fetchRole();
  }, []);

  const handleSignOut = async () => {
    logout();
    router.push("/auth");
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="smicon">
            <FaRegUser className=" text-black" />
            <span className="sr-only">User Profile</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {userRole === "ADMIN" && userRole && (
            <DropdownMenuItem onClick={() => router.push("/admin")}>
              Dashboard
            </DropdownMenuItem>
          )}
          {userRole ? (
            <DropdownMenuItem className="text-red-600" onClick={handleSignOut}>
              Logout
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem onClick={() => router.push("/auth")}>
                Sign In
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/auth")}>
                Register
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
