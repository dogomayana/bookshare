"use client";

import NavBar from "@/app/components/Navbar";

function DonateBook() {
  return (
    <>
      <NavBar />
      <form className="w-full px-3 py-8 my-8 md:w-6/12 mx-auto bg-white">
        <label htmlFor="bookName" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">
            Book Name
          </span>
          <input
            type="text"
            name="bookName"
            id="bookName"
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter book name"
          />
        </label>
        <label htmlFor="isbn" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">ISBN</span>
          <input
            type="text"
            name="isbn"
            id="isbn"
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter ISBN"
          />
        </label>
        <label htmlFor="authorName" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">
            Author Name
          </span>
          <input
            type="text"
            name="authorName"
            id="authorName"
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter Author Name"
          />
        </label>
        {/* ##!! Change to */}

        <label htmlFor="bookCategory" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">
            Book Category
          </span>
          <input
            type="text"
            name="bookCategory"
            id="bookCategory"
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter Book Category"
          />
        </label>
        <label htmlFor="donorName" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">
            Donor Name
          </span>
          <input
            type="text"
            name="donorName"
            id="donorName"
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter Donor Name"
          />
        </label>
        <label htmlFor="bookReview" className="block">
          <span className="my-3 block text-gray-600 text-[15px]">
            Book review
          </span>
          <textarea
            id="bookReview"
            name="bookReview"
            required
            rows={4}
            cols={60}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter full name"
          />{" "}
        </label>
        <label htmlFor="bookImage" className="block my-5">
          <span className="my-2 text-sm after:content-['*'] after:ml-0.5 after:text-red-700 block after:text-lg">
            Book Cover
          </span>
          <input
            required
            type="file"
            id="bookImage"
            accept="image/*"
            // onChange={handleImgChange}
            className="w-full p-3 border border-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
          />
        </label>
        <label htmlFor="bookPDF" className="block my-5">
          <span className="my-2 text-sm after:content-['*'] after:ml-0.5 after:text-red-700 block after:text-lg">
            Upload ebook File (PDF)
          </span>
          <input
            required
            type="file"
            id="bookPDF"
            accept=".pdf"
            // onChange={handleImgChange}
            className="w-full p-3 border border-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
          />
        </label>

        <button
          className="p-3 bg-blue-100 text-blue-700 w-5/12 mx-auto my-8 block"
          type="submit"
        >
          submit
        </button>
        <h1 className="text-lg text-center my-4">Security Measures</h1>
        <p className="text-sm text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
          asperiores voluptatum quibusdam nisi assumenda recusandae numquam
          nulla. Adipisci, id nihil.
        </p>
      </form>
    </>
  );
}

export default DonateBook;
