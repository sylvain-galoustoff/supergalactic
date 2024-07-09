import { useSelector } from "react-redux";
import Toast from "./Toast";
import style from "./Toaster.module.scss";

function Toaster({ toasterId }) {
  const toastsList = useSelector((state) => state.toaster.toasts);

  const renderToast = Object.keys(toastsList).map((key) => <Toast key={key} data={toastsList[key]} />);

  return (
    <div className={style.toaster} id={toasterId}>
      {renderToast}
    </div>
  );
}

export default Toaster;
