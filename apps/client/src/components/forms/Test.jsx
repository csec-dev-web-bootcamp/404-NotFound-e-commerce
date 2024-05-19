"use client";

import React, { useState } from "react";
import "./test.css";
import { register } from "../../app/data/auth";
import { login } from "../../app/data/auth";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import Router from "next/router";
import { Facebook } from "lucide-react";
import { FaFacebookF, FaGoogle, FaWhatsapp } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { Separator } from "../ui/separator";

export default function Test() {
  const [active, setActive] = useState(false);
  const [registerErrorMsg, setRegisterErrorMsg] = useState("");
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [handleRegister, setHandleRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [handleLogin, setHandleLogin] = useState({
    email: "",
    password: "",
  });

  const registerOnChange = (e) => {
    e.preventDefault();
    setHandleRegister({
      ...handleRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegisterSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const res = await register(handleRegister);
      if (res.error) {
        setRegisterErrorMsg(res.error.message);

        return;
      }
      if (typeof window !== "undefined") {
        Router.push("/");
      }
      alert(`You have successfully registered`);
      setLoading(false);
      if (typeof window !== "undefined") {
        Router.push("/");
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const loginOnChange = (e) => {
    e.preventDefault();
    setHandleLogin({
      ...handleLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // async function onSubmit(e) {
    const res = await login(handleLogin);
    // console.log({ res });
    if (res.error) {
      setRegisterErrorMsg(res.error.message);
      //   console.log(JSON.stringify(res.error));
      //   alert(res.error);
      return;
    }
    alert(`You have successfully logged!`);
    Router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {loading && <p className="text-black">Loading...</p>}
      <div
        className={`container ${active ? "right-panel-active" : ""}`}
        id="container">
        <div className="form-container sign-up-container">
          {/* Sign up container */}
          <form onSubmit={handleRegisterSubmit}>
            <p className="py-3 text-xl font-semibold">Sign up</p>
            {registerErrorMsg && (
              <p className="text-red-500 text-sm">{registerErrorMsg}</p>
            )}
            <input
              name="name"
              onChange={registerOnChange}
              className="border-2 rounded-sm border-slate-700 outline-0"
              type="text"
              required
              placeholder="Name"
            />
            <input
              name="email"
              onChange={registerOnChange}
              className="border-2 rounded-sm border-slate-700 outline-0"
              type="email"
              required
              placeholder="Email"
            />
            <input
              name="password"
              onChange={registerOnChange}
              className="border-2 rounded-sm border-slate-700 outline-0"
              type="password"
              required
              placeholder="Password"
            />
            <div className="flex justify-start w-full py-2">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="size-4 outline-0  border-2 border-slate-800 rounded-sm"
                />
                <p
                  href="#"
                  className=" text-md text-right ">
                  Remember me
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-slate-900 mb-4 hover:bg-white hover:text-black border-2 border-slate-900">
              Sign Up
            </button>
            <Separator />
            <span className="pt-3">Or register with your social accounts</span>
            <div className="flex gap-4 ">
              <Link
                href={"/to"}
                className="border-2 rounded-md border-slate-800 hover:bg-slate-900 hover:text-white size-7 flex items-center justify-center">
                <FaFacebookF size={20} />
              </Link>
              <Link
                href={"/to"}
                className="border-2 rounded-md border-slate-800 hover:bg-slate-900 hover:text-white size-7 flex items-center justify-center">
                <FaGoogle size={20} />
              </Link>
              <Link
                href={"/to"}
                className="border-2 rounded-md border-slate-800 hover:bg-slate-900 hover:text-white size-7 flex items-center justify-center">
                <ImWhatsapp size={22} />
              </Link>
            </div>
          </form>
        </div>
        <div className="form-container sign-in-container">
          {/* Sign in container */}
          <form onSubmit={handleLoginSubmit}>
            <p className="py-3 text-xl font-semibold">Sign in</p>
            {loginErrorMsg && (
              <p className="text-red-500 text-sm">{loginErrorMsg}</p>
            )}
            <input
              name="email"
              onChange={loginOnChange}
              className="border-2 rounded-sm border-slate-700 outline-0"
              type="email"
              required
              placeholder="Email"
            />
            <input
              name="password"
              onChange={loginOnChange}
              className="border-2 rounded-sm border-slate-700 outline-0"
              type="password"
              required
              placeholder="Password"
            />
            <Link
              href="#"
              className="text-blue-600 text-md text-right ">
              Forgot your password?
            </Link>
            <button
              type="submit"
              className="bg-slate-900 mb-4 hover:bg-white hover:text-black border-2 border-slate-900">
              Sign In
            </button>
            <Separator />
            <span className="pt-3">Or use your social accounts</span>
            <div className="flex gap-4 ">
              <Link
                href={"/to"}
                className="border-2 rounded-md border-slate-800 hover:bg-slate-900 hover:text-white size-7 flex items-center justify-center">
                <FaFacebookF size={20} />
              </Link>
              <Link
                href={"/to"}
                className="border-2 rounded-md border-slate-800 hover:bg-slate-900 hover:text-white size-7 flex items-center justify-center">
                <FaGoogle size={20} />
              </Link>
              <Link
                href={"/to"}
                className="border-2 rounded-md border-slate-800 hover:bg-slate-900 hover:text-white size-7 flex items-center justify-center">
                <ImWhatsapp size={22} />
              </Link>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="text-3xl">Welcome Back!</h1>
              <p className="pb-4">
                To keep connected with us please login with your personal info
              </p>
              <Separator />
              <p className="mt-3 text-sm">have an account?</p>

              <button
                onClick={() => setActive(false)}
                className="hover:bg-pink-900  bg-pink-800 mt-5 border-2 border-pink-700 shadow-lg rounded-3xl"
                id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="text-3xl">Hello, Friend!</h1>
              <p className="pb-4">
                Enter your personal details and start shopping with us
              </p>
              <Separator />
              <p className="mt-3 text-sm">Don't have an account?</p>
              <button
                // className=""
                className="hover:bg-pink-900  bg-pink-800 mt-5 border-2 border-pink-700 shadow-lg rounded-3xl"
                onClick={() => setActive(true)}
                id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
