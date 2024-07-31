"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="p-4 fixed h-screen left-0 flex-none md:w-64">
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
          <h1 className="text-lg">Navigation</h1>
          <Link
            className={`link ${
              pathname === "/dashboard"
                ? "block my-4 text-sm p-2 bg-slate-500"
                : ""
            }`}
            href={"/dashboard"}
          >
            Dashboard
          </Link>
          <Link href={"/pages/allBooks"} className="block my-4 text-sm">
            All Books
          </Link>
          <Link href={"/pages/donateBook"} className="block my-4 text-sm">
            Donate Book
          </Link>

          <h1 className="text-lg mt-10">Book Management</h1>
          <Link href={"/pages/dashboard"} className="block my-4 text-sm">
            Dashboard
          </Link>
          <Link href={"/pages/allBooks"} className="block my-4 text-sm">
            All Books
          </Link>
          <Link href={"/pages/donateBook"} className="block my-4 text-sm">
            Donate Book
          </Link>
        </div>

        <div className="w-full absolute bottom-0">
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
