import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { saveBook } from "../utilities/localStorage";

const BookDetails = () => {
  const allBooks = useLoaderData();
  // const [allBooks, setAllBooks] = useState();
  const { bookId } = useParams();
  const [book, setBook] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const bookFound = allBooks?.find((book) => book.bookId === parseInt(bookId));
    setBook(bookFound);
  }, [])

  // useEffect( async ()  => {
  //   await fetch('/books.json')
  //    .then((response) => response.json())
  //    .then((data) => setAllBooks(data))
  // }, [])

  useEffect(() => {
    const bookFound = allBooks?.find((book) => book.bookId === parseInt(bookId));
    setBook(bookFound);
  }, []);

  const {
    book_name,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  if(navigation.state === 'loading') 
    return <Loader />;

  const handleReadBook = () => {
    saveBook('readBooks', parseInt(bookId));
  }

  const handleWishlistBook = () => {
    saveBook('wishListBooks', parseInt(bookId));
  }


  return (
    <div className="lg:ml-16 lg:mr-16 mx-auto flex flex-col lg:flex-row gap-5 mt-10 border-0 mb-20">
      <Helmet>
        <title>Book Store | Book Details</title>
      </Helmet>
      {/* <h1>Single Book Details: {bookId}</h1> */}
      {/* <p>{book.book_name}</p> */}

      <div className="flex-1 border-0 bg-gray-100 rounded-lg flex flex-col justify-center items-center max-h-max">
        <img className="h-full py-20" src={image} alt="" />

      </div>

      <div className="flex-1 px-5 lg:px-0">
        <div className="px-3 flex flex-col gap-4 py-2">
          <h1 className="font-bold text-3xl md:text-5xl">{book_name}</h1>
          <p className="font-bold text-lg">By: {author}</p>
          <p className="border-t-[1px] border-b-[1px] py-4 text-lg font-medium">
            {category}
          </p>
          <p className="text-lg text-justify py-1">
            <span className="font-bold">Review: </span> {review}
          </p>
          <div className="flex flex-row gap-3 text-base items-center border-b-[1px] pb-5">
            <p className="font-bold">Tag</p>
            {tags?.map((tag, idx) => (
              <p 
              key={idx}
              className="bg-[#23BE0A0D] text-[#23BE0A] rounded-lg font-bold px-2 py-1">
                #{tag}
              </p>
            ))}
          </div>
        </div>

        <table className="table table-row-group  ">
          <thead>
            <tr className="border-0">
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-base p-0">
            <tr className="border-0 p-0">
              <td className="text-gray-500">Number of Pages: </td>
              <td className="font-bold">{totalPages}</td>
            </tr>
            <tr className="border-0 p-0">
              <td className="text-gray-500">Publisher:</td>
              <td className="font-bold">{publisher}</td>
            </tr>
            <tr className="border-0 p-0">
              <td className="text-gray-500">Year of Publishing:</td>
              <td className="font-bold">{yearOfPublishing}</td>
            </tr>
            <tr className="border-0 p-0">
              <td className="text-gray-500">Rating:</td>
              <td className="font-bold">{rating}</td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-row justify-center items-center md:justify-normal md:items-start gap-5 mb-5 mt-10">
          <button 
          onClick={handleReadBook}
          className="btn bg-white  border-2 border-black  hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A] px-10 text-lg">
            Read
          </button>
          <button 
          onClick={handleWishlistBook}
          className="btn bg-[#59C6D2] text-white border-2 border-[#59C6D2] hover:bg-transparent hover:border-[#59C6D2] hover:text-[#59C6D2] px-10 text-lg">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
