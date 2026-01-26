import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [item, setItem] = useState(()  => {
		const itemValue = localStorage.getItem(key);

		if(itemValue) {
			return JSON.parse(itemValue);
		} 

		localStorage.setItem(key, JSON.stringify(initialValue));
		return initialValue;
	});

	const saveItem = (value) => {
		localStorage.setItem(key, JSON.stringify(value));
		setItem(value);
	}

	return { item, saveItem }
};

export { useLocalStorage };
