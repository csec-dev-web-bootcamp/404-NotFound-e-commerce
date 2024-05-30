// data.js

"use client";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const userRole = cookies.get("userRole");
  if (userRole !== "ADMIN") {
    router.push("/");
  }
};

export default Nav;
