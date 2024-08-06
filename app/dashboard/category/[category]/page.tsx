import CatNav from "@/app/components/CatNav";
import NavBar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
export default function Page({ params }: { params: { slug: string } }) {
  const categories = ["finance", "tech", "travel", "education"];
  const booksCatt = [
    "/book3.png",
    "/book4.png",
    "/book_1.png",
    "/book2.png",
    "/book4.png",
    "/book4.png",
    "/book2.png",
    "/book3.png",
    "/book_1.png",
    "/book2.png",
  ];
  const pol = "lop";

  return (
    <>
      <CatNav />
      <div className="bg-white w-full rounded-md border border-red-700">
        <nav className=" w-full p-2 flex flex-wrap space-x-5 justify-center">
          <span className="p-3 rounded-md capitalize bgColor text-white border border-blue-700">
            All
          </span>
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={`/dashboard/category/${cat}`}
              className="px-5 py-3 rounded-md capitalize border border-blue-700"
            >
              {cat}
            </Link>
          ))}
        </nav>

        <div className="w-11/12 my-8 mx-auto p-3 grid grid-cols-2 md:grid-cols-5 gap-5 place-content-center">
          {booksCatt.map((book, index) => (
            <div key={index} className="block">
              <Link href={`/pages/${"pol"}`}>
                <span className="block">
                  <Image
                    src={book}
                    alt="bannerImage"
                    width={171}
                    height={170}
                    // style={{
                    //   width: "100%",
                    //   height: "100%",
                    //   objectFit: "fill",
                    // }}
                    priority={true}
                  />
                </span>
                {/* <span className="pl-3 block"> */}
                <h1 className="pl-3 text-ellipsis text-sm font-medium">
                  What i learned from trees
                </h1>
              </Link>

              <h3 className="pl-3 mb-4 text-gray-500 text-sm">Author Name</h3>

              {/* </span> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
