import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Feedback from "./components/Feedback/Feedback";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/Signin";
import WishList from "./components/Wishlist/WishList";
import VRViewer from "./components/VRViewer/VRViewer";
import ShippingAddress from "./components/ShippingAddress/ShippingAddress";
import Payment from "./components/Payment/Payment";
import ThankYou from "./components/Thankyou/ThankYou";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState("");

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User logged in:", currentUser);
        setUser(currentUser);
      } else {
        console.log("No user logged in.");
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const handleRemoveItem = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  // Function to save address
  const handleSaveAddress = (newAddress) => {
    setAddress(newAddress);
  };

  // Function to handle place order
  const handlePlaceOrder = async (address, totalPrice) => {
    try {
      console.log("Placing order...");
      console.log(`Shipping Address: ${address}`);
      console.log(`Total Price: ₹${totalPrice}`);
      // Redirect to the Thank You page after successful order
      window.location.href = "/thank-you";
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      console.warn("User is not authenticated. Redirecting to /sign-in.");
      return <Navigate to="/sign-in" />;
    }
    return children;
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <ProductList
                addToWishlist={addToWishlist}
                wishlist={wishlist}
                removeFromWishlist={handleRemoveItem}
              />
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />

          {/* Protected Routes */}
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <WishList
                  wishlist={wishlist}
                  onRemoveItem={handleRemoveItem}
                  onPlaceOrder={handlePlaceOrder}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vr-viewer"
            element={
              <ProtectedRoute>
                <VRViewer wishlist={wishlist} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shipping-address"
            element={
              <ProtectedRoute>
                <ShippingAddress
                  onSaveAddress={handleSaveAddress}
                  wishlist={wishlist}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment wishlist={wishlist} address={address} />
              </ProtectedRoute>
            }
          />
          {/* Make thank-you accessible without authentication */}
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
