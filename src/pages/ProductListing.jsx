import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { ProductListingContent } from "../components";

export const ProductListing = () => {
  useDocumentTitle("Products");
  return <ProductListingContent />;
};
