import { createContext, useContext, useReducer, useEffect } from "react";
import { billingReducer } from "../reducer";
import { useCart, useProducts } from ".";
import { getBillingDataHandler, getCartsDataFromId } from "../utils";

const defaultBillingContext = {
	totalMRP: 0,
	dicount: 100,
	totalAmount: 0,
};

export const BillingContext = createContext({ defaultBillingContext });

export const BillingProvider = ({ children }) => {
	const [billingState, billingDispatch] = useReducer(
		billingReducer,
		defaultBillingContext
	);
	const { cartState } = useCart();
	const { products } = useProducts();
	useEffect(() => {
		if (products?.length && cartState.itemsInCart?.length) {
			const cartData = getCartsDataFromId(cartState.itemsInCart, products);
			getBillingDataHandler(cartData, billingDispatch);
		} else if (!cartState?.itemsInCart?.length) {
			billingDispatch({ type: "RESET" });
		}
	}, [cartState, products]);

	return (
		<BillingContext.Provider value={{ billingState, billingDispatch }}>
			{children}
		</BillingContext.Provider>
	);
};

export const useBilling = () => useContext(BillingContext);
