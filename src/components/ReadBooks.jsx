import { useLoaderData, useOutletContext } from "react-router-dom";
import { getBooks } from "../utilities/localStorage";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
  const allBooks = useLoaderData();
  const readBooksId = getBooks("readBooks");
  const readBooks = useOutletContext();
  // console.log(readBooks);

//   const [readBooks, setReadBooks] = useState([]);

//   useEffect(() => {
//     const readBooks = allBooks.filter((book) =>
//       readBooksId.includes(book.bookId)
//     );
//     setReadBooks(readBooks);
//   }, []);

  if (!readBooksId.length) return <h2>No read books found.</h2>;

//   readBooks?.sort((a, b) => {
    // return b.rating - a.rating;
    // return b.totalPages - a.totalPages;
    // return a.yearOfPublishing - b.yearOfPublishing;
    // return b.yearOfPublishing - a.yearOfPublishing;
//   });

  // const unreadBooks = allBooks.filter(book =>!readBooks.includes(book.bookId));
  // if(!unreadBooks.length) return <h2>No unread books found.</h2>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 mt-5 mb-16 px-5 lg:px-0">
        {readBooks?.map((readBook, idx) => (
          <ReadBook key={idx} book={readBook}></ReadBook>
        ))}
      </div>
    </div>
  );
};

export default ReadBooks;
