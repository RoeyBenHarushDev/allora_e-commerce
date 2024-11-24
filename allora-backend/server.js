const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // שימוש במשתנה סביבה

// מודלים
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const authRoutes = require('./routes/auth');

// חיבור ל-MongoDB
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/allora_ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(  cors({
  origin: "http://localhost:3001", // כתובת ה-Frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json()); // תמיכה ב-JSON בבקשות

// ברירת מחדל - דף בית
app.get('/', (req, res) => {
  res.send('Welcome to Allora E-commerce Backend!');
});

// יצירת מוצר חדש
app.post('/add-product', async (req, res) => {
  const { name, price, description, category, stock } = req.body;
  const newProduct = new Product({ name, price, description, category, stock });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product', details: err.message });
  }
});

// ניתוב למסלולים
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/api/auth', authRoutes);

// טיפול בשגיאות כלליות
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong', details: err.message });
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
