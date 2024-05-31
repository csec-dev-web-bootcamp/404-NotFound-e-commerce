"use client";
import { logout } from "@app/client/data/auth";
import fetcher from "@app/client/data/fetcher";
import { AtSign } from "lucide-react";
import { KeyRound } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";

export default function UserAccount() {
  const myRef = useRef();
  const router = useRouter();
  const handleSignOut = async () => {
    // try {
    logout();
    router.push("/auth");
    // } catch (error) {
    // console.error(error);
    // }
  };
  const [deleteVisible, setDeleteVisible] = useState(false);
  // console.log("visiblity",deleteVisible)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setDeleteVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <div className="w-full ">
      <div className="h-[100vh] p-5 flex w-3/4 mx-auto center gap-8 ">
        <nav className="w-[24rem] h-full flex  justify-center items-center ">
          <div className="w-full p-8 border shadow-lg rounded-lg">
            <div className="w-full flex flex-col items-center border-b-2 pb-6">
              <img
                className="rounded-full mb-4"
                src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
                alt="Profile picture"
                width="112"
                height="112"
              ></img>
              <h1 className="text-xl font-semibold">Ellie Tucker </h1>
              <h1 className="text-l font-semibold">Customer</h1>
            </div>
            <div className="w-fit mx-auto">
              <span className=" flex p-1.5 gap-1 hover:color-blue-500 cursor-pointer">
                <User className="w-5" /> Basic information
              </span>
              <span className=" flex p-1.5 gap-1 hover:color-blue-500 cursor-pointer">
                <KeyRound className="w-5" /> Password
              </span>
              <span className=" flex p-1.5 gap-1 hover:color-blue-500 cursor-pointer">
                <Trash2 className="w-5" /> Delete account
              </span>
            </div>
          </div>
        </nav>
        <main className="w-full h-full flex flex-col gap-8 pb-[30rem] overflow-y-scroll no-scrollbar">
          <div className="w-full border rounded-lg shadow-lg">
            <div className="p-4 border-b ">
              <h2 className="text-xl font-semibold">Basic information</h2>
            </div>
            <div className="px-4 py-1">
              <h2 className="font-semibold py-2">First Name</h2>
              <input
                className="w-full bg-[#f8fafb] rounded-lg p-1 border"
                type="text"
              />
            </div>
            <div className="px-4 py-1">
              <h2 className="font-semibold py-2">Last Name</h2>
              <input
                className="w-full rounded-lg p-1 border bg-[#f8fafb]"
                type="text"
              />
            </div>

            <div className="px-4 py-1">
              <button className="bg-black p-2 rounded-lg text-white block my-4 ml-auto">
                Save Changes
              </button>
            </div>
          </div>
          <div className="w-full border rounded-lg shadow-lg">
            <div className="p-4 border-b ">
              <h2 className="text-xl font-semibold">Password</h2>
            </div>
            <div className="px-4 py-1">
              <h2 className="font-semibold py-2">Current Password</h2>
              <input
                className="w-full bg-[#f8fafb] rounded-lg p-1 border"
                type="text"
              />
            </div>
            <div className="px-4 py-1">
              <h2 className="font-semibold  py-2 ">New Password</h2>
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
                <input
                  className="w-full flex-grow-1 rounded-lg p-1 border bg-[#f8fafb]"
                  type="text"
                />
                <input
                  className="w-full flex-grow-1 rounded-lg p-1 border bg-[#f8fafb]"
                  type="text"
                />
              </div>
            </div>
            <div className="px-4 py-1">
              <button className="bg-black p-2 rounded-lg text-white block my-4 ml-auto">
                Save Changes
              </button>
            </div>
          </div>
          <div ref={myRef} className="w-full border rounded-lg shadow-lg">
            <div className="p-4 border-b ">
              <h2 className="text-xl font-semibold">Delete account</h2>
            </div>
            <label className="px-4 py-1 flex gap-4">
              <input className=" p-1 border bg-[#f8fafb]" type="checkbox" />
              <h2 className="font-semibold py-2">
                I confirm that I'd like to delete my account
              </h2>
            </label>
            <div className="px-4 py-1">
              <button
                onClick={handleSignOut}
                className="bg-red-600 p-2 rounded-lg text-white block my-4 ml-auto"
              >
                Delete Account
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
