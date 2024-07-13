import { useDispatch } from "react-redux";
import style from "./Toaster.module.scss";
import { IoClose } from "react-icons/io5";
import { deleteToast } from "./redux/toasterSlice";

function Toast({ data, animation }) {
  const dispatch = useDispatch();

  const removeToast = () => {
    dispatch(deleteToast(data));
  };

  return (
    <div className={`${style.toast} ${data.type} ${style[animation]} toast`}>
      <div className={`${style.header} toast-header`}>
        <p>Header message</p>
        <IoClose onClick={removeToast} />
      </div>
      <p className={`${style.body} toast-body`}>{data.message}</p>
    </div>
  );
}

export default Toast;
