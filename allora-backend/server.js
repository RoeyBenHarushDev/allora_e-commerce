const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/allora_ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Welcome to Allora E-commerce Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/add-product', async (req, res) => {
  const newProduct = new Product({
    name: 'Product 1',
    price: 100,
    description: 'A great product',
    category: 'Category 1',
    stock: 10
  });

  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});