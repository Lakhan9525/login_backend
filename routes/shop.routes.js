const {Router} = require("express")
const ShopModel = require("../models/Shop")
const shopRouter = Router();

shopRouter.get("/:userId/list", async (req, res) => {
    const userId = req.params.userId
    const tasks = await ShopModel.find({userId})
    res.send(tasks)
})

shopRouter.post("/:userId/list", async (req, res) => {
    const userId = req.params.userId
    console.log('userId:', userId)
    let date = new Date()
    let shopData = { ...req.body, "date": `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`, "time":`${date.getHours()}H:${date.getMinutes()}M:${date.getSeconds()}S` }
    console.log('shopData:', shopData)
    let payload = {
        ...shopData,
        userId
    }
    const task = await new ShopModel(payload)
    task.save((err, success) => {
        if(err){
            return res.status(500).send({message : "something went wrong"})
        }
        return res.status(201).send(success)
    })
})

module.exports = shopRouter;

