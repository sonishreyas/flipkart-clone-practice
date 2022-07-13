export const presentInArray = (arr, element) =>
	arr.find((item) => item === element) === undefined ? false : true;

export const presentObjInArray = (arr, element) =>
	arr.find((item) => item.id === element) === undefined ? false : true;

export const removeFromArray = (arr, element) =>
	arr.filter((item) => item !== element);

export const removeObjFromArray = (arr, element) =>
	arr.filter((item) => item.id !== element);

export const updateArray = (arr, element) =>
	arr.reduce(
		(prev, curr) =>
			curr.id === element.id
				? [...prev, { ...curr, qty: curr.qty + element.qtyUpdate }]
				: [...prev, { ...curr }],
		[]
	);

export const getCartsDataFromId = (items, data) =>
	items.map((item) => ({
		...data.find((product) => product._id === item._id),
		...item,
	}));

export const getBillingDataHandler = (cartData, billingDispatch) => {
	billingDispatch({ type: "RESET" });
	cartData.map((item) => {
		billingDispatch({
			type: "TOTAL_MRP",
			payload: { totalMRP: item.price * item.qty + 100 },
		});
		billingDispatch({
			type: "DISCOUNT",
			payload: { discount: 100 },
		});
		billingDispatch({
			type: "TOTAL_AMOUNT",
			payload: {
				totalAmount: item.price * item.qty,
			},
		});
	});
};
