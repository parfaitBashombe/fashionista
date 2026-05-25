import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CartDrawer from "./components/cart-drawer";
import Toasts from "./components/toast";
import ScrollToTop from "./components/scroll-to-top";

import Home from "./pages/home";
import CollectionsPage from "./pages/colletions";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import CollectionPage from "./pages/collection";
import NotFoundPage from "./pages/not-found";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Navbar onCartOpen={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Toasts />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collections/:id" element={<CollectionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
