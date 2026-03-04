const express = require("express")
const router = express.Router()

const Chicken = require("../models/Chicken")

router.post("/add", async (req,res)=>{

    const chicken = new Chicken(req.body)

    await chicken.save()

    res.json(chicken)
})

router.get("/", async (req,res)=>{

    const chickens = await Chicken.find()

    res.json(chickens)
})

router.delete("/:id", async (req,res)=>{

    await Chicken.findByIdAndDelete(req.params.id)

    res.json({msg:"Deleted"})
})

module.exports = router