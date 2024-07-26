import Link from "next/link";
import Image from "next/image";

export default function HomeMain() {
  const booksCat = ["/book3.png", "/book4.png", "/book_1.png", "/book2.png"];
  const booksCatt = [
    "/book3.png",
    "/book4.png",
    "/book_1.png",
    "/book2.png",
    "/book1.png",
  ];
  return (
    <>
      <div className="bg-white p-3 w-full my-8">
        <h1 className="text-blue-500 my-8 text-center text-lg font-medium">
          Categories
        </h1>
        <div className="w-full my-8 md:w-10/12 mx-auto bg-[#f3f4f6] p-3 grid grid-cols-2 md:grid-cols-4 place-content-center">
          {booksCat.map((book, index) => (
            <span key={index} className="block p-3">
              <Image
                src={book}
                alt="bannerImage"
                width={320}
                height={160}
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                priority={true}
              />
              <p className="text-center">fiction</p>
            </span>
          ))}
        </div>

        <h1 className="text-blue-500 my-16 text-center text-lg font-medium">
          Featured
        </h1>

        <div className="w-full my-8 md:w-11/12 mx-auto bg-[#f3f4f6] p-3 grid grid-cols-2 md:grid-cols-5 gap-5 place-content-center">
          {booksCatt.map((book, index) => (
            <div key={index} className="block">
              <span className="block h-[200px]">
                <Image
                  src={book}
                  alt="bannerImage"
                  width={320}
                  height={160}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  priority={true}
                />
              </span>
              {/* <span className="pl-3 block"> */}
              <h1 className="pl-3 text-ellipsis text-[15px]">
                What i learned from trees
              </h1>
              <h3 className="pl-3  mb-4 text-gray-500 text-sm">Author Name</h3>
              <Link
                href={"/"}
                className="px-3 block text-center py-2 my-3 rounded-md text-sm font-semibold text-[#0095eb] bg-blue-200 hover:text-gray-100 hover:bg-[#0095eb]"
              >
                Read Now
              </Link>
              {/* </span> */}
            </div>
          ))}
        </div>

        <article className="mt-16">
          <h1 className="text-center my-8 text-lg">About BookShare</h1>
          <div className="md:flex md:w-11/12 w-full mx-auto justify-between p-3 border-pink-700 border">
            <div className="block w-full md:w-5/12 border-pink-700 border">
              <Image
                src={"/left.png"}
                alt="bannerImage"
                width={320}
                height={160}
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                priority={true}
              />
            </div>

            <div className="border-pink-700 border w-full md:w-5/12">
              <p className="text-sm p-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
                in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                vitae consequatur quam cupiditate delectus et facere ea debitis
                totam quis tempore, odio quo officiis nostrum, at commodi
                facilis tenetur dolorum quibusdam? Nostrum ad corrupti tempore
                rerum earum impedit pariatur sunt saepe? Accusamus esse
                doloremque veritatis, consequatur blanditiis mollitia, itaque
                officia omnis sequi, laborum aliquid perferendis. Illo incidunt
                dolores assumenda autem dolore excepturi rem quam tempora minus.
                Ipsam, animi maxime similique quae corporis numquam repellendus
                expedita provident cumque fuga officiis. Consequatur, reiciendis
                necessitatibus hic perspiciatis ullam, totam deserunt enim error
                tempora magni sit ea ipsa eum quibusdam quas autem dolorum
                corporis.
              </p>
              <Link
                href={"#"}
                className="px-3 w-6/12 block mx-auto text-center py-2 my-3 rounded-md text-sm font-semibold text-blue-200 bg-[#0095eb] hover:text-gray-100 hover:bg-[#0095eb]"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </article>

        <section className="bg-[#0095eb] p-3 my-16">
          <h1 className="text-lg font-medium text-center text-gray-100">
            The 3 Concepts for a BookShare
          </h1>
        </section>
      </div>
    </>
  );
}
