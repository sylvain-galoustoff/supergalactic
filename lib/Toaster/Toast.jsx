import style from "./Toaster.module.scss";
import { IoClose } from "react-icons/io5";

function Toast({ data, animation }) {
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
