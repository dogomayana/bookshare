"use client";

import NavBar from "@/app/components/Navbar";

function DonateBook() {
  return (
    <>
      <NavBar />
      <form className="w-full p-2 md:w-6/12 mx-auto md:p-2">
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
        <label htmlFor="bookReview " className="block">
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
      </form>
    </>
  );
}

export default DonateBook;
