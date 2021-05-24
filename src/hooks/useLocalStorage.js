import { useState, useEffect } from "react";

// hook used to update user info in local storage

const useLocalStorage = (key, initVal = null) => {
  const initial = localStorage.getItem(key) || initVal;
  const [item, setItem] = useState(initial);

  useEffect(
    function setLocalStorageKey() {
      if (item === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, item);
      }
    },
    [key, item]
  );

  return [item, setItem];
};

export default useLocalStorage;
