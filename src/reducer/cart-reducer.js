import { removeObjFromArray, updateArray } from "../utils";

export const cartReducer = (state, { type, payload }) => {
	switch (type) {
		case "ADD_TO_CART":
			return {
				itemsInCart: [...state.itemsInCart, { ...payload.itemsInCart }],
			};
		case "REMOVE_FROM_CART":
			return {
				itemsInCart: removeObjFromArray(state.itemsInCart, payload.itemsInCart),
			};
		case "UPDATE_CART_ITEM":
			return {
				itemsInCart: updateArray(state.itemsInCart, payload.itemsInCart),
			};
		default:
			return state;
	}
};
