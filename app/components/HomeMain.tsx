"use client";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import React from "react";
import { createPortal } from "react-dom";
import { testimonials } from "@/app/testData";
import { Comic_Neue, Lobster } from "next/font/google";
const lobster = Comic_Neue({ weight: "400", subsets: ["latin"] });
export default function HomeMain() {
  const [swalShown, setSwalShown] = React.useState(false);

  const showSwal = () => {
    Swal.fire({
      didOpen: () => setSwalShown(true),
      didClose: () => setSwalShown(false),
    });
  };
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
      <div className="bg-white p-3 w-full my-14">
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
              <span className="block h-[300px]">
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
          <div className="md:flex md:w-11/12 w-full mx-auto justify-between p-3">
            <div className="block w-full md:w-5/12">
              <Image
                src={"/left.png"}
                alt="bannerImage"
                width={320}
                height={160}
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                priority={true}
              />
            </div>

            <div className="w-full md:w-5/12">
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

        {/* Book concept */}
        <section className="bgColor p-3 my-16">
          <h1 className="text-lg font-medium text-center text-white my-3">
            The 3 Concepts for a BookShare
          </h1>
          <div className="space-y-11 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
            <div className="p-3">
              <span className="block h-[100px] w-[100px] mx-auto">
                <Image
                  src={"/give.png"}
                  alt="bannerImage"
                  width={320}
                  height={160}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  priority={true}
                />
              </span>
              <h1 className="text-lg text-center my-4 text-white">
                Easy Book Donation
              </h1>

              <p className="text-center text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus eos blanditiis quibusdam molestiae soluta corrupti
                commodi nostrum vel recusandae at nemo, tempora, exercitationem
                maiores dolorum? Quos, porro impedit natus non excepturi
                delectus possimus minus eius incidunt magni blanditiis assumenda
                tempore?{" "}
              </p>
            </div>
            <div className="p-3 ">
              <span className="block h-[100px] w-[100px] mx-auto">
                <Image
                  src={"/book.png"}
                  alt="bannerImage"
                  width={320}
                  height={160}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  priority={true}
                />
              </span>
              <h1 className="text-lg text-center my-4 text-white">
                Vast Digital Collection
              </h1>

              <p className="text-center text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus eos blanditiis quibusdam molestiae soluta corrupti
                commodi nostrum vel recusandae at nemo, tempora, exercitationem
                maiores dolorum? Quos, porro impedit natus non excepturi
                delectus possimus minus eius incidunt magni blanditiis assumenda
                tempore?{" "}
              </p>
            </div>
            <div className="p-3">
              <span className="block h-[100px] w-[100px] mx-auto">
                <Image
                  src={"/light.png"}
                  alt="bannerImage"
                  width={320}
                  height={160}
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  priority={true}
                />
              </span>
              <h1 className="text-lg text-center my-4 text-white">
                User-Friendly Interface
              </h1>

              <p className="text-center text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus eos blanditiis quibusdam molestiae soluta corrupti
                commodi nostrum vel recusandae at nemo, tempora, exercitationem
                maiores dolorum? Quos, porro impedit natus non excepturi
                delectus possimus minus eius incidunt magni blanditiis assumenda
                tempore?{" "}
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full md:w-11/12 md:mx-auto p-3 mt-12">
          <h1 className="text-xl">Testimonial</h1>
          <div className="space-y-3 mt-8 w-full md:w-10/12 md:mx-auto md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            {testimonials.map((tm, index) => (
              <div className="p-3" key={index}>
                <span className="rounded-md block py-8 px-3 bgColor shadow-lg">
                  <p className={`${lobster.className} text-sm text-white`}>
                    {tm.quote}
                  </p>
                </span>
                <div className="w-full mt-8 flex">
                  <span className="block h-[100px] w-[100px] rounded-full">
                    <Image
                      src={tm.imageSrc}
                      alt={tm.testName}
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
                  <span className="block my-auto ml-4">
                    <p className={`${lobster.className} text-base`}>
                      {tm.testName}
                    </p>
                    <p className={`${lobster.className} text-sm text-gray-50`}>
                      {tm.occupation}
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subscription*/}
        <div className="bg-black md:flex md:justify-between w-full p-5 md:w-10/12 mx-auto my-10">
          <div className="my-4 md:my-0 md:w-3/12">
            <p className={`text-center md:text-start text-sm text-gray-100`}>
              Subscribe to Our Newsletter
            </p>
            <p className={`text-center md:text-start text-sm text-gray-100`}>
              Newest Books Updates
            </p>
          </div>
          <div className="md:flex md:space-x-4">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Email"
              className=" p-3 w-full md:w-[500px] placeholder:text-gray-400 placeholder:italic"
            />
            <button className="p-3 block mt-6 md:mt-0 mx-auto md:mx-0 md:text-start bgColor text-white rounded-sm">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
