import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCard from './BookCard';

const BooksContainer = () => {

    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        axios.get('/books.json')
        .then(data => setBooks(data.data))
    }, [])

    return (
        <div className='mb-20'>
            <h1 className='font-bold text-5xl md:text-4xl text-center mb-5'>Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:px-0">
                {
                    books?.map(book => 
                        <BookCard 
                        key={book.bookId} 
                        book={book} />
                    )
                }
            </div>
        </div>
    );
};

export default BooksContainer;