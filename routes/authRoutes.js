const express = require("express")
const router = express.Router()

const User = require("../models/User")
const bcrypt = require("bcryptjs")

router.post("/register", async (req,res)=>{

    const {name,email,password} = req.body

    const hashed = await bcrypt.hash(password,10)

    const user = new User({
        name,
        email,
        password:hashed
    })

    await user.save()

    res.json({message:"User Registered"})
})

router.post("/login", async (req,res)=>{

    const {email,password} = req.body

    const user = await User.findOne({email})

    if(!user) return res.json({msg:"User not found"})

    const valid = await bcrypt.compare(password,user.password)

    if(!valid) return res.json({msg:"Wrong password"})

    res.json({msg:"Login success"})
})

module.exports = router