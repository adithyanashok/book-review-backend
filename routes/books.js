import express from 'express'
import { createBook, deleteBook, fetchBooks, fetchSingleBook, updateBook } from '../controllers/books.js'
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


export default router