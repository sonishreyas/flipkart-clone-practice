export const billingReducer = (billingState, { type, payload }) => {
	switch (type) {
		case "TOTAL_MRP":
			return {
				...billingState,
				totalMRP: billingState.totalMRP + payload.totalMRP,
			};
		case "DISCOUNT":
			return {
				...billingState,
				discount: billingState.discount + payload.discount,
			};
		case "TOTAL_AMOUNT":
			return {
				...billingState,
				totalAmount: billingState.totalAmount + payload.totalAmount,
			};
		case "RESET":
			return { ...billingState, totalMRP: 0, discount: 0, totalAmount: 0 };
	}
};
