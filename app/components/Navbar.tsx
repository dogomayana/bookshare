import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full p-3 flex justify-around border-blue-50 border fixed top-0  bg-white">
      <Link href={"/"} className="text-base block my-auto hover:text-[#0095eb]">
        BookShare
      </Link>
      <div className="flex space-x-3 my-auto">
        <Link
          className="text-base text-gray-900 hover:text-[#0095eb]"
          href={"/pages/donateBook"}
        >
          Donate Book
        </Link>
        <Link
          className="text-base text-gray-900 hover:text-[#0095eb]"
          href={"/pages/about"}
        >
          About
        </Link>
        <Link
          className="text-base text-gray-900 hover:text-[#0095eb]"
          href={"/pages/contact"}
        >
          Contact
        </Link>
      </div>

      <div className="flex space-x-5 my-auto">
        <Link
          className="text-base p-2 rounded-md text-gray-900 hover:bg-[#0095eb] hover:text-gray-100"
          href={"/pages/contact"}
        >
          Contact
        </Link>
        <Link
          className="text-base p-2 rounded-md text-gray-900 hover:bg-[#0095eb] hover:text-gray-100"
          href={"/pages/contact"}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
