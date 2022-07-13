import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { CartContent } from "../components";

export const Cart = () => {
  useDocumentTitle("Cart");
  return <CartContent />;
};
