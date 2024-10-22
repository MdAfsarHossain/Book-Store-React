import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosArrowDown } from "react-icons/io";
import {
  NavLink,
  Outlet,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import Loader from "../components/Loader";
import { getBooks } from "../utilities/localStorage";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigation = useNavigation();

  const allBooks = useLoaderData();
  const readBooksId = getBooks("readBooks");

  const [readBooks, setReadBooks] = useState([]);
  const [sortType, setSortType] = useState("none");

  useEffect(() => {
    const readBooks = allBooks?.filter((book) =>
      readBooksId.includes(book.bookId)
    );
    setReadBooks(readBooks);

    if (sortType !== "none") {
      const sortedBooks = readBooks?.sort((a, b) => {
        if (sortType === "rating") {
          return b.rating - a.rating;
        } else if (sortType === "pages") {
          return b.totalPages - a.totalPages;
        } else if (sortType === "year") {
          return b.yearOfPublishing - a.yearOfPublishing;
        }
      });

      setReadBooks(sortedBooks);
    }
  }, [sortType]);

  if (!readBooksId.length) return <h2>No read books found.</h2>;

  if (navigation.state === "loading") return <Loader />;

  const sortingBooks = (name) => {
    readBooks?.sort((a, b) => {
      if (name === "rating") {
        return b.rating - a.rating;
      } else if (name === "pages") {
        return b.totalPages - a.totalPages;
      } else if (name === "year") {
        return b.yearOfPublishing - a.yearOfPublishing;
      }
    });
    setReadBooks(readBooks);
  };

  return (
    <div className="lg:ml-16 lg:mr-16 mx-auto">
      <Helmet>
        <title>Book Store | Listed Books</title>
      </Helmet>

      <h1 className="text-center py-7 bg-gray-100 font-bold text-4xl mt-10 rounded-lg mb-5">
        Books
      </h1>

      <div className="dropdown dropdown-bottom flex flex-col items-center justify-center mb-10">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-[#23BE0A] text-white border-2 border-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A] m-1"
        >
          Sort By
          <span>
            <IoIosArrowDown />
          </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-gray-300 rounded-box z-[1] w-52 p-2 shadow font-bold"
        >
          <li onClick={() => setSortType("rating")}>
            <a>Rating</a>
          </li>
          <li onClick={() => setSortType("pages")}>
            <a>Number of pages</a>
          </li>
          <li onClick={() => setSortType("year")}>
            <a>Publisher Year</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center overflow-x-auto overflow-y-hidden flex-nowrap">
        <NavLink
          to="/listed-books"
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b border-gray-400  ${
            tabIndex === 0
              ? `border border-b-0 rounded-t-lg text-lg font-semibold`
              : "border-b"
          } `}
        >
          <span className="">Read Books</span>
        </NavLink>

        <NavLink
          to="/listed-books/wishlist-books"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-gray-400 ${
            tabIndex === 1
              ? "border border-b-0 text-lg font-semibold rounded-t-lg rounded-"
              : "border-b"
          }`}
        >
          <span>Wishlist Books</span>
        </NavLink>

        <div className="w-full border-b-[1px] border-gray-400 flex flex-col justify-end items-end text-end -mb-[48px]"></div>
      </div>

      <Outlet context={readBooks} />
    </div>
  );
};

export default ListedBooks;
