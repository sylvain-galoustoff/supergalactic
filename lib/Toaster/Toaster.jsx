import Toast from "./Toast";
import style from "./Toaster.module.scss";

function Toaster({ toastsList, animation, toasterId }) {
  const renderToast = Object.keys(toastsList).map((key) => (
    <Toast key={key} data={toastsList[key]} animation={animation} />
  ));

  return (
    <div className={style.toaster} id={toasterId}>
      {renderToast}
    </div>
  );
}

export default Toaster;
