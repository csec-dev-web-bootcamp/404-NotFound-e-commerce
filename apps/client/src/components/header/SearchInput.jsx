"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useCallback, useRef } from "react";

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inputRef = useRef();

  const createQueryString = useCallback(
    (name) => {
      const timeout = setTimeout(() => {
        const params = new URLSearchParams(searchParams);
        params.set(name, inputRef.current?.value ?? "");
        router.push(`${pathname}?${params.toString()}`);
      }, 1000);

      return () => {
        console.log("Cleared timeout");
        clearTimeout(timeout);
      };
    },
    [searchParams]
  );

  return (
    <input
      type="text"
      ref={inputRef}
      onChange={(e) => createQueryString("search")}
      placeholder="Search Across our system"
      className="w-full p-4 text-slate-700 rounded-lg outline-none border-2 border-slate-800"
    />
  );
}
