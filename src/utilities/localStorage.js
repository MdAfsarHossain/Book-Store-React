import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getBooks = (name) => {
    const storedBooks = localStorage.getItem(name);
    if(storedBooks) {
        return JSON.parse(storedBooks)
    }
    return [];
}

const saveBook = (name, bookId) => {
    const storedBooks = getBooks(name);
    const exists = storedBooks.find(id => id === bookId);
    if(!exists) {
        if(name === 'wishListBooks') {
            const readBooks = getBooks('readBooks');
            if(readBooks.includes(bookId)) {
                return toast.error('You already read this book!!');
            }
        }

        storedBooks.push(bookId);
        localStorage.setItem(name, JSON.stringify(storedBooks));
        if(name === 'wishListBooks') {
            return toast.success('This book wishlist successfully!');
        } else {
            return toast.success('This book read successfully!');
        }
    }
    if(name === 'wishListBooks') {
        return toast.error('You already wishlist this book!');
    } else {
        return toast.error('You already read this book!!');
    }
}

const deleteBook = (id) => {

}

export { deleteBook, getBooks, saveBook };

