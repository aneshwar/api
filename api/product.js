const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded())

// app.use(bodyParser.json())


mongoose.connect("mongodb://localhost:27017/newsb", {useNewUrlParser:true});

const studentSchema = new mongoose.Schema({
    name: String,
   age: Number,
   subject: String,
})
const Student = new mongoose.model('photos', studentSchema);
const Studentapi = new mongoose.model('posts', studentSchema);
router.get('/', async (req,res) => {
    try {
         Student.find({}, (err, docs)=> {
       res.json(docs)
   })
    } catch (error) {
        console.error(error)
        return res.status(500).send("server error")
    }
   

})
// router.get("/", async (req, res) => {
//     try {
//         res.json({
//             status: 200,
//             massage: "get darta has successfully"
//         });

//     } catch (error) {
//         console.error(error)
//         return res.status(500).send("server error")
//     }
// })
module.exports = router;