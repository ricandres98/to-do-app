import { useState } from "react";

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [item, setItem] = useState<T>(()  => {
		const itemValue = localStorage.getItem(key);

		if(itemValue) {
			return JSON.parse(itemValue);
		} 

		localStorage.setItem(key, JSON.stringify(initialValue));
		return initialValue;
	});

	const saveItem = (value: T) => {
		localStorage.setItem(key, JSON.stringify(value));
		setItem(value);
	}

	return { item, saveItem }
};

export { useLocalStorage };
