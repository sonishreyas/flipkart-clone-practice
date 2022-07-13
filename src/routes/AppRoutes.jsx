import { Route, Routes } from "react-router-dom";
import { Cart, ProductListing, Wishlist } from "../pages";

export const AppRoutes = () => {
  <Routes>
    <Route path="/" element={<ProductListing />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/wishlist" element={<Wishlist />} />
  </Routes>;
};
