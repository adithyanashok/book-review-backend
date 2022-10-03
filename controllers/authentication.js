import bcrypt from 'bcryptjs'
import Users from '../models/Users.js'
import jwt from 'jsonwebtoken'
export const createAccount = async (req, res) => {
    try{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new Users({...req.body, password: hash})
        const savedUser = await newUser.save()

        const token = jwt.sign({id: savedUser._id}, process.env.JWT_SECRET)
        const {password, ...others} = savedUser._doc

        res.cookie("access_token", token, {
            httpOnly: false,
            maxAge: 360000 + new Data()

        }).status(200).json(others)
    }catch(err) {
        console.log(err)
    }
}

export const signIn = async (req, res) => {
    try{
        // Find user with email 
        const user = await Users.findOne({email: req.body.email})
        // if user not found throw a error
        if(!user) return res.status(404).json('User not Found')
        // check the password
        const checkPassword = await bcrypt.compare(req.body.password, user.password)
        // if the password is incorrect throw err
        if(!checkPassword) return res.status(400).json('Wrong Password')

        // Create a jwt token

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        const {password, ...others} = user._doc

        res.cookie("access_token", token, {
            httpOnly: true,
            maxAge: 360000 + new Data(),
            
        }).status(200).json(others)

    } catch(err){
        console.log(err)
    }
}