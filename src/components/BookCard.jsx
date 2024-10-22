import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { bookId, book_name, author, image, rating, category, tags } = book;

  return (
    <Link
      to={`/book-details/${bookId}`}
      className="flex flex-col gap-2 border-2 justify-start items-start p-5 rounded-xl"
    >
      <div className="bg-gray-300 w-full flex flex-col items-center py-10 justify-center rounded-xl mb-2">
        <img className="h-52" src={image} alt="" />
      </div>

      <div className="flex flex-row gap-3 text-base">
        {tags?.map((tag, idx) => (
          <p
            key={idx}
            className="bg-[#23BE0A0D] text-[#23BE0A] rounded-lg font-bold px-2 py-1"
          >
            {tag}
          </p>
        ))}
      </div>

      <h1 className="font-bold text-xl">{book_name}</h1>
      <p className="font-semibold border-b-2 w-full border-dashed pb-3">
        By: {author}
      </p>

      <div className="flex flex-row justify-between items-center w-full font-semibold text-lg">
        <p className="text-base">{category}</p>
        <div className="flex flex-row justify-center gap-1 items-center">
          <p className="text-base">{rating}</p>
          <span>
            <CiStar className="text-xl" />
          </span>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
