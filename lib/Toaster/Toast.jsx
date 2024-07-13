import style from "./Toaster.module.scss";

function Toast({ data, animation }) {
  return (
    <div className={`${style.toast} ${data.type} ${style[animation]} toast`}>
      <p className={`${style.header} toast-header`}>Header message</p>
      <p className={`${style.body} toast-body`}>{data.message}</p>
    </div>
  );
}

export default Toast;
