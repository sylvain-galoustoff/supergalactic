import Toast from "./Toast";
import style from "./Toaster.module.scss";

function Toaster({
  toastsList,
  animation,
  onRemoveToast,
  toasterId,
  automaticRemove = false,
}) {
  const renderToast =
    toastsList &&
    Object.keys(toastsList).map((key) => (
      <Toast
        key={key}
        data={toastsList[key]}
        animation={animation}
        onRemoveToast={onRemoveToast}
        automaticRemove={automaticRemove}
      />
    ));

  return (
    <div className={style.toaster} id={toasterId}>
      {renderToast}
    </div>
  );
}

export default Toaster;
