import Image from "next/image";
import Link from "next/link";

export default function DesktopBanner() {
  return (
    <>
      <main className="w-full p-3 flex justify-evenly bg-gray-100">
        <div className="w-5/12 p-3">
          <p className="text-sm text-gray-700">
            Let&apos;s make the best investment
          </p>
          <h1 className="text-2xl my-8 ">
            Unlock a World of Stories.{" "}
            <Link
              href={"/pages/donateBook"}
              className="text-[#0095eb] underline"
            >
              Donate,
            </Link>{" "}
            <span className="text-[#0095eb]">Access, Read.</span>
          </h1>
          <p className="text-sm mt-4 text-gray-700">
            Join Bookshare, the free digital library for everyone. Millions of
            audiobooks and ebooks await. Donate, Access, Read
          </p>

          <div className="flex w-full border border-blue-50 mt-8">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search"
              className="p-3 w-11/12 block shadow-md rounded-md placeholder:italic"
            />
            <button className="p-3 rounded-md w-auto bg-[#0095eb] text-gray-100">
              &#128269;
            </button>
          </div>

          <div className="w-full flex justify-between mt-7 mb-4">
            <Link
              href={"/pages/signUp"}
              className="w-5/12 bg-[#0095eb] text-gray-100 text-center text-sm font-semibold rounded-md p-3 block"
            >
              Donate now
            </Link>
            <Link
              href={"/pages/logIn"}
              className="w-5/12 bg-blue-100 text-[#0095eb] text-center text-sm font-semibold rounded-md p-3 block"
            >
              Download now
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-5/12 p-3">
          <Image
            src="/banner.png"
            alt="bannerImage"
            width={320}
            height={160}
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
            priority={true}
          />
        </div>
      </main>{" "}
    </>
  );
}
