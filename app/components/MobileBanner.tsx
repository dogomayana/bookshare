import Image from "next/image";
import Link from "next/link";
export default function MobileBanner() {
  return (
    <>
      <div className="w-full p-3 border border-green-600">
        <p className="text-center text-sm text-gray-700">
          Let&apos;s make the best investment
        </p>
        <h1 className="text-2xl my-8 text-center">
          Unlock a World of Stories.{" "}
          <Link href={"/pages/donateBook"} className="text-[#0095eb] underline">
            Donate,
          </Link>{" "}
          <span className="text-[#0095eb]">Access, Read.</span>
        </h1>
        <Image
          src="/banner.png"
          alt="bannerImage"
          width={320}
          height={160}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
          priority={true}
        />
        <p className="text-center text-sm mt-2 text-gray-700">
          Join Bookshare, the free digital library for everyone. Millions
        </p>
        <p className="text-center text-sm mt-1 text-gray-700">
          Millions of audiobooks and ebooks await.
        </p>
        <p className="text-center text-sm mt-1 text-gray-700">
          Donate, Access, Read
        </p>

        <div className="flex w-full border border-red-500 my-3">
          <input
            type="text"
            className="p-3 w-11/12 block shadow-md rounded-md"
          />
          <button className="p-3 rounded-md w-auto bg-[#0095eb] text-gray-100">
            &#128269;
          </button>
        </div>
      </div>
    </>
  );
}
