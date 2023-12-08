// src/FurnitureStore.js

import React from 'react';
import './Demo24.css';

const FurnitureStore = () => {
  return (
    <div className="Demo24-furniture-store">
      {/* Header */}
      <header className="Demo24-store-header">
        <h1>Demo24-Ikea Furniture Store</h1>
        <nav className="Demo24-store-nav">
          <ul>
            <li>Home</li>
            <li>Living Room</li>
            <li>Bedroom</li>
            <li>Kitchen</li>
            <li>Office</li>
            <li>Outdoor</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="Demo24-store-main">
        {/* ... (Previous product categories) */}

        {/* Additional Product Categories */}
        <div className="Demo24-product-category">
          <h2>Desks</h2>
          <div className="Demo24-product-item">Standing Desk</div>
          <div className="Demo24-product-item">Corner Desk</div>
          <div className="Demo24-product-item">Writing Desk</div>
        </div>

        <div className="Demo24-product-category">
          <h2>Decor</h2>
          <div className="Demo24-product-item">Wall Art</div>
          <div className="Demo24-product-item">Throw Pillows</div>
          <div className="Demo24-product-item">Candles</div>
        </div>

        <div className="Demo24-product-category">
          <h2>Entertainment Centers</h2>
          <div className="Demo24-product-item">TV Stand</div>
          <div className="Demo24-product-item">Media Console</div>
          <div className="Demo24-product-item">Bookshelf Entertainment Unit</div>
        </div>

        <div className="Demo24-product-category">
          <h2>Mattresses</h2>
          <div className="Demo24-product-item">Memory Foam Mattress</div>
          <div className="Demo24-product-item">Innerspring Mattress</div>
          <div className="Demo24-product-item">Latex Mattress</div>
        </div>

        <div className="Demo24-product-category">
          <h2>Bathroom Furniture</h2>
          <div className="Demo24-product-item">Vanity Cabinet</div>
          <div className="Demo24-product-item">Shelving Unit</div>
          <div className="Demo24-product-item">Bathroom Mirror</div>
        </div>

        {/* Additional Product Categories (New) */}
        <div className="Demo24-product-category">
          <h2>Outdoor Furniture</h2>
          <div className="Demo24-product-item">Patio Set</div>
          <div className="Demo24-product-item">Adirondack Chair</div>
          <div className="Demo24-product-item">Outdoor Dining Table</div>
        </div>

        <div className="Demo24-product-category">
          <h2>Storage Solutions</h2>
          <div className="Demo24-product-item">Storage Bins</div>
          <div className="Demo24-product-item">Shoe Rack</div>
          <div className="Demo24-product-item">Closet Organizer</div>
        </div>

        <div className="Demo24-product-category">
          <h2>Kids' Furniture</h2>
          <div className="Demo24-product-item">Bunk Bed</div>
          <div className="Demo24-product-item">Study Desk</div>
          <div className="Demo24-product-item">Toy Chest</div>
        </div>

        <div className="Demo24-product-category">
          <h2>Home Office</h2>
          <div className="Demo24-product-item">Executive Desk</div>
          <div className="Demo24-product-item">Ergonomic Chair</div>
          <div className="Demo24-product-item">File Cabinet</div>
        </div>

        <div className="Demo24-product-category">
          <h2>Lighting</h2>
          <div className="Demo24-product-item">Table Lamp</div>
          <div className="Demo24-product-item">Pendant Light</div>
          <div className="Demo24-product-item">Floor Lamp</div>
        </div>

        {/* Add more product categories and items */}
      </main>

      {/* Footer */}
      <footer className="Demo24-store-footer">
        <div className="Demo24-footer-info">
          <h3>Contact Information</h3>
          <p>Address: 123 Furniture Street, Cityville</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@furniturestore.com</p>
        </div>

        <div className="Demo24-social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="Demo24-copyright">
          <p>&copy; 2023 Demo24-Ikea Furniture Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FurnitureStore;
