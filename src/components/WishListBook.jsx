import PropTypes from "prop-types";
import { BsSim } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const WishListBook = ({ book }) => {
  const {
    bookId,
    book_name,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-5 lg:gap-10 border-2 p-5 rounded-lg">
      {/* <h1>Single Read Book: {book_name}</h1> */}
      <div className="bg-gray-100 px-5 py-5 rounded-lg lg:w-1/4 flex justify-center items-center">
        <img className="h-56 rounded-md" src={image} alt="" />
      </div>

      <div className="border-0 w-full md:w-3/4 flex flex-col gap-4 py-2">
        <h1 className="font-bold text-3xl">{book_name}</h1>
        <p className="font-semibold">By: {author}</p>

        <div className="flex flex-col lg:flex-row gap-5 text-base items-start lg:items-center">
          <div className="flex flex-row gap-3 items-center justify-center">
            <p className="font-bold">Tag</p>
            {tags?.map((tag, idx) => (
              <p
                key={idx}
                className="bg-[#23BE0A0D] text-[#23BE0A] rounded-lg font-bold px-2 py-1"
              >
                #{tag}
              </p>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center gap-1">
            <span>
              <IoLocationOutline className="text-xl" />
            </span>
            <p className="text-lg"> Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 font-normal justify-start items-start text-gray-500 md:justify-normal md:items-start">
          <div className="flex flex-row items-center justify-center gap-1">
            <span>
              <HiOutlineUsers />
            </span>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            <span>
              <BsSim />
            </span>
            <p>Page: {totalPages}</p>
          </div>
        </div>

        <div className="border-b-[1px] w-full"></div>

        <div className="flex flex-col lg:flex-row justify-start items-center md:items-start lg:items-center mt-1 gap-5">
          <div className="flex-1 flex flex-row gap-3 w-full justify-center items-center md:items-start md:justify-normal">
            <p className="bg-[#328EFF26] text-[#328EFF] rounded-full px-3 py-1 font-semibold">
              Category: {category}
            </p>
            <p className="bg-[#FFAC3326] text-[#FFAC33] rounded-full px-3 py-1 font-semibold">
              Rating: {rating}
            </p>
          </div>
          <div className="flex-1">
            <Link to={`/book-details/${bookId}`}>
              <button className="rounded-full bg-[#23BE0A] text-white border-2 border-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A] px-3 py-1 font-bold">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

WishListBook.propTypes = {
  book: PropTypes.object,
};

export default WishListBook;
