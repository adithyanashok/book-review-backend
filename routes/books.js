import express from 'express'
import { createBook, deleteBook, fetchBooks, fetchProfileBooks, fetchSingleBook, search, updateBook } from '../controllers/books.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()
// Fetch all books from server
router.get('/', fetchBooks)
// Create a book

router.post('/', verifyToken, createBook)
// Update a book
router.put('/:id', verifyToken, updateBook)
// Fetch Single book from server
router.get('/find/:id', fetchSingleBook)
// Delete a Book from Server
router.delete('/:id', verifyToken, deleteBook)
// Search
router.get('/search', search)
router.get('/find/mybooks/:id', fetchProfileBooks)


export default router