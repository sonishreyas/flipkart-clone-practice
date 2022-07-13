import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer";

const defaultCartState = {
	itemsInCart: [],
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);
	return (
		<CartContext.Provider value={{ cartState, cartDispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
