import Feedback from "../models/Feedback.js"

// Post a Feedback
export const postFeedback = async (req, res) => {
    try{
        const feedback = new Feedback({...req.body, userId:req.user.id})
        const savedFeedback = await feedback.save()
        res.status(200).json(savedFeedback)
    } catch (err){
        console.log(err)
    }
}
// Get feedbacks from database
export const getFeedback = async (req, res) => {
    try{
        const feedbacks = await Feedback.find().sort({createdAt: -1})
        res.status(200).json(feedbacks)
    }catch(err){
        console.log(err)
    }
}