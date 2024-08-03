import Link from "next/link";
import DashNav from "../components/DashNav";
import Image from "next/image";

export default function Kop() {
  const booksCatt = ["/book3.png", "/book4.png", "/book_1.png", "/book2.png"];
  return (
    <>
      <DashNav />
      <main className="w-full mt-2 flex justify-between space-x-4">
        <div className="w-9/12">
          <div className="grid grid-cols-3 gap-4">
            <span className="block rounded-md bg-white p-3">
              <h2>Book of the Week</h2>
            </span>
            <span className="block rounded-md bg-white p-3">
              <h2>30 Book Donors</h2>
            </span>
            <span className="block rounded-md bg-white p-3">
              <h2>20 Book Readers </h2>
            </span>
          </div>
          <article className="bg-white p-3 mt-10">
            <h1 className="text-lg">Downloaded Books</h1>
            <div className="w-full mt-10 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 place-content-center">
              {booksCatt.map((book, index) => (
                <div key={index} className="block">
                  <Link href={`/pages/${"pol"}`}>
                    <span className="block h-[300px]">
                      <Image
                        src={book}
                        alt="bannerImage"
                        width={320}
                        height={160}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                        }}
                        priority={true}
                      />
                    </span>
                  </Link>

                  <h1 className="pl-3 text-ellipsis text-[15px]">
                    What i learned from trees
                  </h1>
                  <h3 className="pl-3  mb-4 text-gray-500 text-sm">
                    Author Name
                  </h3>

                  <Link
                    href={`/pages/${"pol"}`}
                    className="px-3 block text-center py-2 my-3 rounded-md text-sm font-semibold text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
                  >
                    Read Now
                  </Link>
                  {/* </span> */}
                </div>
              ))}
            </div>
          </article>

          {/* Popular Books */}
          <article className="bg-white p-3 mt-10">
            <h1 className="text-lg">Popular Books</h1>
            <div className="w-full mt-10 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 place-content-center">
              {booksCatt.map((book, index) => (
                <div key={index} className="block">
                  <Link href={`/pages/${"pol"}`}>
                    <span className="block h-[300px]">
                      <Image
                        src={book}
                        alt="bannerImage"
                        width={320}
                        height={160}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                        }}
                        priority={true}
                      />
                    </span>
                  </Link>

                  <h1 className="pl-3 text-ellipsis text-[15px]">
                    What i learned from trees
                  </h1>
                  <h3 className="pl-3  mb-4 text-gray-500 text-sm">
                    Author Name
                  </h3>

                  <Link
                    href={`/pages/${"pol"}`}
                    className="px-3 block text-center py-2 my-3 rounded-md text-sm font-semibold text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
                  >
                    Read Now
                  </Link>
                  {/* </span> */}
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Side content */}
        <div className="w-3/12">
          <div className="bgColor rounded-md p-4">
            <p className="text-center text-white">
              Donate books and help us spread knowledge around the world
            </p>
            <Link
              href={"/pages/donateBook"}
              className="p-3 bg-white block my-4 rounded-sm text-center"
            >
              Give Today
            </Link>
          </div>
          <div className="mt-8 p-3 bg-white rounded-md">
            <h1 className="text-center">Book Details</h1>
            <span className="my-3 block h-[171px]">
              <Image
                src={"/book2.png"}
                alt="bannerImage"
                width={320}
                height={160}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
                priority={true}
              />
            </span>
            <h1 className="text-center text-[15px] font-semibold">
              Steal Like an Artist
            </h1>
            <h2 className="text-center text-sm text-gray-600">Austin Kleon</h2>
            <p className="my-2 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
              laudantium itaque non doloribus aliquam eveniet sed!
            </p>
            <Link
              href={`/pages/${"bookslug"}`}
              className="p-3 bgColor text-white block my-4 rounded-md  text-center"
            >
              Read Now
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
