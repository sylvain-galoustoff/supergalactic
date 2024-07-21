import style from "./Calendar.module.scss";

function Cell({ day, month, year, callback }) {
  const handleClick = () => {
    const date = new Date(year, month, day);
    callback(date);
  };

  return (
    <div className={style.cell} onClick={handleClick}>
      {day}
    </div>
  );
}

export default Cell;
