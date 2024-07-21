import style from "./Calendar.module.scss";

function Cell({ day, month, year }) {
  return <div className={style.cell}>{day}</div>;
}

export default Cell;
