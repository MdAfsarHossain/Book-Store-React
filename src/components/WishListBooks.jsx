import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooks } from "../utilities/localStorage";
import WishListBook from "./WishListBook";

const WishListBooks = () => {
    const allBooks = useLoaderData();
    const wishlistBooksId = getBooks('wishListBooks');

    const [wishListBooks, setWishListBooks] = useState([]);
    
    useEffect(() => {
        const wishListBooksFilter = allBooks?.filter(book => wishlistBooksId.includes(book.bookId));
        setWishListBooks(wishListBooksFilter);
    }, [])

    if (!wishlistBooksId) return <p>No books in your wishlist.</p>;

    wishListBooks?.sort((a, b) => {
        return b.rating - a.rating;
        // return b.totalPages - a.totalPages;
        // return a.yearOfPublishing - b.yearOfPublishing;
        // return b.yearOfPublishing - a.yearOfPublishing;
      });

    return (
        <div>
            {/* <h1>All Wishlist Books: {allBooks.length}</h1> */}
            {/* <h1>Wishlist Books: {wishlistBooksId.length}</h1> */}

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mt-5 mb-16 px-5 lg:px-0">
                {
                    wishListBooks?.map((book, idx) => 
                        <WishListBook
                        key={idx}
                        book={book}
                        ></WishListBook>
                    )
                }
            </div>
        </div>
    );
};

export default WishListBooks;