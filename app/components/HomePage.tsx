import MobileBanner from "./MobileBanner";
import NavBar from "./Navbar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="w-full mt-3 md:hidden">
        <MobileBanner />
      </main>
    </>
  );
}
