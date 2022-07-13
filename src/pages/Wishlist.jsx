import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { WishlistContent } from "../components";

export const Wishlist = () => {
  useDocumentTitle("Wishlist");
  return <WishlistContent />;
};
