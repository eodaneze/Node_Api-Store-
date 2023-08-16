const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.MONGO_URL

mongoose.connect(url)
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));