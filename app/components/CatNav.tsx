"use client";
import Link from "next/link";
import Image from "next/image";

import HamburgerIcon from "./HamburgerIcon";
import React from "react";

export default function CatNav() {
  const [reveal, setReveal] = React.useState(false);

  function showDropdownContent() {
    setReveal(!reveal);
  }
  return (
    <>
      <nav className="hidden w-full md:flex flex-wrap">
        <span className="block p-4">Mallal</span>
        <span className="block p-4">ytytallal</span>
        <span className="block p-4">nbnallal</span>
      </nav>

      <div className="md:hidden mb-10 md:mb-0">
        <nav className="w-full py-3 px-4 md:px-8 flex justify-between border-blue-50 border  bg-white">
          <Link href={"/"} className="text-base my-auto hover:text-[#0095eb]">
            <Image
              src="/jlogo.png"
              alt="logo"
              width={150}
              height={50}
              // className="borderr border-green-700"
            />
          </Link>

          <button
            aria-label="nav_button"
            id="buttonTitle"
            className="block md:hidden lg:hidden"
            onClick={showDropdownContent}
          >
            {reveal ? (
              "X"
            ) : (
              <HamburgerIcon
                aria-label="nav_button"
                className={"h-7 w-6 text-black font-bold "}
              />
            )}
          </button>
        </nav>
        {/* Mobile */}
        {reveal && (
          <div
            onClick={showDropdownContent}
            className="px-2 bg-white w-full md:hidden lg:hidden border border-gray-50"
          ></div>
        )}
      </div>
    </>
  );
}
