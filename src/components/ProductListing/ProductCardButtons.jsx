import { Link } from "react-router-dom";
import { useCart, useWishlist } from "../../context";

export const GoToCartBtn = () => {
	return (
		<Link
			to={"/cart"}
			className="no-link cursor-pointer primary-btn p-0 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1"
		>
			<span className="cart-icon">
				<i className="fas fa-shopping-cart"></i>
			</span>
			<p className="cart-text">Go to Cart</p>
		</Link>
	);
};
export const AddToCartBtn = (props) => {
	const { cartDispatch } = useCart();
	const handleAddToCart = () => {
		cartDispatch({
			type: "ADD_TO_CART",
			payload: {
				itemsInCart: {
					qty: 1,
					id: props.productId,
				},
			},
		});
	};
	return (
		<button
			onClick={handleAddToCart}
			className="cursor-pointer primary-btn p-0 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1"
		>
			<span className="cart-icon">
				<i className="fas fa-shopping-cart"></i>
			</span>
			<p className="cart-text">Add to Cart</p>
		</button>
	);
};

export const AddToWishlistBtn = (props) => {
	const { wishlistDispatch } = useWishlist();
	const handleAddToWishlist = () => {
		wishlistDispatch({
			type: "ADD_TO_WISHLIST",
			payload: {
				itemsInWishlist: props.productId,
			},
		});
	};
	return (
		<button
			onClick={handleAddToWishlist}
			className="outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1 cursor-pointer"
		>
			<span className="wishlist-icon">
				<i className="far fa-heart"></i>
			</span>
			<p className="wishlist-text">Add to wishlist</p>
		</button>
	);
};

export const RemoveFromWishlistBtn = (props) => {
	const { wishlistDispatch } = useWishlist();
	const handleRemoveFromWishlist = () => {
		wishlistDispatch({
			type: "REMOVE_FROM_WISHLIST",
			payload: {
				itemsInWishlist: props.productId,
			},
		});
	};
	return (
		<button
			onClick={handleRemoveFromWishlist}
			className="outline-btn p-0 b-radius-2 text-bold card-wishlist m-5 flex-row justify-content-center align-center flex-gap-1 cursor-pointer"
		>
			<span className="wishlist-icon">
				<i className="fa-solid fa-heart"></i>
			</span>
			<p className="wishlist-text">Added to wishlist</p>
		</button>
	);
};

export const MoveToWishlistBtn = (props) => {
	const { wishlistDispatch } = useWishlist();
	const { cartDispatch } = useCart();
	const handleMoveToWishlist = () => {
		wishlistDispatch({
			type: "ADD_TO_WISHLIST",
			payload: {
				itemsInWishlist: props.productId,
			},
		});
		cartDispatch({
			type: "REMOVE_FROM_CART",
			payload: {
				itemsInCart: props.productId,
			},
		});
	};
	return (
		<button
			onClick={handleMoveToWishlist}
			className="p-5 my-5 mb-10 outline-btn b-radius-2 text-bold horizontal-card-btn-secondary flex-row justify-content-center align-center flex-gap-1 flex-grow-1 w-100 text-bold cursor-pointer"
		>
			<span className="wishlist-icon">
				<i className="far fa-heart"></i>
			</span>
			<p className="wishlist-text">Move to wishlist</p>
		</button>
	);
};
