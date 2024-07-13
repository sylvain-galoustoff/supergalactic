import { useEffect, useState } from "react";

export const useToastsList = () => {
  const [toastList, setToastList] = useState([]);

  useEffect(() => {
    const handleAddToast = (event) => {
      const newToast = event.detail;
      setToastList((prevToastList) => [...prevToastList, newToast]);
    };

    window.addEventListener("addToast", handleAddToast);

    return () => {
      window.removeEventListener("addToast", handleAddToast);
    };
  }, []);

  return toastList;
};

export const useToast = () => {
  const dispatchToast = (type, message) => {
    const toastEvent = new CustomEvent("addToast", {
      detail: {
        id: Date.now(),
        type,
        message,
      },
    });
    window.dispatchEvent(toastEvent);
  };

  return dispatchToast;
};
