import NavBar from "@/app/components/Navbar";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <NavBar />
      <div className="w-full bg-white md:flex md:justify-between mt-10">
        <div className="w-full md:w-6/12 md:h-screen md:grid md:place-item-center border-red-600 border">
          <span className="block h-[400px] w-[320px] mx-auto my-auto">
            <Image
              src={"/book3.png"}
              alt="bannerImage"
              width={320}
              height={160}
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
              priority={true}
            />
          </span>
        </div>

        <div className="w-full border-red-600 border p-3">
          <h1 className="text-2xl font-semibold">Psychology of Money</h1>
          <div className="flex space-x-2 my-6">
            <Image
              src={"/Stephan.png"}
              alt="bannerImage"
              width={50}
              height={50}
              //   style={{ width: "100%", height: "100%", objectFit: "fill" }}
              priority={true}
            />
            <p className="text-gray-500 my-auto">Morgan Housel</p>
          </div>
          <p className="w-full md:w-10/12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus ad ex voluptatum incidunt, aspernatur blanditiis hic,
            debitis cupiditate totam cumque dolorem nihil. Ullam voluptas unde
            harum aperiam tenetur quae molestiae odio accusamus fugit delectus,
            eveniet error doloremque ab, quis minus dolor nostrum sapiente quos
            facilis similique saepe adipisci, porro nisi!
          </p>
          <div className="w-full md:w-10/12 my-8 border-red-800 border">
            <span className="w-full flex">
              <p className="w-6/12 font-semibold inline-block">Publisher</p>{" "}
              <p className="w-6/12 inline-block">Hariman House</p>
            </span>{" "}
            <span className="w-full flex">
              <p className="w-6/12 font-semibold inline-block">Book Category</p>{" "}
              <p className="w-6/12 inline-block">Finance</p>
            </span>
            <span className="w-full flex">
              <p className="w-6/12 font-semibold inline-block">
                Book Publication
              </p>{" "}
              <p className="w-6/12 inline-block">20659900058</p>
            </span>
            <span className="w-full flex">
              <p className="w-6/12 font-semibold inline-block">Language</p>{" "}
              <p className="w-6/12 inline-block">English</p>
            </span>
            <span className="w-full flex">
              <p className="w-6/12 font-semibold inline-block">ISBN</p>{" "}
              <p className="w-6/12 inline-block">9995659999499</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
