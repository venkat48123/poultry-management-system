const express = require("express")
const router = express.Router()

const Egg = require("../models/Egg")

router.post("/add", async (req,res)=>{

    const egg = new Egg(req.body)

    await egg.save()

    res.json(egg)
})

router.get("/", async (req,res)=>{

    const eggs = await Egg.find()

    res.json(eggs)
})

module.exports = router