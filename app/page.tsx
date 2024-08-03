import HomePage from "./components/HomePage";
import { getQuestions } from "@/app/service/fetcher";
export default async function Home() {
  // let lop = await getQuestions();
  // console.log(lop);

  return (
    <>
      <HomePage />
    </>
  );
}
