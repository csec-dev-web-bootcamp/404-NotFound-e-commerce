"use server";
import axios from "axios";
import { cookies } from "next/headers";
const server_host = "http://localhost:8000";

export async function login(formData) {
  const cookieStore = cookies();
  try {
    const res = await axios.post(`${server_host}/auth/login`, formData);
    const data = res.data;

    if (data.user && data.jwt) {
      cookieStore.set("accessToken", data.jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
      cookieStore.set("userRole", data.user.role, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
    }

    console.log("first");
    console.log(data.user);
    return { user: data.user };
  } catch (error) {
    console.error(error);
    const data = error.response?.data;
    return { error: data || "An unknown error occurred" };
  }
}

export async function logout(req, res) {
  const cookieStore = cookies();
  await cookieStore.set("accessToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1, // Expire the cookie immediately
    path: "/",
  });
  await cookieStore.set("userRole", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1, // Expire the cookie immediately
    path: "/",
  });
  console.log(cookieStore);
  console.log(cookieStore);
}

export async function register(formData) {
  const cookieStore = cookies();
  try {
    const res = await axios.post(`${server_host}/auth/register`, formData);
    console.log({ res });
    const data = res.data;

    if (data.user && data.jwt) {
      cookieStore.set("accessToken", data.jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
      cookieStore.set("userRole", data.user.role, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });
    }

    return { user: data.user };
  } catch (error) {
    console.error(error);
    const data = error.response?.data;
    return { error: data || "An unknown error occurred" };
  }
}
