"use client";

import { useUser } from "@/app/context/userContext";

export default function DashNav() {
  const { user } = useUser();
  let userName: string = user.displayName;

  return (
    <>
      <nav className="w-full p-3 flex border border-b-red-600">
        <div className="">
          <h1 className="text-[15px] font-semibold">
            Hello {userName.split(" ")[1]}&#128075;{" "}
          </h1>
          <p className="text-sm text-gray-600">
            Welcome back to your Bookshare Account!
          </p>
        </div>
      </nav>
    </>
  );
}
