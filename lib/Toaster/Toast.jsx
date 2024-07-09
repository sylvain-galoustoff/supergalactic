import style from "./Toaster.module.scss";

function Toast({ data }) {
  return (
    <div className={`${style.taost} ${data.type} toast`}>
      <p className={`${style.header} toast-header`}>Header message</p>
      <p className={`${style.body} toast-body`}>{data.message}</p>
    </div>
  );
}

export default Toast;
