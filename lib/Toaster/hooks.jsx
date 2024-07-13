import { useDispatch } from "react-redux";
import { addToast } from "./redux/toasterSlice";

export const useToast = (newToast) => {
  const dispatch = useDispatch();

  const addToastToToaster = (newToast) => {
    dispatch(addToast(newToast));
  };

  return addToastToToaster;
};
