import style from "./Toaster.module.scss";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

function Toast({ data, animation, onRemoveToast }) {
  const [removing, setRemoving] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRemoving(true);
      setTimeout(() => {
        onRemoveToast(data.id);
      }, 300);
    }, 5000);
  }, []);

  const deleteToast = () => {
    setRemoving(true);
    setTimeout(() => {
      onRemoveToast(data.id);
    }, 300);
  };

  return (
    <div className={`${style.toast} ${data.type} ${style[animation]} ${removing && style.removing} toast`}>
      <div className={`${style.header} toast-header`}>
        <p>Header message</p>
        <IoClose onClick={deleteToast} />
      </div>
      <p className={`${style.body} toast-body`}>{data.message}</p>
    </div>
  );
}

export default Toast;
