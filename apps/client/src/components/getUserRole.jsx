"use server";

import { cookies } from "next/headers";

export default async function getCookie() {
  const cookieStore = cookies();
  const role = cookieStore.get("userRole")?.value;
  return role;
}
