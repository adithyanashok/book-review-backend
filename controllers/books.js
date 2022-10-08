import Books from "../models/Books.js"

export const createBook = async (req, res) => {
    console.log(req.user)
    const newBook = new Books({ ...req.body, userId: req.user.id})
    try{
        const savedBook = await newBook.save()
        res.status(200).json(savedBook)
    } catch(err) {
        console.log(err)
    }
}
export const fetchBooks = async (req, res) => {
    try{
        const allBooks = await Books.aggregate([{ $sample: { size: 100 } }]);
        res.status(200).json(allBooks)
    } catch(err) {
        console.log(err)
    }
}

// Update a book
export const updateBook = async (req, res) => {
    console.log("userid", req.user.id)
    try{
        // Find the book to edit
        const book = await Books.findById(req.params.id)
        if(!book) return res.status(404).json('book not found')
        // check userId and videoId
        if(req.user.id === book.userId){
            const updatedBook = await Books.findByIdAndUpdate(req.params.id, {
                $set:{
                    bookImg: req.body.BookImg,
                    bookTitle: req.body.bookTitle,
                    authorName: req.body.authorName,
                    rating: req.body.rating,
                    bookLink: req.body.bookLink,
                    contentName: req.body.contentName,
                    content:req.body.content
                }
            }, 
                {new: true}
            )
            res.status(200).json(updatedBook)
        } else{
            res.status(402).json('you are not allowed to do that')
        }
    }catch(err){
        console.log(err)
    }
}
// Delete a book
export const deleteBook = async (req, res) => {
    try{
        // Find the book to delete
        const book = await Books.findById(req.params.id)
        if(!book) return res.status(404).json('book not found')
        // check userId and videoId
        if(req.user.id === book.userId){
            await Books.findByIdAndDelete(req.params.id)
            res.status(200).json("deleted")
        } else{
            res.status(402).json('you are not allowed to do that')
        }
    }catch(err){
        console.log(err)
    }
}

// Fetch Single book

export const fetchSingleBook = async (req ,res) => {
    try{
        const book = await Books.findById(req.params.id)
        res.status(200).json(book)
    }catch(err){
        console.log(err)
    }
}
export const search = async (req, res) => {
    const query = req.query.q
    try{
        const book = await Books.find({
            bookTitle: { $regex: query, $options: 'i' }
        }).limit(40)
        res.status(200).json(book)
    }catch(err){
        console.log(err)
    }
}
export const fetchProfileBooks = async (req, res) => {
    try{
        const allBooks = await Books.find({userId: req.params.id})
        res.status(200).json(allBooks)
    } catch(err) {
        console.log(err)
    }
}