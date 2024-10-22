import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import ReadBooks from '../components/ReadBooks'
import WishListBooks from '../components/WishListBooks'
import MainLayout from '../layouts/MainLayout'
import BookDetails from '../pages/BookDetails'
import Home from '../Pages/Home'
import ListedBooks from '../pages/ListedBooks'
import PagesRead from '../pages/PagesRead'


export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json'),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch('/books.json')
          },
          {
            path: 'wishlist-books',
            element: <WishListBooks></WishListBooks>,
            loader: () => fetch('/books.json'),
          }
        ]
      },
      {
        path: '/pages-read',
        element: <PagesRead></PagesRead>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/book-details/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json'),
      }
    ]
  }
])