import { removeFromArray } from "../utils";

export const wishlistReducer = (state, { type, payload }) => {
	switch (type) {
		case "ADD_TO_WISHLIST":
			return {
				itemsInWishlist: [...state.itemsInWishlist, payload.itemsInWishlist],
			};
		case "REMOVE_FROM_WISHLIST":
			return {
				itemsInWishlist: removeFromArray(
					state.itemsInWishlist,
					payload.itemsInWishlist
				),
			};
		default:
			return state;
	}
};
