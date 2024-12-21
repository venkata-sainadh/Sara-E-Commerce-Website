const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
});

const Product = mongoose.model('Product', productSchema);

// API Route to Get Products
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Server Listening
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
