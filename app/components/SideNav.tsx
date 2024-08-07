"use client";
import { Icon } from "@iconify-icon/react";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="hidden md:block md:p-4 md:fixed md:bg-white md:h-screen md:left-0 md:flex-none md:w-64">
      <Link href={"/"} className="text-base my-auto hover:text-[#0095eb]">
        <Image
          src="/jlogo.png"
          alt="logo"
          width={150}
          height={50}
          // className="borderr border-green-700"
        />
      </Link>
      <div className="flex flex-col justify-between">
        <div className="mt-11">
          <h1 className="text-lg font-medium mb-5">Navigation</h1>
          <Link
            className={`link ${
              pathname === "/dashboard"
                ? "block my-2 text-sm p-2 bg-blue-100"
                : "block my-2 p-2 text-sm"
            }`}
            href={"/dashboard"}
          >
            <span className="mr-2">
              <Icon icon="mdi-light:view-dashboard" width={20} height={20} />
            </span>
            <span className="my-auto inline-block">Dashboard</span>
          </Link>
          <Link
            className={`link ${
              pathname.includes("/dashboard/category")
                ? "block my-2 text-sm p-2 bg-blue-100"
                : "block my-2 p-2 text-sm"
            }`}
            href={"/dashboard/category"}
          >
            <span className="mr-2">
              <Icon
                icon="material-symbols-light:category-outline"
                width={20}
                height={20}
              />
            </span>
            <span className="my-auto inline-block">Categories</span>
          </Link>

          <Link href={"/pages/donateBook"} className="block my-4 p-2 text-sm">
            Donate Book
          </Link>

          {/* Book Management */}
          <h1 className="text-lg font-medium mt-10">Book Management</h1>
          <Link
            href={"/pages/dashboard"}
            className={`link ${
              pathname === "/dashboard/mybooks"
                ? "block my-2 text-sm p-2 bg-blue-100"
                : "block my-2 p-2 text-sm"
            }`}
          >
            <span className="mr-2">
              <Icon
                icon="iconamoon:cloud-download-thin"
                width={20}
                height={20}
              />
            </span>
            <span className="my-auto inline-block">Download Book</span>
          </Link>

          <Link
            href={"/dashboard/mybooks"}
            className={`link ${
              pathname === "/dashboard/mybooks"
                ? "block my-2 text-sm p-2 bg-blue-100"
                : "block my-2 p-2 text-sm"
            }`}
          >
            <span className="mr-2">
              <Icon icon="pepicons-pencil:book" width={20} height={20} />
            </span>
            <span className="my-auto inline-block">My Book</span>
          </Link>
        </div>

        {/* Settings Section */}
        <div className="w-full absolute bottom-1">
          <Link href={"#"} className="block my-4 text-sm">
            Help/Support
          </Link>
          <Link href={"#"} className="block my-4 text-sm">
            Settings
          </Link>
          <Link href={"#"} className="block text-sm">
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}
