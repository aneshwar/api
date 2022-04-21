// require('dotenv').config()
const express = require('express')
const product = require('./api/product')
const app = express()
const PORT = process.env.PORT || 3000


app.use("/api/product", product);

app.listen(PORT, () => {
    console.log(`concted: ${PORT}`)
})
