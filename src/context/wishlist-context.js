import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

const defaultWishlistState = {
	itemsInWishlist: [],
};

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
	const [wishlistState, wishlistDispatch] = useReducer(
		wishlistReducer,
		defaultWishlistState
	);
	return (
		<WishlistContext.Provider
			value={{
				wishlistState,
				wishlistDispatch,
			}}
		>
			{children}
		</WishlistContext.Provider>
	);
};

export const useWishlist = () => useContext(WishlistContext);
