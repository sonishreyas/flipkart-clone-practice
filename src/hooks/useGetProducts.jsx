import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return products;
};
