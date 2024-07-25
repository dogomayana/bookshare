"use client";

import { ChangeHandler, ParagraphClickHandler } from "@/app/eventTypes";
import GoogleBtn from "../../components/GoogleBtn";
import React from "react";
import Link from "next/link";
import NavBar from "@/app/components/Navbar";

export default function LogIn() {
  const [userInfo, setUserInfo] = React.useState<any>({
    emailAddress: "",
    password: "",
  });
  const [isShown, setIsShown] = React.useState<boolean>(false);

  const handleParagraphClick: ParagraphClickHandler = () => {
    setIsShown(!isShown);
    // console.log("Paragraph clicked", event);
    // alert("working");
  };
  const handleChange: ChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInfo((prev: any) => ({ ...prev, [name]: value }));
    console.log(userInfo.fullName);
  };

  return (
    <>
      <NavBar />
      <main className="bg-white w-full p-2 grid place-items-center my-10">
        <div className="w-full md:w-5/12 mx-auto p-2 my-2">
          <h2 className="text-center text-lg text-gray-600">Welcome back!</h2>
          <p className="text-center text-xs py-1 text-gray-400">
            Continue with BookShare
          </p>
        </div>
        <form className="w-full p-1 md:w-6/12 mx-auto md:p-2">
          <label htmlFor="Email Address" className="block my-5">
            <span className="my-2 block text-gray-600 text-[15px]">
              Email Address
            </span>
            <input
              type="email"
              name="emailAddress"
              id="email"
              onChange={handleChange}
              required
              className="p-3 w-full block border rounded-md border-gray-400 placeholder:text-sm"
              placeholder="user@gamil.com"
            />
            {/* <p className="mt-2 hidden peer-invalid:visible text-pink-600">
              Enter a valid email address
            </p> */}
          </label>
          <label htmlFor="Password" className="block">
            <span className="my-2 block text-gray-600 text-[15px]">
              Password
            </span>
            <input
              type={isShown ? "text" : "password"}
              name="password"
              id="Password"
              onChange={handleChange}
              className="p-3 w-full block border rounded-md border-gray-400 placeholder:text-sm"
              placeholder="Enter your password"
            />
          </label>
          <p
            onClick={handleParagraphClick}
            className="float-right text-xs py-1 text-blue-600 cursor-pointer"
          >
            {isShown ? "hide password" : "show password"}
          </p>

          <button
            type="submit"
            value="Creat Account"
            className="p-3 bg-[#0095eb] hover:bg-black tColor w-full my-3 rounded-md text-sm"
          >
            Login
          </button>
          <Link
            href={"/pages/resetPassword"}
            className="float-right text-xs py-1 text-red-600 cursor-pointer"
          >
            Forgot Password?
          </Link>
        </form>
        <span className="w-full md:w-5/12 mt-4">
          <GoogleBtn text={"Login with Google"} />
        </span>
        <p className="text-center mb-5 mt-4 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/pages/signUp" className="text-blue-500">
            Create Account
          </Link>
        </p>
      </main>
    </>
  );
}
