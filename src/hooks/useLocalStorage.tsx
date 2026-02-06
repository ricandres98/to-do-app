import { useState } from "react";

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [item, setItem] = useState<T>(() => {
    const itemValue = window.localStorage.getItem(key);

    if (itemValue) {
      return JSON.parse(itemValue);
    }

    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });


  const saveItem = (value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setItem(value);
  };

  return { item, saveItem,};
};

export { useLocalStorage };
