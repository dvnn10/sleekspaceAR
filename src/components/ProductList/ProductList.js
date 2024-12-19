import React, { useState } from "react";
import productItems from "../../data/ProductItems";
import ModelViewer from "../ModelViewer/ModelViewer";
import "./ProductList.css";
import bedroomImg from "../../assets/bedroom.png";
import decorImg from "../../assets/floor-lamp.png";
import livingRoomImg from "../../assets/living-room.png";
import officeImg from "../../assets/working-man.png";
import parallaxImage from "../../assets/albero-furniture-bratislava-xRuHNSq5rD0-unsplash.jpg";

const categories = [
  { name: "Bedroom", image: bedroomImg },
  { name: "Decor", image: decorImg },
  { name: "Living Room", image: livingRoomImg },
  { name: "Office", image: officeImg },
];

const ProductList = ({ addToWishlist, wishlist, removeFromWishlist }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products for the selected category
  const filteredProducts = selectedCategory
    ? productItems.filter((item) => item.category === selectedCategory)
    : productItems;

  return (
    <div className="shop-page">
      {/* Parallax Banner Section */}
      <section
        className="parallax-banner"
        style={{
          backgroundImage: `url(${parallaxImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="parallax-text">
          {/* Increased font sizes */}
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold" }}>Up to 50% off</h1>
          <p style={{ fontSize: "2rem", marginTop: "0.5rem" }}>
            Hundreds of styles available
          </p>
        </div>
      </section>

      {/* Category Section */}
      <h2 className="shop-title">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className={`category-card ${
              selectedCategory === category.name ? "active-category" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>
              {productItems.filter((item) => item.category === category.name).length}{" "}
              PRODUCTS
            </p>
          </div>
        ))}
      </div>

      {/* Back to Categories Button and Selected Category Title */}
      {selectedCategory && (
        <div className="category-header">
          <div className="back-button-container">
            <button
              className="back-button"
              onClick={() => setSelectedCategory(null)}
            >
              ← Back to All Products
            </button>
          </div>
          <h2 className="selected-category-title">{selectedCategory} Products</h2>
        </div>
      )}

      {/* Product List */}
      <section className="product-list">
        {filteredProducts.map((item, idx) => (
          <ModelViewer
            key={idx}
            item={item}
            addToWishlist={addToWishlist}
            wishlist={wishlist}
            removeFromWishlist={removeFromWishlist}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductList;