import { useDispatch } from "react-redux";
import style from "./Toaster.module.scss";
import { IoClose } from "react-icons/io5";
import { deleteToast } from "./redux/toasterSlice";
import { useEffect, useState } from "react";

function Toast({ data, animation }) {
  const dispatch = useDispatch();
  const [removing, setRemoving] = useState(false);

  const removeToast = () => {
    setRemoving(true);
    setTimeout(() => {
      dispatch(deleteToast(data));
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      setRemoving(true);
      setTimeout(() => {
        dispatch(deleteToast(data));
      }, 300);
    }, 5000);
  }, []);

  return (
    <div className={`${style.toast} ${data.type} ${style[animation]} ${removing && style.removing} toast`}>
      <div className={`${style.header} toast-header`}>
        <p>Header message</p>
        <IoClose onClick={removeToast} />
      </div>
      <p className={`${style.body} toast-body`}>{data.message}</p>
    </div>
  );
}

export default Toast;
