import style from "./Calendar.module.scss";

function Cell({ day, month, year, callback }) {
  const handleClick = () => {
    const date = new Date(year, month, day);
    callback(date);
  };

  return (
    <div className={`${day ? "cell" : "emptyCell"}`} onClick={handleClick}>
      {day}
    </div>
  );
}

export default Cell;
