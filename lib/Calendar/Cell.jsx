import style from "./Calendar.module.scss";
import { format } from "date-fns";

function Cell({ day, month, year, today, callback }) {
  const handleClick = () => {
    const date = new Date(year, month, day);
    callback(date);
  };

  const isToday = () => {
    const formatToday = format(today, "yyyy-MM-dd");
    const formatCellDate = format(new Date(year, month, day), "yyyy-MM-dd");
    if (formatToday === formatCellDate) {
      return true;
    }
    return false;
  };

  return (
    <div className={`${day ? "cell" : "emptyCell"} ${isToday() ? "today" : ""}`} onClick={handleClick}>
      {day}
    </div>
  );
}

export default Cell;
