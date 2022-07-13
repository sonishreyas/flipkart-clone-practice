import { useCart } from "../../context";

const UpdateCartItem = (props) => {
	const { cartDispatch } = useCart();

	const handleUpdateCart = (val) => {
		cartDispatch({
			type: "UPDATE_CART_ITEM",
			payload: {
				itemsInCart: {
					id: props.productId,
					qtyUpdate: val,
				},
			},
		});
	};
	return (
		<>
			{props.btnType === "decrement" && (
				<i
					className="far fa-minus-square cursor-pointer"
					onClick={() => handleUpdateCart(-1)}
				></i>
			)}
			{props.btnType === "increment" && (
				<i
					className="far fa-plus-square cursor-pointer"
					onClick={() => handleUpdateCart(1)}
				></i>
			)}
		</>
	);
};

export { UpdateCartItem };
