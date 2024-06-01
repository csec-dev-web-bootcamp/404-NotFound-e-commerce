"use client";
import { useEffect, useState } from "react";
import { logout } from "@app/client/data/auth";


import { Button } from "./ui/button";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import getCookie from "./getUserRole";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@app/client/components/ui/dropdown-menu"

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
            {userRole ? (
            <FaRegUser className=" text-black" size={20} />
          ) : (
            <div className="rounded-full border-[1px] p-2 px-3 border-slate-600 flex items-center justify-center gap-2">
                <FaRegUser className=" text-black" />
                Sign up
              </div>

            )}
            <span className="sr-only">User Profile</span>
          </Button>
        </DropdownMenuTrigger>
      {userRole ? (
        
        <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
           {userRole === "ADMIN" && userRole && (
        <DropdownMenuGroup>

            <DropdownMenuItem onClick={() => router.push("/admin")}>
            
            <Settings className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem> 
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Admin Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Total Billings</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

            
          )}
          
        
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
         
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
         
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        
            <DropdownMenuItem className="text-red-600" onClick={handleSignOut}>
              
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          
        <DropdownMenuSeparator />
  
      </DropdownMenuContent>
      ) : (
        <DropdownMenuContent className="w-56">
<DropdownMenuItem onClick={() => router.push("/auth")}>
                
                <User className="mr-2 h-4 w-4" />
                
              <span>Sign In</span>
              <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>

              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/auth")}>
          <UserPlus className="mr-2 h-4 w-4" />
                
              <span>Register</span>
              <DropdownMenuShortcut>⇧⌘R</DropdownMenuShortcut>

              </DropdownMenuItem>
              </DropdownMenuContent>

      )}
    </DropdownMenu>

   
    </div>
  );
}
