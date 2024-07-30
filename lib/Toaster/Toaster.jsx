import Toast from "./Toast";
import style from "./Toaster.module.scss";

function Toaster({
  toastsList,
  animation = "fromBottom",
  onRemoveToast,
  toasterId,
  autoDelete = false,
}) {
  const renderToast =
    toastsList &&
    Object.keys(toastsList).map((key) => (
      <Toast
        key={key}
        data={toastsList[key]}
        animation={animation}
        onRemoveToast={onRemoveToast}
        autoDelete={autoDelete}
      />
    ));

  return (
    <div className={`${style.toaster} toaster`} id={toasterId}>
      {renderToast}
    </div>
  );
}

export default Toaster;
