const express = require('express');
const db = require('./db/connection');
const productRouter = require('./Routes/products');
const app = express();
app.use(express.json());


app.use('/api', productRouter)
app.listen(3000, () => {
    console.log("Hello from node js");
})