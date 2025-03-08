import { useEffect, useState } from "react";

export const useLocalStorage = (data, method) => {
  const [storedData, setStoredData] = useState(null);

  const toLocalStorage = () => {
    switch (method) {
      case "get":
        console.log("Fetching from localStorage for key:", data);
        const obj = JSON.parse(localStorage.getItem(data));
        console.log("the obj",obj);
        setStoredData(obj); // Set the value to state
        break;
      case "set":
        console.log("Setting in localStorage for key:", data.key, "with value:", data.value);
        localStorage.setItem(data.key, JSON.stringify(data.value));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    toLocalStorage();
  }, [data, method]); // Ensure the effect runs on data or method change

  return { data: storedData };
};





