function DonateBook() {
  return (
    <>
      <form className="w-full p-1 md:w-6/12 mx-auto md:p-2">
        <label htmlFor="Book Name" className="block">
          <span className="my-2 block text-gray-600 text-[15px]">
            Book Name
          </span>
          <input
            type="text"
            name="bookName"
            id=""
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter book name"
          />
        </label>
        <label htmlFor="ISBN" className="block">
          <span className="my-2 block text-gray-600 text-[15px]">ISBN</span>
          <input
            type="text"
            name="isbn"
            id=""
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter ISBN"
          />
        </label>
        <label htmlFor="Author Name" className="block">
          <span className="my-2 block text-gray-600 text-[15px]">
            Author Name
          </span>
          <input
            type="text"
            name="authorName"
            id=""
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter Author Name"
          />
        </label>
        {/* ##!! Change to */}

        <label htmlFor="Book Category" className="block">
          <span className="my-2 block text-gray-600 text-[15px]">
            Book Category
          </span>
          <input
            type="text"
            name="bookCategory"
            id=""
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter Book Category"
          />
        </label>
        <label htmlFor="Donor Name" className="block">
          <span className="my-2 block text-gray-600 text-[15px]">
            Donor Name
          </span>
          <input
            type="text"
            name="donorName"
            id=""
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter Donor Name"
          />
        </label>
        <textarea className="block">
          <span className="my-2 block text-gray-600 text-[15px]">
            Full Name
          </span>
          <input
            type="text"
            name="fullName"
            id=""
            //   onChange={handleChange}
            className="p-3 w-full block border border-gray-400 rounded-md placeholder:text-sm focus"
            placeholder="Enter full name"
          />
        </textarea>
      </form>
    </>
  );
}

export default DonateBook;
