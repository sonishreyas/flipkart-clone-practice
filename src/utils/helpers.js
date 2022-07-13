export const presentInArray = (arr, element) =>
	arr.find((item) => item === element) === undefined ? false : true;

export const presentObjInArray = (arr, element) =>
	arr.find((item) => item.id === element) === undefined ? false : true;

export const removeFromArray = (arr, element) =>
	arr.filter((item) => item !== element);

export const removeObjFromArray = (arr, element) =>
	arr.filter((item) => item.id !== element.id);
