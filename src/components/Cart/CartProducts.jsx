import { useCart, useProducts, useWishlist } from "../../context";
import {
	MoveToWishlistBtn,
	AddedToWishlist,
	RemoveFromCart,
} from "../../components/ProductListing";
import { UpdateCartItem } from ".";
import { getCartsDataFromId, presentObjInArray } from "../../utils";
const CartProducts = () => {
	const { cartState } = useCart();
	const { wishlistState } = useWishlist();
	const { products } = useProducts();
	const cartProducts = getCartsDataFromId(cartState.itemsInCart, products);
	const itemCount = cartProducts.length;
	return (
		<>
			<li className="no-list p-5 pl-7 cart-items-count-container border-radius-5">
				<section className="flex-row flex-gap-1 align-center justify-content-space-between">
					<section className="flex-row flex-gap-1 align-center justify-content-start"></section>
					<section className="flex-row flex-gap-1 align-center justify-content-start">
						<h5 className="text-bold">{itemCount}</h5>
						<h5 className="text-bold">Items in cart</h5>
					</section>
				</section>
			</li>
			{itemCount ? (
				cartProducts.map(
					({ id, title, category, image, price, rating, qty }) => {
						return (
							<li key={`cart-${id}`} className="no-list">
								<article
									className={`basic-card flex-row align-center flex-wrap flex-gap-1 h6 cursor-pointer cart-cards card-shadow`}
								>
									<div className=" b-radius-2">
										<div className="flex-row p-2 b-radius-2 m-2">
											<div className="horizontal-card-img--container flex-row justify-content-center align-center flex-wrap b-radius-2">
												<img
													src={image}
													alt={title}
													className="horizontal-card-img b-radius-2 m-5"
												/>
											</div>
											<div className="horizontal-card-text--container flex-column flex-gap-1 p-5 b-radius-2 my-0 mx-5">
												<h2>{title}</h2>
												<p>{category}</p>
												<span className="rating flex-row align-center flex-gap-half pb-5">
													{[...Array(Math.ceil(rating.rate))].map(
														(item, index) => {
															return (
																<i
																	className="fas fa-star set"
																	key={`set-star-${index}`}
																></i>
															);
														}
													)}
													{[...Array(5 - Math.ceil(rating.rate))].map(
														(item, index) => {
															return (
																<i
																	className="fas fa-star unset"
																	key={`unset-star-${index}`}
																></i>
															);
														}
													)}{" "}
													<p className="secondary-font">
														| ({rating.count} reviews)
													</p>
												</span>
												<div className="pricing flex-row align-center flex-gap-half text-bold py-5 px-0">
													<h3>{price}</h3>
												</div>
												<div className="items-counter-container flex-row align-center flex-gap-half text-bold py-5 px-0">
													<span className="icon-btn cursor-pointer">
														{qty > 1 && (
															<UpdateCartItem
																productId={id}
																btnType="decrement"
															/>
														)}
													</span>
													<p className="icon-btn">{qty}</p>
													<span className="icon-btn cursor-pointer">
														<UpdateCartItem
															productId={id}
															btnType="increment"
														/>
													</span>
												</div>
												<div className="horizontal-card-btn-container flex-column justify-content-center flex-grow-1 w-100 flex-gap-1 text-bold py-5 px-0">
													<RemoveFromCart productId={id} />
													{!presentObjInArray(
														wishlistState.itemsInWishlist,
														id
													) ? (
														<MoveToWishlistBtn productId={id} />
													) : (
														<AddedToWishlist />
													)}
												</div>
											</div>
										</div>
									</div>
								</article>
							</li>
						);
					}
				)
			) : (
				<h4 className="text-center m-5 p-5">Cart is empty</h4>
			)}
		</>
	);
};

export { CartProducts };
