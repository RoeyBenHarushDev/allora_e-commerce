"use client";

import Image from 'next/image'; // לוגו ותמונות
import Link from 'next/link'; // קישורים לתפריט
import { useState, useEffect } from "react"; // לשימוש ב-Testimonials דינמיים
import './home.css'; // חיבור עיצוב מותאם

const HomePage = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials from server
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials'); // URL לשרת ה-API שלך
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="home-container">
      {/* לוגו ממורכז */}
      <header className="header">
        <Image
          src="/Allora.png" // נתיב הלוגו מתיקיית public
          alt="Allora Logo"
          width={200}
          height={200}
        />
      </header>

      {/* תפריט צדדי */}
      <nav className="horizontal-menu">
        <div className='left-horizontal-menu'>
        <Link href="/products" className="menu-item">
          <Image
            src="/icons/products.png" // אייקון ל"מוצרים"
            alt="Products Icon"
            className="menu-icon"
            width={42}
            height={42}
          />
          Browse Products
        </Link>
        <Link href="/cart" className="menu-item">
          <Image
            src="/icons/cart.png" // אייקון ל"עגלת קניות"
            alt="Cart Icon"
            className="menu-icon"
            width={42}
            height={42}
          />
          Cart
        </Link>
        </div>
        <div className='right-horizontal-menu'>
        <Link href="/contact" className="menu-item">
          <Image
            src="/icons/contact.png" // אייקון ל"צור קשר"
            alt="Contact Icon"
            className="menu-icon"
            width={42}
            height={42}
          />
          Contact Us
        </Link>
        <Link href="/about" className="menu-item">
          <Image
            src="/icons/about.png" // אייקון ל"אודות"
            alt="About Icon"
            className="menu-icon"
            width={42}
            height={42}
          />
          About Us
        </Link>
        </div>
      </nav>

      {/* תוכן העמוד */}
      <div className="hero-banner">
        <h1>Discover Amazing Deals!</h1>
        <p>Shop now and save big on all your favorite products.</p>
        <button className="shop-now-button">Shop Now</button>
      </div>
      <div className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          <div className="category-item">
            <Image src="/icons/home.png" alt="Home" width={50} height={50} />
            <p>Home</p>
          </div>
          <div className="category-item">
            <Image src="/icons/electronics.png" alt="Electronics" width={50} height={50} />
            <p>Electronics</p>
          </div>
          <div className="category-item">
            <Image src="/icons/fashion.png" alt="Fashion" width={50} height={50} />
            <p>Fashion</p>
          </div>
          <div className="category-item">
            <Image src="/icons/toys.png" alt="Toys" width={50} height={50} />
            <p>Toys</p>
          </div>
          <div className="category-item">
            <Image src="/icons/beauty.png" alt="Beauty" width={50} height={50} />
            <p>Beauty</p>
          </div>
          <div className="category-item">
            <Image src="/icons/sports.png" alt="Sports" width={50} height={50} />
            <p>Sports</p>
          </div>
          <div className="category-item">
            <Image src="/icons/books.png" alt="Books" width={50} height={50} />
            <p>Books</p>
          </div>
          <div className="category-item">
            <Image src="/icons/automotive.png" alt="Automotive" width={50} height={50} />
            <p>Automotive</p>
          </div>
        </div>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          <div className="product-item">
            <Image src="/products/product1.jpg" alt="Product 1" width={150} height={150} />
            <p>Smartphone X</p>
            <p>$999</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-item">
            <Image src="/products/product2.jpg" alt="Product 2" width={150} height={150} />
            <p>Running Shoes</p>
            <p>$120</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-item">
            <Image src="/products/product3.jpg" alt="Product 3" width={150} height={150} />
            <p>Bluetooth Speaker</p>
            <p>$80</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-item">
            <Image src="/products/product4.jpg" alt="Product 4" width={150} height={150} />
            <p>Wrist Watch</p>
            <p>$250</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-item">
            <Image src="/products/product5.jpg" alt="Product 5" width={150} height={150} />
            <p>Gaming Headset</p>
            <p>$150</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-item">
            <Image src="/products/product6.jpg" alt="Product 6" width={150} height={150} />
            <p>Kitchen Mixer</p>
            <p>$300</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
