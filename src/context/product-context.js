import { createContext, useContext } from "react";
import { useGetProducts } from "../hooks";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const products = useGetProducts();
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
