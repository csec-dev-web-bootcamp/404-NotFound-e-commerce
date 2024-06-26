"use client";

import { register } from "../../data/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const route = useRouter();
  const [errorMsg, setErrorMsg] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  function onChange(e) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(formState);
    // async function onSubmit(e) {
    e.preventDefault();
    const res = await register(formState);
    console.log({ res });
    if (res.error) {
      setErrorMsg(res.error.message);
      //   console.log(JSON.stringify(res.error));
      //   alert(res.error);
      return;
    }
    alert(`You jhave successfully`);
    route.push("/auth/login");
    // }
  };
  return (
    <section className="  min-h-screen flex items-center justify-center">
      <div className="border-[1px] shadow-2xl bg-white/30 backdrop-blur-xl border-gray-300 rounded-lg p-8  mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-4/12">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between">
            <div className=" flex items-center justify-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400 dark:before:border-neutral-500 dark:after:border-neutral-500">
              <p className="mx-4 mb-4 text-center text-lg font-semibold dark:text-white">
                Registration
              </p>
            </div>
            {errorMsg && (
              <p className="py-4 text-center font-semibold text-red-600">
                {errorMsg}
              </p>
            )}
          </div>

          <div className="relative mb-6 flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm">
              your name
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Your Name"
              onChange={onChange}
              className=" peer block min-h-[auto] w-full rounded border-2  border-slate-700 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2"
            />
            {/* <label
              for="exampleFormControlInput2"
              className="pointer-events-none absolute  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
              Your Name
            </label> */}
          </div>
          <div className="relative mb-3 flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm">
              your email address
            </label>
            <input
              type="email"
              required
              name="email"
              onChange={onChange}
              className=" peer block min-h-[auto] w-full rounded border-2  border-slate-700 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2"
              placeholder="Email address"
            />
            {/* <label
              for="exampleFormControlInput2"
              className="pointer-events-none absolute  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
              Email address
            </label> */}
          </div>

          <div className="relative my-3 flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm">
              your password
            </label>
            <input
              type="password"
              required
              name="password"
              onChange={onChange}
              className=" peer block w-full rounded border-2 border-slate-900 bg-transparent px-3 py-[0.22rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary  data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              //   id="exampleFormControlInput22 this is my input d"
              placeholder="Password"
            />
            {/* <label
              for="exampleFormControlInput22"
              className=" pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8]  peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
              Password
            </label> */}
          </div>

          <div className="mb-3 flex items-center justify-between">
            <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
              <input
                className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-slate-900 rounded-[0.25rem] border-[0.125rem] border-solid"
                // className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-700 before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                type="checkbox"
                value=""
                id="exampleCheck2"
              />
              <label
                className="inline-block ps-[0.15rem] hover:cursor-pointer"
                for="exampleCheck2">
                Remember me
              </label>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <input
              type="submit"
              value="Register"
              className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            />

            <p className="mb-0 mt-2 pt-1">
              have an account?
              <Link
                href="/auth/login"
                className="ml-1 transition duration-150 ease-in-out text-blue-700 focus:text-danger-600 active:text-danger-700">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
