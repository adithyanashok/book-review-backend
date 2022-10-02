import Comments from "../models/Comments.js"


// Create a comment
export const postComment = async (req, res) => {
    try{
        const newComment = new Comments({...req.body, userId: req.user.id})
        const savedComment = await newComment.save()
        res.status(200).json(savedComment)
    } catch (err) {
        console.log(err)
    }
}

// Get comments
export const getComments = async (req, res) => {
    try{
        const comment = await Comments.find({bookId: req.params.bookId}).sort({createdAt: -1})
        res.status(200).json(comment)
    } catch(err){
        console.log(err)
    }
}
