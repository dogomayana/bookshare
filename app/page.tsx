import HomePage from "./components/HomePage";
import { getQuestions } from "@/app/service/fetcher";
import { getCookie } from "cookies-next";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import "core-js/stable/atob";
export default async function Home() {
  // getCookie('sb-ciscchstkoanleiqhyiu-auth-token', Options);
  let po: string | undefined = getCookie("sb-ciscchstkoanleiqhyiu-auth-token", {
    cookies,
  })?.split("-")[1];

  if (po !== undefined) {
    // console.log(JSON?.parse(po));
    // console.log(po);
    const decodedHeader = jwtDecode<JwtPayload>(po, { header: true });

    // const decoded = jwtDecode<JwtPayload>(po);

    // console.log(decoded);
  }

  return (
    <>
      <HomePage />
    </>
  );
}
