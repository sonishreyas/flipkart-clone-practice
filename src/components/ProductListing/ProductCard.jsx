import { useCart, useProducts, useWishlist } from "../../context";
import { presentInArray, presentObjInArray } from "../../utils";
import {
	AddToCartBtn,
	AddToWishlistBtn,
	GoToCartBtn,
	RemoveFromWishlistBtn,
} from "./ProductCardButtons";

export const ProductCard = () => {
	const { products } = useProducts();
	const { wishlistState } = useWishlist();
	const { cartState } = useCart();
	return (
		<article className="flex-column justify-content-start align-center w-100 m-10">
			<div className="products-container flex-row align-center flex-gap-2 flex-wrap">
				{products.length !== 0 ? (
					products.map(({ id, title, category, image, price, rating }) => (
						<article
							key={id}
							className="no-link-decoration card vertical card-shadow p-5 b-radius-2"
						>
							<article className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2">
								<img
									src={image}
									alt={`${title}`}
									className="card-image b-radius-2 mt-2"
								/>
							</article>
							{presentInArray(wishlistState.itemsInWishlist, id) ? (
								<RemoveFromWishlistBtn productId={id} />
							) : (
								<AddToWishlistBtn productId={id} />
							)}
							<section className="card-content p-5 pb-0">
								<h4 className="card-title">{title}</h4>
								<p className="card-category my-3">{category}</p>
								<span className="card-price-tag mt-3 flex-row align-center flex-gap-half text-bold">
									<p className="p-0 m-0">Rs. {price}</p>
								</span>
							</section>
							<section className="card-tag m-2 px-1 py-0 b-radius-1">
								<span className="card-review m-3 p-0 text-bold flex-row align-center flex-gap-half">
									<p>{rating.rate}</p>
									<span className="review-star">
										<i className="fas fa-star"></i>
									</span>
								</span>
							</section>
							{presentObjInArray(cartState.itemsInCart, id) ? (
								<GoToCartBtn />
							) : (
								<AddToCartBtn productId={id} />
							)}
						</article>
					))
				) : (
					<h4>No Products Found</h4>
				)}
			</div>
		</article>
	);
};
